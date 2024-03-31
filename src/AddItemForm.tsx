import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button} from "./Button";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}
const AddItemForm = ({addItem}: AddItemFormPropsType) => {
    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [itemInputError, setItemInputError] = useState<boolean>(false)

    const isAddTaskBtnDisabled = title.length === 0 || title.length > 15
    const taskTitleInputErrorClass = itemInputError ? "taskTitleInputError" : ""

    const addItemHandler = () => {
        if (title.trim() !== "") {
            addItem(title.trim())
            setTitle("")
        } else {
            setError("Title is required")
        }
    }

    const addItemOnKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (!error)
            e.key === "Enter" && addItemHandler()
    }

    const setItemTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        e.currentTarget.value.length > 15 ? setItemInputError(true) : setItemInputError(false)
        setError("")
    }


    return (
        <div>
            <input
                value={title}
                onChange={setItemTitleHandler}
                onKeyDown={addItemOnKeyDownHandler}
                placeholder="Enter title max 15 chars"
                className={taskTitleInputErrorClass}
            />
            <Button
                title={"+"}
                onClickHandler={addItemHandler}
                isDisabled={isAddTaskBtnDisabled}
            />
            {itemInputError && <div style={{color: "red"}}>{error}</div>}
        </div>
    );
};

export default AddItemForm;