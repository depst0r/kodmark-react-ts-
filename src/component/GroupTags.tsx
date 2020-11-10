import React, { useState } from 'react'
import { ITodo } from '../interfaces'
<<<<<<< HEAD
 
=======
import { GetGroupped } from '../component/Selectors/GetGroupped'

>>>>>>> e3cf6688643d6e2351f08450b0104fa5f6467ea0
interface TodosProps {
    todos: ITodo[]
}

export const GroupTags: React.FC<TodosProps> = ({ todos }) => {
    const [change, setChange] = useState<string>('Группировать')
    const [checked, setChecked] = useState<Boolean>(false)
    



    const groupTag = (event: React.MouseEvent) => {

        if (change === 'Группировать') {
<<<<<<< HEAD
=======
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
>>>>>>> e3cf6688643d6e2351f08450b0104fa5f6467ea0
            setChange('Разгруппировать')
            setChecked(true)
            console.log(checked)
 
        } else {
            setChange('Группировать')
<<<<<<< HEAD
            setChecked(false)
            console.log(checked)
=======
            console.log(todos);
>>>>>>> e3cf6688643d6e2351f08450b0104fa5f6467ea0
            return todos
        }
    }

    return <>
<<<<<<< HEAD
=======
        <GetGroupped grouped={grouped} />
>>>>>>> e3cf6688643d6e2351f08450b0104fa5f6467ea0
        <input
            type="button"
            onClick={groupTag}
            value={change}
        />
    </>
}