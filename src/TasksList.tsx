import {FilterValuesType, TaskType} from "./App";
import {Task} from "./Task";
import {Button} from "./Button";
import React from "react";

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}

export function TasksList({tasks, removeTask, changeFilter}: TasksListPropsType) {
    const tasksList = <ul>
        {
            tasks.map(task => {
                return (
                    <li key={task.id}>
                        <Task
                        taskId={task.id}
                        removeTask={removeTask}
                        title={task.title}
                        isDone={task.isDone}/>
                    </li>
                )
            })
        }
    </ul>
    return (
        <>
            {tasksList}
            <div>
                <Button onClickHandler={() => changeFilter("All")} title={"All"}/>
                <Button onClickHandler={() => changeFilter("Active")} title={"Active"}/>
                <Button onClickHandler={() => changeFilter("Completed")} title={"Completed"}/>
            </div>
        </>
    )
}