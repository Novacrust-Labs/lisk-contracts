import { ethers } from "hardhat";

async function main() {
    const MockUSDC = await ethers.getContractFactory("MockUSDC");
    const usdc = await MockUSDC.deploy();
    await usdc.deployed();
    console.log("MockUSDC deployed at:", usdc.address);
}

main();
