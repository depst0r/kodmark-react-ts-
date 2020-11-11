import React from 'react';
import { ITodo } from '../../interfaces';
interface TodoListprops {
    grouped: any
}

export const GroupList: React.FC<TodoListprops> = ({ grouped }) => {
    return (

        <div>
            {Object.keys(grouped).map(group => {
                return (
                    // <section className="todo" key={group.id}>
                    <div className="todoItemList">
                        <span>{group}</span>
                    </div>
                    // </section>
                )
            })}
        </div>
    )
}