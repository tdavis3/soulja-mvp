require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    matic: {
      url: "https://rpc-mumbai.maticvigil.com", //matic testnet
      accounts: ["d08793d2a78b7f0c52a46c8320ce00c4849664278d0e859c3e85ea9ea201d14b"] // 0x69647a6B360F0f32B4f5F6De2cA33065C35cB183
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/460f40a260564ac4a4f4b3fffb032dad",
      accounts: ["d08793d2a78b7f0c52a46c8320ce00c4849664278d0e859c3e85ea9ea201d14b"] // 0x69647a6B360F0f32B4f5F6De2cA33065C35cB183
    },
    local: {
      url: "http://127.0.0.1:7545",
      accounts: ["18bb954b3363c610292e30cefc901ea50034a2b14f511a7a1a6d130d90091041"]
    }
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 100,
    enabled: true
  }
};

