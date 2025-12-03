import { test, expect } from '@playwright/test';
import { navigateTo } from '../helpers/navigation-helper';

test.describe('Regressão', () => {
  test('Primeiro teste', async ({ page }) => {
    // Usando o padrão de Helper (Função)
    await navigateTo(page, 'https://www.google.com.br/');

    await expect(page).toHaveTitle(/Google/i);
  });
});
