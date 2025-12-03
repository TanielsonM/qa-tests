import { test, expect } from '@playwright/test';

test.describe('Checkout', () => {
  test('exemplo de teste de checkout', async ({ page }) => {
    await page.goto('/checkout');
    
    // Exemplo de teste - ajustar conforme necessário
    await expect(page).toHaveTitle(/Checkout/i);
  });
});
