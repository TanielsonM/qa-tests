import PDFDocument from 'pdfkit';
import type PDFKit from 'pdfkit';
import * as fs from 'fs';
import { TestResult, TestSummary, COLORS } from './types';

const THEME = 'green';
const colors = COLORS[THEME];

/**
 * Create PDF document with modern green theme
 */
export function createPDFDocument(outputPath: string): PDFKit.PDFDocument {
    const doc = new PDFDocument({
        size: 'A4',
        margins: { top: 50, bottom: 50, left: 50, right: 50 },
    });

    doc.pipe(fs.createWriteStream(outputPath));
    return doc;
}

/**
 * Add header to PDF
 */
export function addHeader(doc: PDFKit.PDFDocument, summary: TestSummary): void {
    // Green gradient background
    doc.rect(0, 0, doc.page.width, 140).fill(colors.surface);

    // Accent bar at top
    doc.rect(0, 0, doc.page.width, 8).fill(colors.primary);

    // Title
    doc
        .fontSize(32)
        .fillColor(colors.primary)
        .font('Helvetica-Bold')
        .text('Relatório de Testes', 50, 50);

    // Timestamp
    const dateStr = summary.timestamp.toLocaleString('pt-BR', {
        dateStyle: 'long',
        timeStyle: 'medium',
    });
    doc
        .fontSize(11)
        .fillColor(colors.textSecondary)
        .font('Helvetica')
        .text(`Executado em: ${dateStr}`, 50, 90);

    // Move cursor
    doc.y = 160;
}

/**
 * Add summary section with statistics
 */
export function addSummarySection(doc: PDFKit.PDFDocument, summary: TestSummary): void {
    const y = doc.y;
    const boxHeight = 90;
    const boxWidth = (doc.page.width - 140) / 4;

    // Section title
    doc
        .fontSize(18)
        .fillColor(colors.text)
        .font('Helvetica-Bold')
        .text('Resumo', 50, y);

    const startY = y + 35;

    // Summary boxes
    const stats = [
        { label: 'Total', value: summary.total, color: colors.primary },
        { label: 'Aprovados', value: summary.passed, color: colors.success },
        { label: 'Falhados', value: summary.failed, color: colors.error },
        { label: 'Ignorados', value: summary.skipped, color: colors.warning },
    ];

    stats.forEach((stat, index) => {
        const x = 50 + index * (boxWidth + 10);

        // Box background with border
        doc
            .roundedRect(x, startY, boxWidth, boxHeight, 8)
            .fill(colors.background);

        doc
            .roundedRect(x, startY, boxWidth, boxHeight, 8)
            .lineWidth(2)
            .stroke(colors.border);

        // Value
        doc
            .fontSize(36)
            .fillColor(stat.color)
            .font('Helvetica-Bold')
            .text(stat.value.toString(), x, startY + 18, {
                width: boxWidth,
                align: 'center',
            });

        // Label
        doc
            .fontSize(10)
            .fillColor(colors.textSecondary)
            .font('Helvetica')
            .text(stat.label, x, startY + 62, {
                width: boxWidth,
                align: 'center',
            });
    });

    // Duration
    const durationText = `Duração Total: ${formatDuration(summary.duration)}`;
    doc
        .fontSize(11)
        .fillColor(colors.textSecondary)
        .text(durationText, 50, startY + boxHeight + 15);

    doc.y = startY + boxHeight + 40;
}

/**
 * Add progress bar
 */
export function addProgressBar(doc: PDFKit.PDFDocument, summary: TestSummary): void {
    const y = doc.y;
    const barWidth = doc.page.width - 200; // Reduced to leave more space for text
    const barHeight = 24;

    // Background with rounded corners
    doc
        .roundedRect(50, y, barWidth, barHeight, 12)
        .fill(colors.border);

    // Calculate widths
    const passedWidth = (summary.passed / summary.total) * barWidth;
    const failedWidth = (summary.failed / summary.total) * barWidth;
    const skippedWidth = (summary.skipped / summary.total) * barWidth;

    // Passed bar
    if (summary.passed > 0) {
        doc
            .roundedRect(50, y, passedWidth, barHeight, 12)
            .fill(colors.success);
    }

    // Failed bar
    if (summary.failed > 0) {
        doc
            .rect(50 + passedWidth, y, failedWidth, barHeight)
            .fill(colors.error);
    }

    // Skipped bar
    if (summary.skipped > 0) {
        const skipX = 50 + passedWidth + failedWidth;
        const isLast = summary.failed === 0 && summary.passed === 0;

        if (isLast) {
            doc.roundedRect(skipX, y, skippedWidth, barHeight, 12).fill(colors.warning);
        } else {
            doc.rect(skipX, y, skippedWidth, barHeight).fill(colors.warning);
        }
    }

    // Percentage text - positioned to the right of the bar
    const passRate = ((summary.passed / summary.total) * 100).toFixed(1);
    doc
        .fontSize(10)
        .fillColor(colors.text)
        .font('Helvetica-Bold')
        .text(`${passRate}% de Aprovação`, 50 + barWidth + 15, y + 7, {
            width: 130,
            align: 'left',
        });

    doc.y = y + barHeight + 35;
}

