import React from 'react'
import {ITodo} from '../../interfaces'

interface TodosProps {
    todos: ITodo[]
}

export const GetAll:React.FC<TodosProps> = ({todos}) => {
    console.log('all', todos)
    return <></>

}