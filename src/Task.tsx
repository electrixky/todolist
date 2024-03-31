import React from "react";
import {Button} from "./Button";

export type TaskPropsType = {
    todolistID: string
    taskId: string
    title: string
    isDone: boolean
    removeTask: (todolistID: string, taskId: string) => void
    changeTaskStatus: (todolistID: string, id: string, newIsDone: boolean) => void
}

export function Task({todolistID, taskId, title, isDone, removeTask, changeTaskStatus}: TaskPropsType) {
    const removeTaskHandler = () => removeTask(todolistID, taskId)

    return (
        <li key={taskId}>
            <input
                type="checkbox"
                checked={isDone}
                onChange={(e) => changeTaskStatus(todolistID, taskId, e.currentTarget.checked)}
            /> <span className={isDone ? "task-done task" : "task"}>{title}</span>
            <Button title={"✖️"} onClickHandler={removeTaskHandler}></Button>
        </li>
    )
}