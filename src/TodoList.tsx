import {TodoListHeader} from "./TodoListHeader";
import {AddTaskForm} from "./AddTaskForm";
import {TasksList} from "./TasksList";
import React, {useState} from "react";
import {FilterValuesType, TaskType} from "./App";

type TodoListPropsType = {
    todoListTitle: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}
export function TodoList({todoListTitle,tasks, removeTask, changeFilter, addTask}: TodoListPropsType) {


    return (
        <div>
            <TodoListHeader title={todoListTitle}/>
            <AddTaskForm addTask={addTask}/>
            <TasksList removeTask={removeTask} tasks={tasks} changeFilter={changeFilter}/>
        </div>
    )
}