# TodoList DApp
This is a decentralized TodoList application built with Solidity for the Ethereum blockchain, and a React frontend using ethers.js to interact with the smart contract.

## Overview
The TodoList DApp allows users to:

- Create new tasks
- Mark tasks as completed
- Delete tasks

Tasks are stored on the Ethereum blockchain, ensuring they are decentralized and tamper-proof.

## Prerequisites
Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)
- MetaMask browser extension
- Truffle or Hardhat for contract deployment

## Installation

### Clone the repository:
```bash
git clone https://github.com/Shnikbakht/To-do-List-DApp.git
```

## Install dependencies

npm install
# or
yarn install

## Configure environment variables

Create a .env file in the root directory of the project and add your Ethereum contract address:

plaintext
Copy code
REACT_APP_CONTRACT_ADDRESS=0xYourContractAddressHere
Start the development server

bash
Copy code
npm start
# or
yarn start
Open your browser and navigate to http://localhost:3000 to view the application.

Usage
Connect MetaMask

Click on the "Connect MetaMask" button to connect your MetaMask wallet to the application.
Manage Tasks

Add Task: Enter a task in the input field and click the "Add Task" button to add it to the list.
Complete Task: Click the "Complete" button next to a task to mark it as completed. The task will change to a green checkmark.
Delete Task: Click the "Delete" button next to a task to remove it from the list.
Fun Button

Click the orange button labeled "This is not related to the assignment, just for fun" to see a playful message.
Smart Contract
The smart contract used for managing tasks is written in Solidity. It allows for creating, completing, and deleting tasks.

For more details on the smart contract, refer to the TodoList.sol file in the project's contract directory.

Contributing
Feel free to contribute to this project by submitting a pull request or opening an issue. Any feedback or suggestions are welcome!

License
This project is licensed under the MIT License. See the LICENSE file for more details.