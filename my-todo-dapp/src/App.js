// export default App;
import dotenv from 'dotenv';
import React, { useEffect, useState } from 'react';
import './App.css'; // Importing the CSS file
require('dotenv').config();
dotenv.config(path:);

const { ethers } = require('ethers');
const { abi } = require('./TodoList.json');

const CONTRACT_ADDRESS = `"${process.env.DEPLOYED_CONTRACT_ADDRESS}"`;

const App = () => {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [taskContent, setTaskContent] = useState('');

  useEffect(() => {
    const initContract = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const todoListContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          abi,
          signer
        );
        setContract(todoListContract);

        const tasks = await todoListContract.getTasks();
        setTasks(tasks);
      } catch (error) {
        console.error(error);
      }
    };

    if (account) {
      initContract();
    }
  }, [account]);

  const connectMetamask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Please install Metamask!');
    }
  };

  const addTask = async () => {
    if (taskContent && contract) {
      try {
        console.log('Creating task:', taskContent);
        const tx = await contract.createTask(taskContent);
        console.log('Transaction created:', tx);
        await tx.wait();
        console.log('Transaction confirmed');
        const tasks = await contract.getTasks();
        setTasks(tasks);
        setTaskContent('');
      } catch (error) {
        console.error(error);
      }
    }
  };

  const completeTask = async (id) => {
    if (contract) {
      try {
        const tx = await contract.completeTask(id);
        await tx.wait();
        const tasks = await contract.getTasks();
        setTasks(tasks);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const deleteTask = async (id) => {
    if (contract) {
      try {
        const tx = await contract.deleteTask(id);
        await tx.wait();
        const tasks = await contract.getTasks();
        setTasks(tasks);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      {account ? (
        <div>
          <input
            type="text"
            value={taskContent}
            onChange={(e) => setTaskContent(e.target.value)}
            placeholder="Add a new task"
          />
          <button onClick={addTask}>Add Task</button>
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className={task.completed ? 'completed' : ''}>
                {task.content} - {task.completed ? 'Completed' : 'Incomplete'}
                <button onClick={() => completeTask(task.id)}>
                  Toggle Complete
                </button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <button onClick={connectMetamask}>Connect Metamask</button>
      )}
    </div>
  );
};

export default App;
