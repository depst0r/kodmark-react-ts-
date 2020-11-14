import React from 'react';
import { IApiData } from '../../interfaces';
import '../style/style.css'


interface DataListProps {
    grouped: { [key: string]: IApiData[] }
}

export const GroupList: React.FC<DataListProps> = ({ grouped }) => {
    return (
        <div className='group-list'>
            {Object.keys(grouped).map(tag => {
                return (
                    <div key={tag}>
                        <h3>{tag}</h3>
                        {grouped[tag].map(image => {
                            return (
                                <div key={image.id}>
                                    <img className="img" src={image.image_original_url} alt={image.tag} />
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}
