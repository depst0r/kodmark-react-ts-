import React from 'react';
import { ITodo } from '../../interfaces';
interface TodoListprops {
    grouped: ITodo[]
}

export const GroupList: React.FC<TodoListprops> = ({ grouped }) => {
    return (
        <div>
            {grouped.map(group => {
                return (
                    <section className="todo" key={group.id}>
                        <div className="todoItemList">
                            <img src={group.image_original_url} alt={group.tag} />
                        </div>
                    </section>
                )
            })}
        </div>
    )
}