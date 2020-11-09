import React from 'react'

import { ITodo } from '../../interfaces'

interface TodosProps {
    grouped: ITodo[]
}

export const GetGroupped: React.FC<TodosProps> = ({ grouped }) => {
    console.log("GetGrouped", grouped)
    return <>
        {/* {grouped.map(res => {
            return <>
                <h1>{new Set(res.tag)}</h1>
                <img src={res.image_original_url} alt={res.tag} />
            </>
        })} */}
    </>
}