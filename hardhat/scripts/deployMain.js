// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  await hre.run("compile");

  // We get the contract to deploy
  const signers = await hre.ethers.getSigners();
  const addresses = signers.map((signer) => signer.address);
  console.log(addresses[0]);

  const NFT = await hre.ethers.getContractFactory("SouljaNFT");
  const nft = await NFT.deploy("Soulja World", "SLJA", "souljamvp.netlify.app");
  await nft.deployed();

  const ERC20 = await hre.ethers.getContractFactory("CrankToken");
  const erc20 = await ERC20.deploy(
    "CRANK",
    "CRANK",
    100,
    addresses[0],
    nft.address
  );
  await erc20.deployed();

  const SignatureRegistrar = await hre.ethers.getContractFactory(
    "SignatureRegistrar"
  );
  const sr = await SignatureRegistrar.deploy();
  await sr.deployed();

  console.log("NFT deployed to: ", nft.address);
  console.log("ERC20 deployed to: ", erc20.address);
  console.log("Registrar deployed to: ", sr.address);

  let totalGasCost = 0;
  [nft, erc20, sr].forEach(c => {
    totalGasCost += Number(c.deployTransaction.gasLimit);
  })

  console.log("GAS COST: ", totalGasCost);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
