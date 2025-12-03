/**
 * Types for PDF Reporter
 */

export interface TestResult {
    title: string;
    status: 'passed' | 'failed' | 'skipped' | 'timedOut' | 'interrupted';
    duration: number;
    error?: {
        message: string;
        stack?: string;
    };
    suite: string;
}

export interface TestSummary {
    total: number;
    passed: number;
    failed: number;
    skipped: number;
    duration: number;
    timestamp: Date;
}

export interface PDFReportOptions {
    outputPath: string;
    title?: string;
    theme?: 'light' | 'dark';
    includeScreenshots?: boolean;
}

export const COLORS = {
    green: {
        background: '#ffffff',
        surface: '#f0fdf4',
        surfaceAlt: '#dcfce7',
        primary: '#10b981',
        primaryDark: '#059669',
        success: '#22c55e',
        error: '#ef4444',
        warning: '#f59e0b',
        text: '#1f2937',
        textSecondary: '#6b7280',
        border: '#d1d5db',
        accent: '#34d399',
    },
    dark: {
        background: '#1a1a1a',
        surface: '#2d2d2d',
        primary: '#4a9eff',
        success: '#4ade80',
        error: '#f87171',
        warning: '#fbbf24',
        text: '#e5e5e5',
        textSecondary: '#a3a3a3',
        border: '#404040',
    },
    light: {
        background: '#ffffff',
        surface: '#f5f5f5',
        primary: '#2563eb',
        success: '#22c55e',
        error: '#ef4444',
        warning: '#f59e0b',
        text: '#171717',
        textSecondary: '#737373',
        border: '#e5e5e5',
    },
};
