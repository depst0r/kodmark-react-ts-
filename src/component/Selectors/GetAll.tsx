import React from 'react'
import { ITodo } from '../../interfaces'

interface TodosProps {
    todos: ITodo[]
}

export const GetAll: React.FC<TodosProps> = ({ todos }) => {
    console.log('all', todos)
<<<<<<< HEAD
    return <><h1></h1></>
=======
    return <>

    </>
>>>>>>> e3cf6688643d6e2351f08450b0104fa5f6467ea0

}