const { ethers } = require('hardhat');
const abi = require('./TodoList.json');

const todoListAddress = process.env.TODO_LIST_ADDRESS;

const getTasks = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(todoListAddress, abi, provider);
  const tasks = await contract.getTasks();
  return tasks;
};

const createTask = async (content) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(todoListAddress, abi, signer);
  await contract.createTask(content);
};

const completeTask = async (id) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(todoListAddress, abi, signer);
  await contract.completeTask(id);
};

const deleteTask = async (id) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(todoListAddress, abi, signer);
  await contract.deleteTask(id);
};

module.exports = {
  getTasks,
  createTask,
  completeTask,
  deleteTask
};
