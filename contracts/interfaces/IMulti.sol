// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

struct Transaction {
    address spender;
    uint amount;
    uint numberOfApproval;
    bool isActive;
}

interface IMulti {
    function createTransaction(uint, address) external;

    function AprroveTransaction(uint) external;

    function createMultiSig(address[] memory) external;

    function getTransaction(
        uint
    ) external returns (Transaction memory _transaction);
}
