import { type Page, type Locator, expect } from "@playwright/test";

/**
 * Page Object for the About section.
 */
export class AboutPage {
  readonly heading: Locator;

  constructor(private page: Page) {
    this.heading = page.getByRole("heading", {
      name: "Breaking Things. Building Confidence.",
    });
  }

  async expectHeadingVisible() {
    await expect(this.heading).toBeVisible();
  }
}
