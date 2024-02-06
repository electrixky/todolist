import React from "react";

export type TaskPropsType = {
    title: string
    isDone: boolean
    taskId: number
    removeTask: (id: number) => void
}

export function Task({taskId, title, isDone, removeTask}: TaskPropsType) {
    return (
        <li key={taskId}>
            <input type="checkbox" checked={isDone}/> <span>{title}</span>
            <button onClick={() => removeTask(taskId)}>✖️</button>
        </li>
    )
}