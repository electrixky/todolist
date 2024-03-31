import React from 'react';
import {FilterValuesType} from "./App";

type ButtonPropsType = {
    title: string
    onClickHandler: () => void
    isDisabled?: boolean
    className?: string
}

export const Button = ({title, onClickHandler, isDisabled, className}: ButtonPropsType) => {
    return <button className={className} onClick={onClickHandler} disabled={isDisabled}>{title}</button>
};