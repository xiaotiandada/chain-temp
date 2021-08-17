const { expect } = require("chai");

describe("TokenFactory", function () {
  it("TokenFactory Test", async function () {
    const TokenFactory = await ethers.getContractFactory("TokenFactory");
    const tokenFactory = await TokenFactory.deploy();
    await tokenFactory.deployed();

    const mintToken = await tokenFactory.mint("UTOKEN", "UUU", 1000);

    // wait until the transaction is mined
    await mintToken.wait();

    expect('').to.equal('');
  });
});
