import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTask] = useState(["eat breakfast", "take a shower", "walk a dog"]);
    const [newTask, setNewTask] = useState("");

    function inputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updateTask = tasks.filter((_, i) => i !== index);
        setTask(updateTask);
    }

    function moveUP(index) {
        if (index > 0) {
            const updateTask = [...tasks];
            [updateTask[index], updateTask[index - 1]] =
                [updateTask[index - 1], updateTask[index]];

            setTask(updateTask);
        }
    }

    function moveDown(index) {
        if (index < tasks.length - 1) {
            const updateTask = [...tasks];
            [updateTask[index], updateTask[index + 1]] =
                [updateTask[index + 1], updateTask[index]];

            setTask(updateTask);
        }
    }

    return (
        <>
            <div className="to-do-list">
                <h1>To-Do-List</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Enter task ..."
                        value={newTask}
                        onChange={inputChange}
                    />
                    <button
                        className="add-button"
                        onClick={() => addTask()}
                    >Add</button>
                </div>
                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button
                                className="delete-button"
                                onClick={() => { deleteTask(index) }}
                            >Delete
                            </button>
                            <button
                                className="move-button"
                                onClick={() => { moveUP(index) }}
                            >Up
                            </button>
                            <button
                                className="move-button"
                                onClick={() => { moveDown(index) }}
                            >Down
                            </button>
                        </li>
                    )}
                </ol>
            </div>
        </>
    );
}
export default ToDoList