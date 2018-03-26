const { expect } = require("chai");
const { resolve } = require("path");
const { countCommits } = require("..");

describe(".countCommits(fileLocation)", () => {
  it("returns the number of commits for a given file", async () => {
    const count = await countCommits(resolve(__dirname, "./do-not-modify.txt"));
    expect(count).to.equal(1);
  });
});
