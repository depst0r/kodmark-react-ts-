import React, { useState} from 'react'
import { ITodo } from '../interfaces'
import { GetGroupped } from '../component/Selectors/GetGroupped'
 
interface TodosProps {
    todos: ITodo[]
}

export const GroupTags: React.FC<TodosProps> = ({ todos }) => {
    const [change, setChange] = useState<string>('Группировать')
<<<<<<< HEAD
    const [grouped, setGrouped] = useState<any>({})
=======
    const [grouped, setGrouped] = useState<any>()
>>>>>>> d87863060f66af19dfd9c055b40240fe017eb90b


<<<<<<< HEAD
        if (change === 'Группировать') {
            console.log(grouped)
=======

    const groupTag = (event: React.MouseEvent) => {

        if (change === 'Группировать') {
            const arrayGroup = todos.reduce((array: any, arg: any) => {
                array[arg.tag] = array[arg.tag] || [];
                array[arg.tag].push(arg)
                return  array
            }, {})
            if (grouped === undefined) {
                console.log('error')
            } else {
                // console.log(Object.values(grouped))
                console.log(grouped.va)
            }
            setGrouped(arrayGroup)
>>>>>>> d87863060f66af19dfd9c055b40240fe017eb90b
            setChange('Разгруппировать')
        } else {
            setChange('Группировать')
            console.log(todos)
            return todos
        }
    }

    return <>
    <GetGroupped grouped={grouped}/>
        <input
            type="button"
            onClick={groupTag}
            value={change}
        />
    </>
}