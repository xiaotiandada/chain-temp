const { expect } = require("chai");

describe("BasicToken", function () {
  it("BasicToken Test", async function () {
    const BasicToken = await ethers.getContractFactory("BasicToken");
    const basicToken = await BasicToken.deploy();
    await basicToken.deployed();
    expect('').to.equal('');
  });
});
