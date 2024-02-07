import React from 'react';
import {FilterValuesType} from "./App";

type ButtonPropsType = {
    title: string
    onClickHandler?: () => void
}

export const Button = ({title, onClickHandler}: ButtonPropsType) => {
    return <button onClick={onClickHandler}>{title}</button>
};