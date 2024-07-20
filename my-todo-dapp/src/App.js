import React, { useEffect, useState } from 'react';
import './App.css'; // Importing the CSS file

const { ethers } = require('ethers');
const { abi } = require('./TodoList.json');

const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;

const App = () => {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [taskContent, setTaskContent] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initContract = async () => {
      try {
        setLoading(true);
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
        setMessage(`Error initializing contract: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (account) {
      initContract();
    }
  }, [account]);

  const connectMetamask = async () => {
    if (window.ethereum) {
      try {
        setLoading(true);
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccount(accounts[0]);
        setMessage('Metamask connected successfully!');
      } catch (error) {
        setMessage(`Error connecting Metamask: ${error.message}`);
      } finally {
        setLoading(false);
      }
    } else {
      setMessage('Please install Metamask!');
    }
  };

  const addTask = async () => {
    if (taskContent && contract) {
      try {
        setLoading(true);
        setMessage('Creating task... Please confirm the transaction');
        const tx = await contract.createTask(taskContent);
        setMessage('Transaction created, waiting for confirmation...');
        await tx.wait();
        setMessage('Transaction confirmed');
        const tasks = await contract.getTasks();
        setTasks(tasks);
        setTaskContent('');
      } catch (error) {
        setMessage(`Error adding task: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
  };

  const completeTask = async (id) => {
    if (contract) {
      try {
        setLoading(true);
        setMessage(`Completing task with ID: ${id}`);
        const tx = await contract.completeTask(id);
        setMessage('Transaction created, waiting for confirmation...');
        await tx.wait();
        setMessage('Task completed');
        const tasks = await contract.getTasks();
        setTasks(tasks);
      } catch (error) {
        setMessage(`Error completing task: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
  };

  const deleteTask = async (id) => {
    if (contract) {
      try {
        setLoading(true);
        setMessage(`Deleting task with ID: ${id}`);
        const tx = await contract.deleteTask(id);
        setMessage('Transaction created, waiting for confirmation...');
        await tx.wait();
        setMessage('Task deleted');

        // Filter out the deleted task
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
      } catch (error) {
        setMessage(`Error deleting task: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
  };

  // Function to show the fun alert
  const showFunAlert = () => {
    alert(
    'Hi Mahmood, This is Shahla, the one with the Physics background. I feel like I’m becoming a professional in React! Can I add REACT to my resume now? Just kidding! 🙂 I did get a lot of help from ChatGPT for the frontend, but I promise I’ve learned a lot. I even risked sending this assignment about 3 hours past the deadline to make it nicer and learn more. It’s so cool!I hope you can overlook the delay.I’m curious if you check all assignments one by one. Let’s see if you spot this message! 🙂'
    );
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      {loading && <p className="loading">Loading...</p>}
      {message && <p className="message">{message}</p>}
      {account ? (
        <div>
          <input
            type="text"
            value={taskContent}
            onChange={(e) => setTaskContent(e.target.value)}
            placeholder="Add a new task"
            className="task-input"
          />
          <button onClick={addTask} className="add-task-button">
            Add Task
          </button>
          <ul className="task-list">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`task-item ${task.completed ? 'completed' : ''}`}
              >
                <span
                  className={`task-icon ${task.completed ? 'completed-icon' : 'pending-icon'}`}
                >
                  {task.completed ? '✓' : '⏳'}
                </span>
                {task.content}
                <button
                  onClick={() => completeTask(task.id)}
                  className={`task-button ${task.completed ? 'completed-button' : ''}`}
                >
                  {task.completed ? 'The task is completed' : 'Complete'}
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="task-button delete"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <button onClick={showFunAlert} className="fun-button">
            This button is not related to the assignment, but please click on it!
          </button>
        </div>
      ) : (
        <button onClick={connectMetamask} className="connect-button">
          Connect Metamask
        </button>
      )}
    </div>
  );
};

export default App;
