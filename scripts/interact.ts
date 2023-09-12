import { ethers, network } from 'hardhat'

async function main() {
let [admin1] = await ethers.getSigners()
  const amount = ethers.parseEther('1')
  const amount2 = ethers.parseEther('0.5')

  let arr = [
    '0xb12d5059F46a41D82e435fDda8Dc4010d6281fF7',
    '0x6B0eA893B1d253bfeeB183eFF6AE6e6D40c7284D',
    '0xd8500DA651A2e472AD870cDf76B5756F9c113257',
    '0xaaec95f93550c8dB4521ad16Eee49A9b34632fA7',
    '0xdE449A556Db775CCBB09477ba81F95FFA4683759',
    '0xE03F2A5b69BFD890bf5aF88c8b2a73416fA3F9Af',
    '0xe13169f75F3ac186486131862eF89c668Cf57DE9',
    '0xC76F962e24F4345301296Bf111529047ec3cA96E',
  ]

  //   const FACTORY = '0x3c68027368aC1938926f1716AfFAC8A95dDa6267'
  
  const multisig = await ethers.getContractAt(
    'IMulti',
    '0x5832A489EA41Ea03882b1bCD00bdC35958F4e5C8'
    )

    const impersonatedSigner = await ethers.getImpersonatedSigner(
      '0xb12d5059F46a41D82e435fDda8Dc4010d6281fF7'
    )

    // await admin1.sendTransaction({
    //   to: '0x9d4eF81F5225107049ba08F69F598D97B31ea644',
    //   value: amount,
    // })

    // await multisig.connect(impersonatedSigner)
    //     .createTransaction(amount2, '0xb12d5059F46a41D82e435fDda8Dc4010d6281fF7')

    const bal =  await ethers.provider.getBalance("0x5832A489EA41Ea03882b1bCD00bdC35958F4e5C8")

    // const impersonatedSigner1 = await ethers.getImpersonatedSigner(
    //   arr[0]
    // )
    const impersonatedSigner2 = await ethers.getImpersonatedSigner(
      arr[1]
    )
    const impersonatedSigner3 = await ethers.getImpersonatedSigner(
      arr[2]
    )
    const impersonatedSigner4 = await ethers.getImpersonatedSigner(
      arr[3]
    )
    // const impersonatedSigner5 = await ethers.getImpersonatedSigner(
    //   arr[4]
    // )

    // await multisig.connect(impersonatedSigner1).AprroveTransaction(2)
    await multisig.connect(impersonatedSigner2).AprroveTransaction(2)
    await multisig.connect(impersonatedSigner3).AprroveTransaction(2)
    await multisig.connect(impersonatedSigner4).AprroveTransaction(2)
    // await multisig.connect(impersonatedSigner5).AprroveTransaction(2)

    let result = await multisig.getTransaction(2)
console.log(result)
    // console.log(
    //   ` The current state of transaction5 after all approval has been made ${spender},
    //         ${ethers.formatEther(_amount)},
    //         ${parseInt(String(No))},
    //         ${status}
    //       }`
    // )
        }
  main().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
