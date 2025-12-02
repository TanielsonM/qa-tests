import { test, expect } from '@playwright/test';

test('exemplo de teste básico', async ({ page }) => {
  // Navegar para a página
  await page.goto('https://example.com');
  
  // Verificar título da página
  await expect(page).toHaveTitle(/Example Domain/);
  
  // Verificar que há um link na página
  const link = page.getByRole('link', { name: 'More information...' });
  await expect(link).toBeVisible();
});

