import React, { useState} from 'react'

import { ITodo } from '../../interfaces'

interface TodosProps {
    todos: ITodo[]
}

<<<<<<< HEAD
export const GetGroupped:React.FC<TodosProps> = ({todos}) => {
    const [grouped, setGrouped] = useState<any>()
    const arrayGroup = todos.reduce((array: any, arg: any) => {
        array[arg.tag] = array[arg.tag] || [];
        array[arg.tag].push(arg)
        return  array
    }, {})
    setGrouped(arrayGroup)

    console.log("GetGrouped", grouped)
    return<>
    <div>
        {grouped.map((res:any) => {
            <h1>{res.tag}</h1>
        })}
    </div>
=======
export const GetGroupped: React.FC<TodosProps> = ({ grouped }) => {
    console.log("GetGrouped", grouped)
    return <>
        {/* {grouped.map(res => {
            return <>
                <h1>{new Set(res.tag)}</h1>
                <img src={res.image_original_url} alt={res.tag} />
            </>
        })} */}
>>>>>>> e3cf6688643d6e2351f08450b0104fa5f6467ea0
    </>
}