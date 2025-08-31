// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DuckSmart {
    string public agentName = "DuckSmart Agent";
    mapping(address => uint256) public balances;
    uint256 public servicePrice = 10; // $DUCK token units

    event ServiceRequested(address indexed user, string request, uint256 paid);

    function payForService() public payable {
        require(msg.value >= servicePrice, "Insufficient $DUCK tokens sent.");
        balances[msg.sender] += msg.value;
    }

    function requestService(string memory request) public {
        require(balances[msg.sender] >= servicePrice, "Pay first to use service.");
        balances[msg.sender] -= servicePrice;
        emit ServiceRequested(msg.sender, request, servicePrice);
    }
}
