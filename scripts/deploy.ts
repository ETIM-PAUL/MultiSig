import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = ethers.parseEther("0.001");

  const lock = await ethers.deployContract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  await lock.waitForDeployment();

  const contractBalance = await lock.getContractDetails()
  const bal = ethers.formatEther(contractBalance[0])
  const lockedTime = contractBalance[1]

  console.log(lockedTime)
  
  console.log(
    `Lock with ${ethers.formatEther(
      lockedAmount
      )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
      );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
