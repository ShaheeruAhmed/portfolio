import { test, expect } from "../fixtures";

test("page loads and has correct title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Senior QA Engineer Portfolio");
});

test("navbar renders with all correct links", async ({ navbarPage }) => {
  await navbarPage.expectAllLinksVisible();
});
