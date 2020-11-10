import React from 'react'
<<<<<<< HEAD
import { GetGroupped } from '../Selectors/GetGroupped'
import { GetAll } from './GetAll'
import { ITodo } from '../../interfaces'
 
interface TodosProps {
    todos: ITodo[]
}


export const GetApi:React.FC<TodosProps>  = ({todos}) => {
    console.log('GetApi-change')
        return <>
        {/* <GetGroupped todos={todos}/> */}
        <GetAll todos={todos}/>
      </>
=======
import { TodoList } from '../TodoList'
import { GetGroupped } from './GetGroupped'

export const GetApi = ({ todos, grouped }: any) => {
    if (grouped) {
        return <GetGroupped grouped={grouped} />
    } else {
        return <TodoList todos={todos} />
    }
>>>>>>> e3cf6688643d6e2351f08450b0104fa5f6467ea0
}