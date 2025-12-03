import { Page } from '@playwright/test';

export async function navigateToPaymentPage(page: Page, id: string) {
    let url = `http://localhost:3000/${id}`;
    await page.goto(url, { timeout: 60000 });
}

// Helper genérico para manter seu teste do Google funcionando com o novo padrão
export async function navigateTo(page: Page, url: string) {
    await page.goto(url);
}
