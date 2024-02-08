import {Button} from "./Button";
import {ChangeEvent, useState, KeyboardEvent} from "react";
import {log} from "util";

type AddTaskFormPropsType = {
    addTask: (title: string) => void
}

export function AddTaskForm({addTask}: AddTaskFormPropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState("")

    const addNewTaskHandler = () => {
        addTask(newTaskTitle)
        setNewTaskTitle("")
    }

    const setTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setNewTaskTitle(e.currentTarget.value)
    const addTaskOnKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && addNewTaskHandler()

    return (
        <div>
            <input
                value={newTaskTitle}
                onChange={setTaskTitleHandler}
                onKeyDown={addTaskOnKeyDownHandler}
            />
            <Button
                title={"+"}
                onClickHandler={addNewTaskHandler}
                isDisabled={!newTaskTitle}
            />
        </div>
    )
}