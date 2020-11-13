import React, { useState } from 'react'
import { ITodo } from '../../interfaces'
import { GroupList } from './GroupList'

interface TodosProps {
    images: ITodo[]
    grouped: {[key: string]: ITodo[]}
}

export const GroupePictures: React.FC<TodosProps> = ({ images }) => {
    const [grouped, setGrouped] = useState({})

    const click = () => {
        const grouppedPictureList = images.reduce((array: any, arg: any) => {
            array[arg.tag] = array[arg.tag] || [];
            array[arg.tag].push(arg)
            return array
        }, {})
        setGrouped(grouppedPictureList)
    }

    return <>
        <div>
            <button onClick={click}>Группировать</button>
            <GroupList grouped={grouped}/>
        </div>
    </>
}