import {TodoListHeader} from "./TodoListHeader";
import {AddTaskForm} from "./AddTaskForm";
import {TasksList} from "./TasksList";
import React from "react";
import {TaskType} from "./App";

type TodoListPropsType = {
    todoListTitle: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
}
export function TodoList({todoListTitle,tasks, removeTask}: TodoListPropsType) {
    return (
        <div>
            <TodoListHeader title={todoListTitle}/>
            <AddTaskForm/>
            <TasksList removeTask={removeTask} tasks={tasks}/>
        </div>
    )
}