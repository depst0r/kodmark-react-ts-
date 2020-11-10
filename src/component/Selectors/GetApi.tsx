import React from 'react'
import { GetGroupped } from '../Selectors/GetGroupped'
import { GetAll } from './GetAll'
import { ITodo } from '../../interfaces'
 
interface TodosProps {
    todos: ITodo[]
}


export const GetApi:React.FC<TodosProps>  = ({todos}) => {
    console.log('GetApi-change')
        return <>
        <GetGroupped todos={todos}/>
      <GetAll todos={todos}/>
      </>
}