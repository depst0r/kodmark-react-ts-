import React from 'react';
import { IApiData } from '../interfaces';
import './style/style.css'

interface DataListprops {
    images: IApiData[]
}

export const TodoList: React.FC<DataListprops> = ({ images }) => {

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