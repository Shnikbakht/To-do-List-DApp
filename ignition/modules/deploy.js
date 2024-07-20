const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const TodoList = await ethers.getContractFactory("TodoList");
    const todoList = await TodoList.deploy();

    console.log("TodoList contract deployed to:", todoList.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
