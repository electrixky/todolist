import {TodoListHeader} from "./TodoListHeader";
import {AddTaskForm} from "./AddTaskForm";
import {TasksList} from "./TasksList";
import React, {useState} from "react";
import {FilterValuesType, TaskType} from "./App";

type TodoListPropsType = {
    todolistID: string
    todoListTitle: string
    tasks: Array<TaskType>
    removeTask: (todolistID: string, taskId: string) => void
    changeFilter: (todolistID: string, value: FilterValuesType) => void
    addTask: (todolistID: string, title: string) => void
    changeTaskStatus: (todolistID: string, id: string, newIsDone: boolean) => void
    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void
}

export function TodoList({todolistID, todoListTitle, tasks, removeTask, changeFilter, addTask, changeTaskStatus, filter, removeTodolist}: TodoListPropsType) {

    return (
        <div>
            <TodoListHeader todolistID={todolistID} title={todoListTitle} removeTodolist={removeTodolist}/>
            <AddTaskForm todolistID={todolistID} addTask={addTask}/>
            <TasksList todolistID={todolistID} removeTask={removeTask} tasks={tasks} changeFilter={changeFilter} changeTaskStatus={changeTaskStatus} filter={filter}/>
        </div>
    )
}