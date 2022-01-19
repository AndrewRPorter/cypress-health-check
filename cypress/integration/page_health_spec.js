import { SITES_TO_TEST } from "../support/constants";

describe("Page health checks", () => {
  const runPageHealthCheck = (url) => {
    it(`Verifying page health for: ${url}`, () => {
      cy.visit(url);
    });
  };

  SITES_TO_TEST.forEach((url) => {
    runPageHealthCheck(url);
  });
});
