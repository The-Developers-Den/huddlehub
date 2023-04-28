require("hardhat-deploy")
require("hardhat-deploy-ethers")

const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

const main = async () => {
    console.log("Wallet Ethereum Address:", wallet.address)

    const DealClient = await ethers.getContractFactory("Huddle1")
    console.log("Deploying DealClient...")
    const dc = await DealClient.deploy()
    await dc.deployed()
    console.log("DealClient deployed to:", dc.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

// 0xB16442cc83A83289370780680495a87213B73f36
