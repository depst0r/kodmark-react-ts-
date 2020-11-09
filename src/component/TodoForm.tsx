import React, { useState } from 'react'
import { ITodo } from '../interfaces'


interface TodoFormProp {
    onAdd(title: string, tag: string): void,
    todos: ITodo[]
}

export const TodoForm: React.FC<TodoFormProp> = ({ onAdd }) => {
    const [tag, setTag] = useState<string>('')



    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTag(event.target.value)
    }


    const clickHandler = (event: React.MouseEvent) => {
        if (tag === '') {
            console.error('ERROR!!')
        } else {
            fetch(`https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=${tag}`)
                .then(res => res.json())
                .then(res => onAdd(res.data.image_original_url, tag))
        }
    }

    return (

        <div className="input-field">
            <input
                onChange={changeHandler}
                value={tag}
                type="text"
                id="title" />
            <button
                onClick={clickHandler}
            >
                Загрузить
            </button>
        </div>
    )
}