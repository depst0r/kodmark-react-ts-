import React from 'react'
import { ITodo } from '../../interfaces'

interface TodosProps {
    todos: ITodo[],
    grouped: ITodo[]
}

export const AllTodo:React.FC<TodosProps> = ({todos, grouped}) => {

    const getGroup = () => {
        return grouped
    }

    const getAll = () => {
        return todos
    }

    // const getPictures = () => {
    //     if (isGrouped) {
    //         return getGroup()
    //     } else {
    //         return getAll()
    //     }
    // }
    return <><h1></h1></>

}