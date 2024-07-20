## TodoList DApp
This is a decentralized TodoList application built with Solidity for the Ethereum blockchain, and a React frontend using ethers.js to interact with the smart contract.

## Overview
The TodoList DApp allows users to:

Create new tasks
Mark tasks as completed
Delete tasks
Tasks are stored on the Ethereum blockchain, ensuring they are decentralized and tamper-proof.

## Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14 or later)
npm (v6 or later)
MetaMask browser extension
Truffle or Hardhat for contract deployment
Installation

## Clone the repository:

git clone https://github.com/your-username/todolist-dapp.git
cd todolist-dapp
Install the dependencies:

bash
Copy code
npm install
Deploy the smart contract:

Depending on whether you use Truffle or Hardhat, follow the respective steps to deploy your smart contract. Make sure to update the CONTRACT_ADDRESS in App.js after deployment.

Usage
Start the React application:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000.

Connect your MetaMask wallet.

Interact with the TodoList DApp by adding, completing, and deleting tasks.

Smart Contract
The smart contract is written in Solidity and can be found in the contracts directory. It includes functions to create, complete, and delete tasks.

Contract: TodoList
createTask(string memory _content): Creates a new task with the given content.
completeTask(uint _id): Toggles the completion status of the task with the given id.
deleteTask(uint _id): Deletes the task with the given id.
getTasks(): Returns an array of all tasks.
Environment Variables
Make sure to provide the following environment variables in a .env file at the root of your project:

REACT_APP_CONTRACT_ADDRESS: The address of the deployed TodoList contract.
REACT_APP_INFURA_PROJECT_ID: Your Infura project ID (if using Infura).
Example .env file:

makefile
Copy code
REACT_APP_CONTRACT_ADDRESS=0xYourContractAddress
REACT_APP_INFURA_PROJECT_ID=your-infura-project-id
License
This project is licensed under the MIT License - see the LICENSE file for details.

