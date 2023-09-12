import { ethers, network } from 'hardhat'

async function main() {
  const JOE = "0x80931330a8f49c26badb24474272fc263e408003";

  const joeContract = await ethers.getContractAt('ERC20INTERFACE', JOE)

  const JoeHolder = "0x9d4eF81F5225107049ba08F69F598D97B31ea644"
  const to = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"
  
  const sentAmount = ethers.parseEther("1");

  const JoeHolderSign = await ethers.getImpersonatedSigner(JoeHolder);

  // get balance of the sender before and after transferring
  console.log("balance of sender before transfer", ethers.formatEther(await joeContract.balanceOf(JoeHolder)))
  
  // get balance of the receiver before and after transferring
  console.log("balance of receiver before transfer", ethers.formatEther(await joeContract.balanceOf(to)))

  await joeContract.connect(JoeHolderSign).transfer(to, sentAmount);

  console.log("balance of sender after transfer", ethers.formatEther(await joeContract.balanceOf(JoeHolder)))


  console.log("balance of receiver after transfer", ethers.formatEther(await joeContract.balanceOf(to)))

}
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
