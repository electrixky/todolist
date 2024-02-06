import React, {useState} from 'react';
import './App.css';
import {TodoListHeader} from "./TodoListHeader";
import {AddTaskForm} from "./AddTaskForm";
import {TasksList} from "./TasksList";
import {TodoList} from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    // const tasks2: Array<TaskType> = [
    //     { id: 1, title: "Hello world", isDone: true },
    //     { id: 2, title: "I am Happy", isDone: false },
    //     { id: 3, title: "Yo", isDone: false }
    // ]


    const todoListTitle = "What to learn"
    // const tasks: Array<TaskType> = [
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: true},
    //     {id: 3, title: "ReactJS", isDone: false}
    // ]

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])
    function removeTask(id: number) {
        let updatedTasks = tasks.filter(task => task.id !== id)
        setTasks(updatedTasks)
    }

    return (
        <div className="App">
            <TodoList todoListTitle={todoListTitle} tasks={tasks} removeTask={removeTask}/>
        </div>
    );
}

export default App;
