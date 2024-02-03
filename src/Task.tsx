import React from "react";

export type TaskPropsType = {
    title: string
    isDone: boolean
}

export function Task({title, isDone}: TaskPropsType) {
    return (
        <li>
            <input type="checkbox" checked={isDone}/> <span>{title}</span>
        </li>
    )
}