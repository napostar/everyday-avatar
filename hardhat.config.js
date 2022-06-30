require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("hardhat-deploy");
require('hardhat-contract-sizer');

module.exports = {
  networks: {
    defaultNetwork: "hardhat",
    hardhat:{
      chainId: 31337,
      blockConfirmations: 1
    },
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      chainId: 4,
      accounts: [
        process.env.PRIVATE_KEY_DEPLOYER,
        process.env.PRIVATE_KEY_USER_2,
        process.env.PRIVATE_KEY_USER_3,
      ].filter((x) => x !== undefined),
    },
    mumbai: {
      url: process.env.POLYGON_MUMBAI_ALCHEMY_URL || "",
      chainId: 80001,
      accounts: [
        process.env.PRIVATE_KEY_DEPLOYER
      ].filter((x) => x !== undefined),
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
  
  namedAccounts: {
    deployer: {
      default: 0,
      4: 0,
      80001:0
    },
    user2: {
      default: 1,
      4: 1,
    },
    user3: {
      default: 2,
      4: 2,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.11",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1,
          },
        },
      },
      {
        version: "0.8.7",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.4.24",
      },
    ],
  },
  mocha: {
    timeout: 10000000,
  },
};