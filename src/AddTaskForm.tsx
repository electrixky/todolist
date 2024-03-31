import {Button} from "./Button";
import {ChangeEvent, useState, KeyboardEvent} from "react";
import AddItemForm from "./AddItemForm";

type AddTaskFormPropsType = {
    todolistID: string
    addTask: (todolistID: string, title: string) => void
}

export function AddTaskForm({todolistID, addTask}: AddTaskFormPropsType) {

    const addTaskCallback = (title: string) => {
        addTask(todolistID, title)
    }

    return (
        <div>
            {/*<input*/}
            {/*    value={newTaskTitle}*/}
            {/*    onChange={setTaskTitleHandler}*/}
            {/*    onKeyDown={addTaskOnKeyDownHandler}*/}
            {/*    placeholder="Enter title max 15 chars"*/}
            {/*    className={taskTitleInputErrorClass}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    title={"+"}*/}
            {/*    onClickHandler={addNewTaskHandler}*/}
            {/*    isDisabled={isAddTaskBtnDisabled}*/}
            {/*/>*/}
            {/*{taskInputError && <div style={{color: "red"}}>Enter correct title</div>}*/}
            <AddItemForm addItem={addTaskCallback}/>
        </div>
    )
}