import React, { useState } from 'react'
import { ITodo } from '../interfaces'
import { GetGroupped } from '../component/Selectors/GetGroupped'

interface TodosProps {
    todos: ITodo[]
}

export const GroupTags: React.FC<TodosProps> = ({ todos }) => {
    const [change, setChange] = useState<string>('Группировать')
    const [grouped, setGrouped] = useState<any>()



    const groupTag = (event: React.MouseEvent) => {

        if (change === 'Группировать') {
            const arrayGroup = todos.reduce((array: any, arg: any) => {
                array[arg.tag] = array[arg.tag] || [];
                array[arg.tag].push(arg)
                return array
            }, {})
            if (grouped === undefined) {
                console.log('error')
            } else {
                // console.log(Object.values(grouped))
                console.log(grouped)
            }
            setGrouped(arrayGroup)
            setChange('Разгруппировать')
        } else {
            setChange('Группировать')
            console.log(todos);
            return todos
        }
    }

    return <>
        <GetGroupped grouped={grouped} />
        <input
            type="button"
            onClick={groupTag}
            value={change}
        />
    </>
}