/**
 * Add test results section
 */
export function addTestResultsSection(
    doc: PDFKit.PDFDocument,
    tests: TestResult[]
): void {
    // Section title
    doc
        .fontSize(18)
        .fillColor(colors.text)
        .font('Helvetica-Bold')
        .text('Resultados dos Testes', 50, doc.y);

    doc.y += 25;

    tests.forEach((test, index) => {
        addTestItem(doc, test, index);
    });
}

/**
 * Add individual test item
 */
function addTestItem(doc: PDFKit.PDFDocument, test: TestResult, index: number): void {
    // Check if we need a new page
    if (doc.y > doc.page.height - 150) {
        doc.addPage();
        doc.y = 50;
    }

    const y = doc.y;
    const itemHeight = test.status === 'failed' ? 100 : 65;

    // Background card with border
    doc
        .roundedRect(50, y, doc.page.width - 100, itemHeight, 8)
        .fill(colors.background);

    doc
        .roundedRect(50, y, doc.page.width - 100, itemHeight, 8)
        .lineWidth(1.5)
        .stroke(colors.border);

    // Status icon and color
    const statusConfig = getStatusConfig(test.status);

    // Status indicator (circle)
    doc
        .circle(70, y + 22, 6)
        .fill(statusConfig.color);

    // Test title
    doc
        .fontSize(11)
        .fillColor(colors.text)
        .font('Helvetica-Bold')
        .text(test.title, 90, y + 15, {
            width: doc.page.width - 280,
            ellipsis: true,
        });

    // Suite name and duration on same line
    doc
        .fontSize(9)
        .fillColor(colors.textSecondary)
        .font('Helvetica')
        .text(test.suite, 90, y + 33, {
            width: doc.page.width - 350,
            ellipsis: true,
        });

    // Duration - positioned after suite name with separator
    const durationText = formatDuration(test.duration);
    const suiteWidth = doc.widthOfString(test.suite, { width: doc.page.width - 350 });
    doc
        .fontSize(9)
        .fillColor(colors.textSecondary)
        .font('Helvetica')
        .text(` • ${durationText}`, 90 + Math.min(suiteWidth, doc.page.width - 350), y + 33);

    // Status badge
    const badgeX = doc.page.width - 140;
    const badgeY = y + 15;
    const badgeWidth = 80;
    const badgeHeight = 22;

    doc
        .roundedRect(badgeX, badgeY, badgeWidth, badgeHeight, 4)
        .fill(statusConfig.color);

    doc
        .fontSize(9)
        .fillColor('#ffffff')
        .font('Helvetica-Bold')
        .text(statusConfig.label, badgeX, badgeY + 7, {
            width: badgeWidth,
            align: 'center',
        });

    // Error details for failed tests (truncated to prevent overflow)
    if (test.status === 'failed' && test.error) {
        const errorMsg = test.error.message || 'Erro desconhecido';
        // Truncate long error messages
        const maxLength = 150;
        const displayMsg = errorMsg.length > maxLength
            ? errorMsg.substring(0, maxLength) + '...'
            : errorMsg;

        doc
            .fontSize(8)
            .fillColor(colors.error)
            .font('Helvetica')
            .text(`Erro: ${displayMsg}`, 90, y + 55, {
                width: doc.page.width - 140,
                ellipsis: true,
            });
    }

    doc.y = y + itemHeight + 12;
}

/**
 * Add footer
 */
export function addFooter(doc: PDFKit.PDFDocument): void {
    const range = doc.bufferedPageRange();
    const pageCount = range.count;

    for (let i = 0; i < pageCount; i++) {
        doc.switchToPage(range.start + i);

        // Footer line
        doc
            .moveTo(50, doc.page.height - 40)
            .lineTo(doc.page.width - 50, doc.page.height - 40)
            .stroke(colors.border);

        // Footer text
        doc
            .fontSize(8)
            .fillColor(colors.textSecondary)
            .font('Helvetica')
            .text(
                `Gerado por Playwright PDF Reporter | Página ${i + 1} de ${pageCount}`,
                50,
                doc.page.height - 30,
                {
                    width: doc.page.width - 100,
                    align: 'center',
                }
            );
    }
}

/**
 * Get status configuration
 */
function getStatusConfig(status: TestResult['status']): {
    color: string;
    label: string;
} {
    switch (status) {
        case 'passed':
            return { color: colors.success, label: 'APROVADO' };
        case 'failed':
            return { color: colors.error, label: 'FALHADO' };
        case 'skipped':
            return { color: colors.warning, label: 'IGNORADO' };
        case 'timedOut':
            return { color: colors.error, label: 'TIMEOUT' };
        case 'interrupted':
            return { color: colors.warning, label: 'INTERROMPIDO' };
        default:
            return { color: colors.textSecondary, label: 'DESCONHECIDO' };
    }
}

/**
 * Format duration in ms to readable string
 */
function formatDuration(ms: number): string {
    if (ms < 1000) {
        return `${ms}ms`;
    }
    const seconds = (ms / 1000).toFixed(2);
    return `${seconds}s`;
}
