import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173");
});

test("page loads and has correct title", async ({ page }) => {
  await expect(page).toHaveTitle("Senior QA Engineer Portfolio");
});

test("navbar renders with correct links", async ({ page }) => {
  await expect(page.getByText("Shaheer").first()).toBeVisible();
  await expect(page.getByRole("link", { name: "About" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Projects" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();
});

// test("hero section renders correctly", async ({ page }) => {
//   await expect(page.getByRole("heading", { name: "Shaheer" })).toBeVisible();
//   await expect(page.getByRole("link", { name: "See My Work" })).toBeVisible();
// });

test("about section renders", async ({ page }) => {
  await expect(page.getByRole("heading", { name: "About Me" })).toBeVisible();
});

// test("projects section renders with cards", async ({ page }) => {
//   await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();
//   await expect(page.getByText("Portfolio Website")).toBeVisible();
// });

// test("contact section renders", async ({ page }) => {
//   await expect(
//     page.getByRole("heading", { name: "Get In Touch" }),
//   ).toBeVisible();
//   await expect(page.getByRole("link", { name: "Say Hello" })).toBeVisible();
// });

// test("navbar links scroll to correct sections", async ({ page }) => {
//   await page.getByRole("link", { name: "About" }).click();
//   await expect(page.locator("#about")).toBeInViewport();

//   await page.getByRole("link", { name: "Projects" }).click();
//   await expect(page.locator("#projects")).toBeInViewport();

//   await page.getByRole("link", { name: "Contact" }).click();
//   await expect(page.locator("#contact")).toBeInViewport();
// });
