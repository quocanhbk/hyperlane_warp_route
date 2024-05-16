import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/types";
import "./scripts/token/deploy";
import "./scripts/vault/deploy";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      accounts: [
        {
          privateKey: process.env.PRIVATE_KEY as string,
          balance: "100000000000000000000000000",
        },
        {
          privateKey: process.env.PRIVATE_KEY_2 as string,
          balance: "100000000000000000000000000",
        },
        {
          privateKey: process.env.PRIVATE_KEY_3 as string,
          balance: "100000000000000000000000000",
        },
      ],
    },
    "sepolia-optimistic": {
      url: process.env.RPC_11155420,
      accounts: [process.env.PRIVATE_KEY as string],
      gasPrice: 35000000000,
    },
    sepolia: {
      url: process.env.RPC_11155111,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    polygon: {
      url: process.env.RPC_137,
      accounts: [process.env.PRIVATE_KEY as string],
      gasPrice: 150000000000,
    },
    mumbai: {
      url: process.env.RPC_80001,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    gin: {
      url: process.env.RPC_20240129,
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
  etherscan: {
    customChains: [
      {
        network: "sepolia-optimistic",
        chainId: 11155420,
        urls: {
          apiURL: "https://api-sepolia-optimistic.etherscan.io/api",
          browserURL: "https://sepolia-optimism.etherscan.io/",
        },
      },
      {
        network: "gin",
        chainId: 20240129,
        urls: {
          apiURL: "https://gin-testnet-explorer.alt.technology/api",
          browserURL: "https://gin-testnet-explorer.alt.technology",
        },
      },
    ],
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY as string,
      gin: process.env.ETHERSCAN_API_KEY as string,
      sepolia: process.env.ETHERSCAN_API_KEY as string,
      polygonMumbai: process.env.POLYGONSCAN_API_KEY as string,
      polygon: process.env.POLYGONSCAN_API_KEY as string,
      "sepolia-optimistic": process.env.OPTSCAN_API_KEY as string,
    },
  },
};

export default config;
