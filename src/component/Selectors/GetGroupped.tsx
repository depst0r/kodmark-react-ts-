import React from 'react'

import {ITodo} from '../../interfaces'

interface TodosProps {
    grouped: ITodo[]
}

export const GetGroupped:React.FC<TodosProps> = ({grouped}) => {
    console.log("GetGrouped", grouped)
    return<>
    
    </>
}