import React from "react";
import {Button} from "./Button";

export type TaskPropsType = {
    taskId: number
    title: string
    isDone: boolean
    removeTask: (id: number) => void
}

export function Task({taskId, title, isDone, removeTask}: TaskPropsType) {
    return (
        <li key={taskId}>
            <input type="checkbox" checked={isDone}/> <span>{title}</span>
            <Button title={"✖️"} onClickHandler={() => removeTask(taskId)}></Button>
        </li>
    )
}