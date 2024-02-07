import {TodoListHeader} from "./TodoListHeader";
import {AddTaskForm} from "./AddTaskForm";
import {TasksList} from "./TasksList";
import React from "react";
import {FilterValuesType, TaskType} from "./App";

type TodoListPropsType = {
    todoListTitle: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}
export function TodoList({todoListTitle,tasks, removeTask, changeFilter}: TodoListPropsType) {
    return (
        <div>
            <TodoListHeader title={todoListTitle}/>
            <AddTaskForm/>
            <TasksList removeTask={removeTask} tasks={tasks} changeFilter={changeFilter}/>
        </div>
    )
}