import React from "react";
import {Button} from "./Button";

export type TaskPropsType = {
    taskId: string
    title: string
    isDone: boolean
    removeTask: (id: string) => void
}

export function Task({taskId, title, isDone, removeTask}: TaskPropsType) {
    const removeTaskHandler = () => removeTask(taskId)

    return (
        <li key={taskId}>
            <input type="checkbox" checked={isDone}/> <span>{title}</span>
            <Button title={"✖️"} onClickHandler={removeTaskHandler}></Button>
        </li>
    )
}