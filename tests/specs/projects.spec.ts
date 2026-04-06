import { test } from "../fixtures";

test("project cards are present with hover class", async ({
  projectsPage,
}) => {
  await projectsPage.expectHeadingVisible();
  await projectsPage.expectAllCardsHaveHoverClass();
});

test("applies correct default styles", async ({ projectsPage }) => {
  await projectsPage.expectDefaultStyles();
});

test("applies transform and border on hover", async ({ projectsPage }) => {
  await projectsPage.expectHoverStyles();
});

test("transition duration is applied", async ({ projectsPage }) => {
  await projectsPage.expectTransitionDuration("0.3s");
});
