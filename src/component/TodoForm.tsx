import React, { useState } from 'react'
import { Api } from '../component/Api'
import { ITodo } from '../interfaces'
import { Api } from '../component/Api'


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
            Api(`https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=${tag}`)
<<<<<<< HEAD
                .then((res:any) => onAdd(res.data.image_original_url, tag))
=======
                .then(res => onAdd(res.data.image_original_url, tag))
>>>>>>> e3cf6688643d6e2351f08450b0104fa5f6467ea0
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