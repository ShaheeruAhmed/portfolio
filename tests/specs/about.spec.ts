import { test } from "../fixtures";

test("about section renders with heading", async ({ aboutPage }) => {
  await aboutPage.expectHeadingVisible();
});
