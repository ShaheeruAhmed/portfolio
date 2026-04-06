import { test } from "../fixtures";
import { ROLES } from "../data/constants";

test("renders the first role as it types", async ({ heroPage }) => {
  await heroPage.expectTypewriterNotEmpty();
  await heroPage.expectTypewriterContains(ROLES[0]);
});

test("completes typing the first role", async ({ heroPage }) => {
  await heroPage.expectTypewriterText(ROLES[0]);
});

test("cycles through all the roles", async ({ heroPage }) => {
  for (const role of ROLES) {
    await heroPage.expectTypewriterText(role, 10000);
  }
});

test("social logos are visible", async ({ heroPage }) => {
  await heroPage.expectSocialLogosVisible();
});
