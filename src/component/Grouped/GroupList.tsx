import React from 'react';
import { ITodo } from '../../interfaces';


interface TodoListProps {
    grouped: {[key: string]: ITodo[]}
}

export const GroupList: React.FC<TodoListProps> = ({ grouped }) => {
    return (
        <div>
            {Object.keys(grouped).map(tag => {
                return (
                    <div key={tag}>
                        <h3>{tag}</h3>
                        {grouped[tag].map(image => {
                            return (
                                <div key={image.id}>
                                    <img src={image.image_original_url} alt={image.tag}/>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}
