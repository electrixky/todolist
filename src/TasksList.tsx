import {FilterValuesType, TaskType} from "./App";
import {Task} from "./Task";
import {Button} from "./Button";
import React from "react";

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
}

export function TasksList({tasks, removeTask, changeFilter}: TasksListPropsType) {
    const changeFilterHandlerCreator = (filter: FilterValuesType) => {
        return () => changeFilter(filter)
    }

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
                <Button onClickHandler={changeFilterHandlerCreator("All")} title={"All"}/>
                <Button onClickHandler={changeFilterHandlerCreator("Active")} title={"Active"}/>
                <Button onClickHandler={changeFilterHandlerCreator("Completed")} title={"Completed"}/>
            </div>
        </>
    )
}