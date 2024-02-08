import React from 'react';
import {FilterValuesType} from "./App";

type ButtonPropsType = {
    title: string
    onClickHandler: () => void
    isDisabled?: boolean
}

export const Button = ({title, onClickHandler, isDisabled}: ButtonPropsType) => {
    return <button onClick={onClickHandler} disabled={isDisabled}>{title}</button>
};