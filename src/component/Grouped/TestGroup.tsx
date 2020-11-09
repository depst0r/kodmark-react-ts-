import React from 'react';
import { ITodo } from '../../interfaces'

interface TodosProps {
    grouped: ITodo[]
}

export const TestGroup: React.FC<TodosProps> = ({ grouped }) => {
    return <>
        <div>
            {grouped.map(res => {
                <span>{res.tag}</span>
            })}
        </div>
    </>
}