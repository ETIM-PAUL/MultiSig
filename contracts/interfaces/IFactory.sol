// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

interface IFactory {
    function createMultiSig(address[] memory _clonedSigAdmins) external payable;
}
