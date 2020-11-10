import React, { useState} from 'react'

import {ITodo} from '../../interfaces'

interface TodosProps {
    todos: ITodo[]
}

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
    </>
}