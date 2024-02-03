import React from "react";
import {Button} from "./Button";
import {Task} from "./Task";


type PropsType = {
    title: string
}

export function Todolist(props: PropsType) {
    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <Button text={"+"}/>
                </div>
                <ul>
                    <Task title={"HTML&CSS"} isDone={true}/>
                    <Task title={"JS"} isDone={true}/>
                    <Task title={"ReactJS"} isDone={false}/>
                </ul>
                <div>
                    <Button text={"All"}/>
                    <Button text={"Active"}/>
                    <Button text={"Completed"}/>
                </div>
            </div>
        </div>
    );
};