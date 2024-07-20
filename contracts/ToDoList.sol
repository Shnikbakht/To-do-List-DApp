// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title TodoList
/// @author Shahla Nikbakht
/// @notice A simple to-do list contract that allows users to create, complete, and delete tasks.
/// @dev This contract demonstrates basic functionality for a to-do list application with Solidity.

contract TodoList {
    struct Task {
        uint id;
        string content;
        bool completed;
    }

    uint public taskCount = 0;
    mapping(uint => Task) public tasks;

    /// @dev Emitted when a task is created.
    /// @param id The ID of the created task.
    /// @param content The content of the created task.
    /// @param completed The completion status of the created task.
    event TaskCreated(uint id, string content, bool completed);

    /// @dev Emitted when a task is completed or marked as incomplete.
    /// @param id The ID of the task.
    /// @param completed The new completion status of the task.
    event TaskCompleted(uint id, bool completed);

    /// @dev Emitted when a task is deleted.
    /// @param id The ID of the deleted task.
    event TaskDeleted(uint id);

    /// @notice Creates a new task.
    /// @dev Requires that the content is not empty.
    /// @param _content The content of the task to be created.
    function createTask(string memory _content) public {
        require(bytes(_content).length > 0, "Task content cannot be empty");
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
        emit TaskCreated(taskCount, _content, false);
    }

    /// @notice Toggles the completion status of a task.
    /// @dev Requires that the task exists.
    /// @param _id The ID of the task to be completed or marked as incomplete.
    function completeTask(uint _id) public {
        Task storage _task = tasks[_id];
        require(_task.id != 0, "Task does not exist");
        _task.completed = !_task.completed;
        emit TaskCompleted(_id, _task.completed);
    }

    /// @notice Deletes a task.
    /// @dev Requires that the task exists.
    /// @param _id The ID of the task to be deleted.
    function deleteTask(uint _id) public {
        require(tasks[_id].id != 0, "Task does not exist");
        delete tasks[_id];
        emit TaskDeleted(_id);
    }

    /// @notice Retrieves the list of all tasks.
    /// @return allTasks An array of all tasks.
    function getTasks() public view returns (Task[] memory) {
        Task[] memory allTasks = new Task[](taskCount);
        for (uint i = 1; i <= taskCount; i++) {
            allTasks[i - 1] = tasks[i];
        }
        return allTasks;
    }
}
