import { test, expect } from "@playwright/test";

const base_url = "http://localhost:5173";

test.beforeEach(async ({ page }) => {
  await page.goto(base_url);
});

test("page loads and has correct title", async ({ page }) => {
  await expect(page).toHaveTitle("Senior QA Engineer Portfolio");
});

test("navbar renders with correct links", async ({ page }) => {
  await expect(page.getByRole("link", { name: "About" })).toBeVisible();  //gettting  the element via role attribute href and the name(text)
  await expect(page.getByText('Tech').first()).toBeVisible(); //getting the element via text solely - since there were 2 matched, used the first()
  await expect(page.locator('//a[text()="Experience"]')).toBeVisible();  //using xpath 
  await expect(page.getByTestId('Projects')).toBeVisible(); //using getByTestId approach [added in FE > via mapping]
  await expect(page.locator('[class="text-white no-underline hover:text-accent transition-colors"]').and(page.getByRole("link", {name: "Contact"}))).toBeVisible(); //using .and to distinguish between elements after using class
});


const roles = [
  "Full-Stack QA Engineer",
  "Test Automation Architect",
  "Quality Engineering Advocate",
  "API & Integration Testing Specialist",
];

test("Renders the first role as it types", async({ page }) => {
  const first_role = page.locator("[data-testid='typewriter']") // .first();
  await expect(page.locator("[data-testid='typewriter']")).not.toHaveText("",{timeout: 2000});

  const text = await first_role.textContent();
  expect(roles[0]).toContain(text?.trim());
});

test("Completes typing the first role", async({ page }) => {
  const first_role = page.locator("[data-testid='typewriter']") // .first();

  await expect(first_role).toHaveText(roles[0], {timeout: 5000});
});

test('cycles through all the roles', async({ page }) => {
  const current_role = page.locator("[data-testid='typewriter']") 

  for (const role of roles){
    await expect(current_role).toHaveText(role, {timeout: 10000});
  }

});

test("Verify logos to be present", async({ page }) => {
  await expect(page.getByTestId('github-logo')).toBeVisible();

  await expect(page.getByTestId('linkedin-logo')).toBeVisible();
});

test("about section renders", async ({ page }) => {
  await expect(
    page.getByRole("heading", {
      name: "Breaking Things. Building Confidence.",
    }),
  ).toBeVisible();
});

test('Verify cards present', async ({ page })=> {
  await expect(page.getByRole('heading', {name: "Build Scalable Automation"})).toBeVisible();

  const cards = page.locator('.glass-card');
  const count = await cards.count();

  for (let i=0; i < count; i++){
    await expect(cards.nth(i)).toHaveClass(/(^|\s)hover:text-accent(\s|$)/);
  }
})

test("applies correct styles before hover", async ({ page }) => {
  const card = page.locator(".glass-card").first();

  const styles = await card.evaluate((el) => {
    const s = getComputedStyle(el);
    return {
      backdropFilter: s.backdropFilter,
      background:     s.background,
      border:         s.borderColor,
      transition:     s.transition,
    };
  });

  expect(styles.backdropFilter).toBe("blur(12px)");
  expect(styles.border).toBe("rgba(255, 255, 255, 0.1)");
  expect(styles.transition).toContain("0.3s");
});

test("applies transform and border on hover", async ({ page }) => {
  const card = page.locator(".glass-card").first();

  await card.hover();

  const styles = await card.evaluate((el) => {
    const s = getComputedStyle(el);
    return {
      transform:   s.transform,
      borderColor: s.borderColor,
      boxShadow:   s.boxShadow,
    };
  });

  // transform: translateY(-6px) scale(1.02) comes back as a matrix
  expect(styles.transform).not.toBe("none");
  expect(styles.transform).not.toBe("matrix(1, 0, 0, 1, 0, 0)"); // identity = no transform

  expect(styles.boxShadow).toContain("rgba(116, 139, 171");
});

test("transition duration is applied", async ({ page }) => {
  const card = page.locator(".glass-card").first();

  const transition = await card.evaluate(
    (el) => getComputedStyle(el).transitionDuration
  );

  expect(transition).toContain("0.3s");
});