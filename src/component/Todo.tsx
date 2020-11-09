import React, { useState } from 'react'
import { ITodo } from '../interfaces'

interface TodosProps {
    grouped: ITodo[]
}

export const Todo: React.FC<TodosProps> = ({ grouped }) => {
    const [isGroupped, setIsGroupped] = useState<any>(false)




    return <>
        <input type="checkbox" checked={isGroupped} />
        {isGroupped && grouped.map(res => {
            console.log(res.tag)
            return (
                <div>
                    <h1>{res.tag}</h1>
                    <img src={res.image_original_url} alt={res.tag} />
                </div>
            )
        })}
    </>

}