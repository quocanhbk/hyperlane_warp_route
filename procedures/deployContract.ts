import { BaseContract } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import path from "path";
import { exportContractAddress, verifyContract } from "./utils";

interface DeployContractInput {
  hre: HardhatRuntimeEnvironment;

  /** The contract that deployed, but hasn't been verified */
  contractAddress: string | null;

  /** The contract name you want to deploy */
  contractName: string;

  /** Parameters to pass to the constructor */
  constructorArgs: any[];

  /** Path that export file will be exported to */
  exportPath: string;

  /** For debugging: when true, there will be console log of deployment's info
   * @default true
   */
  debug?: boolean;
}

export const deployContract = async ({
  hre,
  contractAddress,
  contractName,
  constructorArgs,
  exportPath,
  debug = true,
}: DeployContractInput) => {
  const [deployer] = await hre.ethers.getSigners();

  const deployerAddress = await deployer.getAddress();

  if (debug) console.log(`Deploy contracts with address: ${deployerAddress}`);

  const contractFactory = await hre.ethers.getContractFactory(contractName);

  let contract: BaseContract;

  // only deploy contract only when contract isn't deployed yet
  if (!contractAddress) {
    contract = await contractFactory.deploy(...constructorArgs);
    contractAddress = await contract.getAddress();
  } else {
    if (debug) console.log("Contract is already deployed");
    contract = await hre.ethers.getContractAt(contractName, contractAddress);
  }

  if (debug)
    console.log(`${contractName} Contract Address: ${contractAddress}`);
  // export contract address to a file
  exportContractAddress(path.join(exportPath, "deploy_output.json"), {
    contractAddress: contractAddress,
  });

  if (debug) console.log("Verify contracts...");

  await verifyContract({
    hre,
    contractAddress: contractAddress,
    constructorArgs,
    contractUrl: `contracts/${contractName}.sol:${contractName}`,
  });

  console.log("Setup completed!");
};
