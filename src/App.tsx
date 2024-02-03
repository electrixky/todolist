import React from 'react';
import './App.css';
import {TodoListHeader} from "./TodoListHeader";
import {AddTaskForm} from "./AddTaskForm";
import {TasksList} from "./TasksList";

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
    const tasks: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ]

    return (
        <div className="App">
            <div>
                <TodoListHeader title={todoListTitle}/>
                <AddTaskForm/>
                <TasksList tasks={tasks}/>
            </div>
        </div>
    );
}

export default App;
