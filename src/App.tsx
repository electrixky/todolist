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

export type FilterValuesType = "All" | "Active" | "Completed"

function App() {

    //BLL

    const todoListTitle = "What to learn"

    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])

    const [filter, setFilter] = useState<FilterValuesType>("All")

    function removeTask(taskId: number) {
        let updatedTasks = tasks.filter(task => task.id !== taskId)
        setTasks(updatedTasks)
    }

    //UI

    let tasksForTodoList = tasks

    if (filter === "Active") {
        tasksForTodoList = tasks.filter(task => !task.isDone)
    }

    if (filter === "Completed") {
        tasksForTodoList = tasks.filter(task => task.isDone)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }

    return (
        <div className="App">
            <TodoList todoListTitle={todoListTitle} tasks={tasksForTodoList} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
