import React, {useState} from 'react';
import './App.css';
import {TodoListHeader} from "./TodoListHeader";
import {AddTaskForm} from "./AddTaskForm";
import {TasksList} from "./TasksList";
import {TodoList} from "./TodoList";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = "All" | "Active" | "Completed"

function App() {

    //BLL

    const todoListTitle = "What to learn"

    const [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ])

    const [filter, setFilter] = useState<FilterValuesType>("All")

    const removeTask = (taskId: string) => {
        let updatedTasks = tasks.filter(task => task.id !== taskId)
        setTasks(updatedTasks)
    }

    const addTask = (title: string) => {
        setTasks([{id: v1(), title, isDone: false}, ...tasks])
    }

    //UI

    const tasksForTodoList: Array<TaskType> = filter === "Active"
    ? tasks.filter(task => !task.isDone)
        : filter === "Completed"
            ? tasks.filter(task => task.isDone)
            : tasks

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }

    return (
        <div className="App">
            <TodoList todoListTitle={todoListTitle} tasks={tasksForTodoList} addTask={addTask} removeTask={removeTask}
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
