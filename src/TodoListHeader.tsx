import React from "react";
import {Button} from "./Button";
import {EditableSpan} from "./EditableSpan";

type TodoListHeaderPropsType = {
    todolistID: string,
    title: string,
    removeTodolist: (todolistId: string) => void
    updateTodolist: (todolistID: string, title: string) => void
}

export function TodoListHeader({todolistID, title, removeTodolist, updateTodolist}: TodoListHeaderPropsType) {
    const removeTodolistHandler = () => {
        removeTodolist(todolistID)
    }

    const updateTodolistHandler = (title: string) => {
        updateTodolist(todolistID, title)
    }

    return (
        <h3><EditableSpan value={title} onChange={updateTodolistHandler}/>
            <Button title={"✖️"} onClickHandler={removeTodolistHandler}></Button>
        </h3>
    )
}