import {
    Reporter,
    FullConfig,
    Suite,
    TestCase,
    TestResult as PlaywrightTestResult,
    FullResult,
} from '@playwright/test/reporter';
import * as path from 'path';
import * as fs from 'fs';
import { TestResult, TestSummary } from './types';
import {
    createPDFDocument,
    addHeader,
    addSummarySection,
    addProgressBar,
    addTestResultsSection,
    addFooter,
} from './pdf-utils';

/**
 * Custom Playwright Reporter that generates PDF reports
 */
class PDFReporter implements Reporter {
    private tests: TestResult[] = [];
    private startTime: Date = new Date();
    private config: FullConfig | undefined;

    onBegin(config: FullConfig, suite: Suite): void {
        this.config = config;
        this.startTime = new Date();
        console.log('\n📄 PDF Reporter: Starting test execution...\n');
    }

    onTestEnd(test: TestCase, result: PlaywrightTestResult): void {
        const testResult: TestResult = {
            title: test.title,
            suite: test.parent.title,
            status: result.status,
            duration: result.duration,
            error: result.error
                ? {
                    message: result.error.message || 'Unknown error',
                    stack: result.error.stack,
                }
                : undefined,
        };

        this.tests.push(testResult);
    }

    async onEnd(result: FullResult): Promise<void> {
        console.log('\n📊 Generating PDF report...\n');

        // Calculate summary
        const summary: TestSummary = {
            total: this.tests.length,
            passed: this.tests.filter((t) => t.status === 'passed').length,
            failed: this.tests.filter((t) => t.status === 'failed').length,
            skipped: this.tests.filter((t) => t.status === 'skipped').length,
            duration: this.tests.reduce((sum, t) => sum + t.duration, 0),
            timestamp: this.startTime,
        };

        // Create output directory
        const outputDir = path.join(process.cwd(), 'test-reports');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Generate filename with timestamp
        const timestamp = this.startTime
            .toISOString()
            .replace(/:/g, '-')
            .replace(/\..+/, '')
            .replace('T', '_');
        const outputPath = path.join(outputDir, `test-report-${timestamp}.pdf`);

        // Create PDF
        const doc = createPDFDocument(outputPath);

        // Add sections
        addHeader(doc, summary);
        addSummarySection(doc, summary);
        addProgressBar(doc, summary);
        addTestResultsSection(doc, this.tests);
        addFooter(doc);

        // Finalize PDF
        doc.end();

        // Wait for PDF to be written
        await new Promise<void>((resolve) => {
            doc.on('finish', () => {
                console.log(`\n✅ PDF report generated successfully!`);
                console.log(`📂 Location: ${outputPath}\n`);
                console.log(`📈 Summary:`);
                console.log(`   Total: ${summary.total}`);
                console.log(`   ✓ Passed: ${summary.passed}`);
                console.log(`   ✗ Failed: ${summary.failed}`);
                console.log(`   ⊘ Skipped: ${summary.skipped}`);
                console.log(`   ⏱  Duration: ${(summary.duration / 1000).toFixed(2)}s\n`);
                resolve();
            });
        });
    }
}

export default PDFReporter;
