import { test as base } from "@playwright/test";
import { NavbarPage } from "../pages/NavbarPage";
import { HeroPage } from "../pages/HeroPage";
import { AboutPage } from "../pages/AboutPage";
import { ProjectsPage } from "../pages/ProjectsPage";

/**
 * Declare the shape of our custom fixtures so TypeScript
 * knows what's available in each test function's argument.
 */
type Fixtures = {
  navbarPage: NavbarPage;
  heroPage: HeroPage;
  aboutPage: AboutPage;
  projectsPage: ProjectsPage;
};

/**
 * Extended test function that auto-injects page objects.
 *
 * How it works:
 *  - Each fixture receives the built-in `page` fixture from Playwright.
 *  - It constructs the page object and navigates to "/".
 *  - `use(...)` hands the object to the test; after the test finishes,
 *    Playwright tears it down automatically.
 *
 * In specs, import this `test` instead of `@playwright/test`'s `test`.
 */
export const test = base.extend<Fixtures>({
  navbarPage: async ({ page }, use) => {
    await page.goto("/");
    await use(new NavbarPage(page));
  },

  heroPage: async ({ page }, use) => {
    await page.goto("/");
    await use(new HeroPage(page));
  },

  aboutPage: async ({ page }, use) => {
    await page.goto("/");
    await use(new AboutPage(page));
  },

  projectsPage: async ({ page }, use) => {
    await page.goto("/");
    await use(new ProjectsPage(page));
  },
});

export { expect } from "@playwright/test";
