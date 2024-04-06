import {FilterValuesType, TaskType} from "./App";
import {Task} from "./Task";
import {Button} from "./Button";
import React from "react";

type TasksListPropsType = {
    todolistID: string
    tasks: Array<TaskType>
    removeTask: (todolistID: string, taskId: string) => void
    changeFilter: (todolistID: string, value: FilterValuesType) => void
    changeTaskStatus: (todolistID: string, id: string, newIsDone: boolean) => void
    filter: FilterValuesType
    updateTask: (todolistID: string, taskID: string, title: string) => void
}

export function TasksList({
                              todolistID,
                              tasks,
                              removeTask,
                              changeFilter,
                              changeTaskStatus,
                              filter,
                              updateTask
                          }: TasksListPropsType) {
    const changeFilterHandlerCreator = (filter: FilterValuesType) => {
        return () => changeFilter(todolistID, filter)
    }

    const tasksList = <ul>
        {
            tasks.length === 0
                ? <p>No tasks</p>
                : tasks.map(t => {
                    const changeTaskTitleHandler = (title: string) => {
                        updateTask(todolistID, t.id, title)
                    }

                    return (
                        <li key={t.id}>
                            <Task
                                todolistID={todolistID}
                                taskId={t.id}
                                removeTask={removeTask}
                                title={t.title}
                                isDone={t.isDone}
                                changeTaskStatus={changeTaskStatus}
                                changeTaskTitle={changeTaskTitleHandler}
                            />
                        </li>
                    )
                })
        }
    </ul>
    return (
        <>
            {tasksList}
            <div>
                <Button className={filter === "All" ? "filter-btn-active" : undefined}
                        onClickHandler={changeFilterHandlerCreator("All")}
                        title={"All"}/>
                <Button className={filter === "Active" ? "filter-btn-active" : undefined}
                        onClickHandler={changeFilterHandlerCreator("Active")}
                        title={"Active"}/>
                <Button className={filter === "Completed" ? "filter-btn-active" : undefined}
                        onClickHandler={changeFilterHandlerCreator("Completed")}
                        title={"Completed"}/>
            </div>
        </>
    )
}