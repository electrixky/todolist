import {TaskType} from "./App";
import {Task} from "./Task";
import {Button} from "./Button";
import React from "react";

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: number) => void
}

export function TasksList({tasks, removeTask}: TasksListPropsType) {
    const tasksList = <ul>
        {
            tasks.map(task=> {
                return <Task removeTask={removeTask} taskId={task.id} key={task.id} title={task.title} isDone={task.isDone}/>
            })
        }
    </ul>
    return (
        <>
            {tasksList}
            <div>
                <Button title={"All"}/>
                <Button title={"Active"}/>
                <Button title={"Completed"}/>
            </div>
        </>
    )
}