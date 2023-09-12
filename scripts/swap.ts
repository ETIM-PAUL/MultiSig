import { ethers, network } from 'hardhat'

async function main() {
  const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  const SHIBU = "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE"
  const uniSwap = await ethers.getContractAt("Uniswap", '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D')
  const wethContract = await ethers.getContractAt('IERC20', WETH)
  const shibuContract = await ethers.getContractAt('IERC20', SHIBU)

  const ETHHolder = "0xF04a5cC80B1E94C69B48f5ee68a08CD2F09A7c3E"
  const to = "0x9d4eF81F5225107049ba08F69F598D97B31ea644"
  
  const AmountOutMin = ethers.parseEther("1");
  
  const AmountinMax = ethers.parseEther('4')
  const path = [WETH, SHIBU]

  const currentTimestampInSeconds = Math.round(Date.now() / 1000)
  const deadline = currentTimestampInSeconds + 86400

  await network.provider.send('hardhat_setBalance', [
    ETHHolder,
    '0x5A2C8BA4FB8CF7000',
  ])

  const ETHHolderSign = await ethers.getImpersonatedSigner(ETHHolder);

  
  // await wethContract.connect(ETHHolderSign).approve(ETHHolder, uniSwap, AmountinMax)
  console.log("balance before", ethers.formatEther(await shibuContract.balanceOf(to)))
  
  const options = {value: ethers.parseUnits("0.01")}
  await uniSwap.connect(ETHHolderSign).swapExactETHForTokens(AmountOutMin, path, to, deadline, options);
  console.log("balance after", ethers.formatEther(await shibuContract.balanceOf(to)))

}
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
