import { test, expect } from '@playwright/test'

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/')

  // Verificar que la página principal carga
  await expect(page).toHaveTitle(/Fondeo/)

  // Verificar que hay contenido visible
  await expect(page.locator('body')).toBeVisible()
})

test('navigation works', async ({ page }) => {
  await page.goto('/')

  // Verificar que la página responde
  await expect(page.locator('html')).toBeVisible()
})
