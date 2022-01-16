import { ethers } from "hardhat";

async function main() {
   // We get the contract to deploy
  const ImperrioPresale = await ethers.getContractFactory("ImperrioPresale");
  const imperrioPresale = await ImperrioPresale.deploy();

  await imperrioPresale.deployed();

  console.log("Imperrio Presale deployed to:", imperrioPresale.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
