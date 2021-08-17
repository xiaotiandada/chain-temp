pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// ERC20 Token
contract Token is ERC20 {
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialBalance
    ) public ERC20(name, symbol) {
        _mint(msg.sender, initialBalance);
    }
}

// Create ERC20 Token
contract TokenFactory {
    constructor() {}

    uint256[] tokenList;

    // mint
    // TODO： save token list
    function mint(
        string memory name,
        string memory symbol,
        uint256 initialBalance
    ) public {
        console.log("Create ERC20");
        new Token(name, symbol, initialBalance);
    }

    function list() public view returns (uint256[] memory) {
        return tokenList;
    }
}
