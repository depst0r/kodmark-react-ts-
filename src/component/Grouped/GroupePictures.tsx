import React, { useState } from 'react'
import { ITodo } from '../../interfaces'

interface TodosProps {
    todos: ITodo[]
}

export const GroupePictures: React.FC<TodosProps> = ({ todos }) => {
    const [grouped, setGrouped] = useState({})




    const click = () => {
        const grouppedPictureList = todos.reduce((array: any, arg: any) => {
            array[arg.tag] = array[arg.tag] || [];
            array[arg.tag].push(arg)
            return array
        }, {})
        setGrouped(grouppedPictureList)
        const testKeys = Object.keys(grouped)
        const testValues = Object.values(grouped)


        console.log(testKeys.map(res => res))
        console.log(testValues)

    }

    return <>
        <div>
            <button onClick={click}>Grouped</button>
        </div>
    </>
}