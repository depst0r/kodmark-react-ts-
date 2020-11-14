import React, { useState } from 'react'
import { IApiData } from '../interfaces'


interface ImagesFormProp {
    onAdd(title: string, tag: string): void,
    images: IApiData[]
}

export const TodoForm: React.FC<ImagesFormProp> = ({ onAdd }) => {
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
                .then((res: any) => onAdd(res.data.image_original_url, tag))
        }
    }

    return (
    <div className='input'>
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
    </div>
    )
}