import { type Page, type Locator, expect } from "@playwright/test";

/**
 * Page Object for the Projects / glass-card section.
 *
 * Covers card presence, CSS computed-style checks, and hover
 * interaction assertions.
 */
export class ProjectsPage {
  readonly heading: Locator;
  readonly cards: Locator;

  constructor(private page: Page) {
    this.heading = page.getByRole("heading", {
      name: "Build Scalable Automation",
    });
    this.cards = page.locator(".glass-card");
  }

  firstCard() {
    return this.cards.first();
  }

  async expectHeadingVisible() {
    await expect(this.heading).toBeVisible();
  }

  async expectAllCardsHaveHoverClass() {
    const count = await this.cards.count();
    for (let i = 0; i < count; i++) {
      await expect(this.cards.nth(i)).toHaveClass(
        /(^|\s)hover:text-accent(\s|$)/,
      );
    }
  }

  async getComputedStyles(locator: Locator, properties: string[]) {
    return locator.evaluate((el, props) => {
      const s = getComputedStyle(el);
      return Object.fromEntries(props.map((p) => [p, s.getPropertyValue(p)]));
    }, properties);
  }

  async expectDefaultStyles() {
    const card = this.firstCard();
    const styles = await card.evaluate((el) => {
      const s = getComputedStyle(el);
      return {
        backdropFilter: s.backdropFilter,
        borderColor: s.borderColor,
        transition: s.transition,
      };
    });

    expect(styles.backdropFilter).toBe("blur(12px)");
    expect(styles.borderColor).toBe("rgba(255, 255, 255, 0.1)");
    expect(styles.transition).toContain("0.3s");
  }

  async expectHoverStyles() {
    const card = this.firstCard();
    await card.hover();

    const styles = await card.evaluate((el) => {
      const s = getComputedStyle(el);
      return {
        transform: s.transform,
        borderColor: s.borderColor,
        boxShadow: s.boxShadow,
      };
    });

    expect(styles.transform).not.toBe("none");
    expect(styles.transform).not.toBe("matrix(1, 0, 0, 1, 0, 0)");
    expect(styles.boxShadow).toContain("rgba(116, 139, 171");
  }

  async expectTransitionDuration(expected: string) {
    const card = this.firstCard();
    const transition = await card.evaluate(
      (el) => getComputedStyle(el).transitionDuration,
    );
    expect(transition).toContain(expected);
  }
}
