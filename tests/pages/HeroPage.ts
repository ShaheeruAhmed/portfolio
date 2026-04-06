import { type Page, type Locator, expect } from "@playwright/test";

/**
 * Page Object for the Hero / landing section.
 *
 * Covers the typewriter role rotation and social logo links.
 */
export class HeroPage {
  readonly typewriter: Locator;
  readonly githubLogo: Locator;
  readonly linkedinLogo: Locator;

  constructor(private page: Page) {
    this.typewriter = page.locator("[data-testid='typewriter']");
    this.githubLogo = page.getByTestId("github-logo");
    this.linkedinLogo = page.getByTestId("linkedin-logo");
  }

  async expectTypewriterNotEmpty(timeout = 2000) {
    await expect(this.typewriter).not.toHaveText("", { timeout });
  }

  async expectTypewriterText(text: string, timeout = 5000) {
    await expect(this.typewriter).toHaveText(text, { timeout });
  }

  async expectTypewriterContains(text: string) {
    const content = await this.typewriter.textContent();
    expect(text).toContain(content?.trim());
  }

  async expectSocialLogosVisible() {
    await expect(this.githubLogo).toBeVisible();
    await expect(this.linkedinLogo).toBeVisible();
  }
}
