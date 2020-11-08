import React, { useState } from 'react'
import { ITodo } from '../interfaces'

interface TodosProps {
    todos: ITodo[]
}

export const GroupTags: React.FC<TodosProps> = ({ todos }) => {
    const [change, setChange] = useState<string>('Группировать')




    const groupTag = (event: React.MouseEvent) => {
<<<<<<< HEAD
        console.table(todos);
=======
        console.log(todos)

        const array = todos.reduce((r:any, a:any) => {
            r[a.tag] = r[a.tag] || [];
            r[a.tag].push(a)
            return r
        }, {})

        console.log(array)


    
      

>>>>>>> 282e38ce1607951c6b245ee2a45dfce45b30cc07
        if (change === 'Группировать') {
            setChange('Разгруппировать')
        } else {
            setChange('Группировать')
        }
    }

    return <>
        <input
            type="button"
            onClick={groupTag}
            value={change}
        />
    </>
}