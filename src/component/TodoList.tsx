import React from 'react';
import { ITodo } from '../interfaces';
import './style/style.css'

interface TodoListprops {
    images: ITodo[]
}

export const TodoList: React.FC<TodoListprops> = ({ images }) => {

    return (
        <div>
            {images.map(image => {
                return (
                    <section className="todo" key={image.id}>
                        <div className="todoItemList">
                            <img className='img' src={image.image_original_url} alt={image.tag} />
                        </div>
                    </section>
                )
            })}
        </div>
    )
}