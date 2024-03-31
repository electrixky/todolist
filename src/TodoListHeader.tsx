import React from "react";
import {Button} from "./Button";

type TodoListHeaderPropsType = {
    todolistID: string,
    title: string,
    removeTodolist: (todolistId: string) => void
}

export function TodoListHeader({todolistID, title, removeTodolist}: TodoListHeaderPropsType) {
    const removeTodolistHandler = () => {
        removeTodolist(todolistID)
    }

    return (
            <h3>{title}
                <Button title={"✖️"} onClickHandler={removeTodolistHandler}></Button>
            </h3>
    )
}