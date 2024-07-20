# TodoList DApp

This is a decentralized TodoList application built with Solidity for the Ethereum blockchain, and a React frontend using ethers.js to interact with the smart contract.

## Overview

The TodoList DApp allows users to:

- Create new tasks
- Mark tasks as completed
- Delete tasks

Tasks are stored on the Ethereum blockchain, ensuring they are decentralized and tamper-proof.

## Repository Structure

mkdir -p To-do-List-DApp/contracts
mkdir -p To-do-List-DApp/ignition/modules
mkdir -p To-do-List-DApp/my-todo-dapp/public
mkdir -p To-do-List-DApp/my-todo-dapp/src
mkdir -p To-do-List-DApp/test

touch To-do-List-DApp/README.md
touch To-do-List-DApp/contracts/ToDoList.sol
touch To-do-List-DApp/hardhat.config.js
touch To-do-List-DApp/ignition/modules/Lock.js
touch To-do-List-DApp/ignition/modules/deploy.js
touch To-do-List-DApp/my-todo-dapp/.gitignore
touch To-do-List-DApp/my-todo-dapp/README.md
touch To-do-List-DApp/my-todo-dapp/package-lock.json
touch To-do-List-DApp/my-todo-dapp/package.json
touch To-do-List-DApp/my-todo-dapp/public/favicon.ico
touch To-do-List-DApp/my-todo-dapp/public/index.html
touch To-do-List-DApp/my-todo-dapp/public/logo192.png
touch To-do-List-DApp/my-todo-dapp/public/logo512.png
touch To-do-List-DApp/my-todo-dapp/public/manifest.json
touch To-do-List-DApp/my-todo-dapp/public/robots.txt
touch To-do-List-DApp/my-todo-dapp/src/App.css
touch To-do-List-DApp/my-todo-dapp/src/App.js
touch To-do-List-DApp/my-todo-dapp/src/App.test.js
touch To-do-List-DApp/my-todo-dapp/src/ToDoList.js
touch To-do-List-DApp/my-todo-dapp/src/TodoList.json
touch To-do-List-DApp/my-todo-dapp/src/index.css
touch To-do-List-DApp/my-todo-dapp/src/index.js
touch To-do-List-DApp/my-todo-dapp/src/logo.svg
touch To-do-List-DApp/my-todo-dapp/src/reportWebVitals.js
touch To-do-List-DApp/my-todo-dapp/src/setupTests.js
touch To-do-List-DApp/test/Lock.js
touch To-do-List-DApp/package-lock.json
touch To-do-List-DApp/package.json

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)
- MetaMask browser extension
- Truffle or Hardhat for contract deployment

## Installation

## Clone the repository:

```bash
git clone https://github.com/Shnikbakht/To-do-List-DApp.git
```

## Install dependencies

npm install

or

yarn install

## Configure environment variables

You will need two .env files:

## React App (.env file in the root of the React app):

Create a .env file in the root directory of the React application and add the Ethereum contract address:

```sh
REACT_APP_CONTRACT_ADDRESS=0xYourContractAddressHere
```

# Smart Dapp (.env file in the root of the smart contract project):

Create a .env file in the root directory of your smart contract project with the following content:

```sh
INFURA_PROJECT_ID=YourInfuraProjectIDHere
PRIVATE_KEY=YourPrivateKeyHere
```

## Deploy the Smart Contract

Before running the React application, you need to deploy the smart contract. Run the following command to deploy your smart contract to the Sepolia network:

```sh
npx hardhat run ignition/modules/deploy.js --network sepolia
```

## Start the development server

npm start

# or

yarn start

Open your browser and navigate to http://localhost:3000 to view the application.

## Usage

Connect MetaMask

Click on the "Connect MetaMask" button to connect your MetaMask wallet to the application.
Manage Tasks

Add Task: Enter a task in the input field and click the "Add Task" button to add it to the list.
Complete Task: Click the "Complete" button next to a task to mark it as completed. The task will change to a green checkmark.
Delete Task: Click the "Delete" button next to a task to remove it from the list.
Fun Button

## Smart Contract

The smart contract used for managing tasks is written in Solidity. It allows for creating, completing, and deleting tasks.

For more details on the smart contract, refer to the TodoList.sol file in the project's contract directory.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
