import { type Page, type Locator, expect } from "@playwright/test";

/**
 * Page Object for the top navigation bar.
 *
 * Encapsulates every locator strategy used in the navbar tests
 * so that if a selector or attribute changes, only this file
 * needs updating.
 */
export class NavbarPage {
  readonly aboutLink: Locator;
  readonly techLink: Locator;
  readonly experienceLink: Locator;
  readonly projectsLink: Locator;
  readonly contactLink: Locator;

  constructor(private page: Page) {
    this.aboutLink = page.getByRole("link", { name: "About" });
    this.techLink = page.getByText("Tech").first();
    this.experienceLink = page.locator('//a[text()="Experience"]');
    this.projectsLink = page.getByTestId("Projects");
    this.contactLink = page
      .locator(
        '[class="text-white no-underline hover:text-accent transition-colors"]',
      )
      .and(page.getByRole("link", { name: "Contact" }));
  }

  async expectAllLinksVisible() {
    await expect(this.aboutLink).toBeVisible();
    await expect(this.techLink).toBeVisible();
    await expect(this.experienceLink).toBeVisible();
    await expect(this.projectsLink).toBeVisible();
    await expect(this.contactLink).toBeVisible();
  }
}
