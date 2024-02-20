import {Button} from "./Button";
import {ChangeEvent, useState, KeyboardEvent} from "react";

type AddTaskFormPropsType = {
    addTask: (title: string) => void
}

export function AddTaskForm({addTask}: AddTaskFormPropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState("")

    const [taskInputError, setTaskInputError] = useState(false)


    const isAddTaskBtnDisabled = newTaskTitle.length === 0 || newTaskTitle.length > 15

    const addNewTaskHandler = () => {
        const trimmedTitle = newTaskTitle.trim()
        if (trimmedTitle) {
            addTask(newTaskTitle)
            setNewTaskTitle("")
        } else {
            setTaskInputError(true)
        }
    }

    const setTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
        e.currentTarget.value.length > 15 ? setTaskInputError(true) : setTaskInputError(false)
    }
    const addTaskOnKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && addNewTaskHandler()

    return (
        <div>
            <input
                value={newTaskTitle}
                onChange={setTaskTitleHandler}
                onKeyDown={addTaskOnKeyDownHandler}
                placeholder="Enter title max 15 chars"
            />
            <Button
                title={"+"}
                onClickHandler={addNewTaskHandler}
                isDisabled={isAddTaskBtnDisabled}
            />
            {taskInputError && <div style={{color: "red"}}>Enter correct title</div>}
        </div>
    )
}