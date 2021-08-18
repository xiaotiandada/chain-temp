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

    address[] public contracts;

    // mint
    function mint(
        string memory name,
        string memory symbol,
        uint256 initialBalance
    ) public {
        console.log("Create ERC20");
        address contractAddress = address(
            new Token(name, symbol, initialBalance)
        );
        console.log("contractAddress '%s'", contractAddress);
        contracts.push(contractAddress);
    }

    function list() public view returns (address[] memory) {
        return contracts;
    }
}
