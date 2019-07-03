"use strict";
const fs = require("fs");
const path = require("path");
const assert = require("assert");
const fixturesDir = path.join(__dirname, "snapshots");
// transform function
const VueEngine = require("../bin/engines/vue");

describe("Snapshot testing", () => {
  fs.readdirSync(fixturesDir).map(caseName => {
    const normalizedTestName = caseName.replace(/-/g, " ");
    it(`Test ${normalizedTestName}`, function() {
      const fixtureDir = path.join(fixturesDir, caseName);
      const actualFilePath = path.join(fixtureDir, "input.vue");
      const transpiler = VueEngine(actualFilePath);
      if (!transpiler.hasSupportedVueTemplate()) {
        return;
      }
      const actualOutput = transpiler.convertTemplate();
      const expectedFilePath = path.join(fixtureDir, "output.html");
      // Usage: update snapshots
      // UPDATE_SNAPSHOT=1 npm test
      if (!fs.existsSync(expectedFilePath) || process.env.UPDATE_SNAPSHOT) {
        fs.writeFileSync(expectedFilePath, actualOutput);
        this.skip(); // skip when updating snapshots
        return;
      }
      // compare input and output
      const expected = fs.readFileSync(expectedFilePath, "utf-8");
      assert.strictEqual(
        actualOutput,
        expected,
        `
${fixtureDir}
`,
      );
    });
  });
});
