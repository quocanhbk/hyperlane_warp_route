import fs from "fs";
import { task } from "hardhat/config";
import path from "path";
import { deployContract } from "../../procedures/deployContract";

task("deploy-ather-token", "Deploy Ather Token")
  .addParam("input", "Deploy input file")
  .setAction(async (taskArgs, hre) => {
    // parse input file
    const input = JSON.parse(
      fs.readFileSync(path.join(__dirname, taskArgs.input)).toString()
    );

    await deployContract({
      hre,
      contractAddress: input["contractAddress"] || null,
      contractName: "AtherToken",
      constructorArgs: [],
      exportPath: __dirname,
    });
  });
