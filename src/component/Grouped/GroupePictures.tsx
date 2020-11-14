import React, { useState } from 'react'
import { IApiData } from '../../interfaces'
import { GroupList } from './GroupList'

interface DataProps {
    images: IApiData[]
    grouped: {[key: string]: IApiData[]}
}

export const GroupePictures: React.FC<DataProps> = ({ images }) => {
    const [grouped, setGrouped] = useState({})

    const click = () => {
        const grouppedPictureList = images.reduce((array: any, arg: any) => {
            array[arg.tag] = array[arg.tag] || [];
            array[arg.tag].push(arg)
            return array
        }, {})
        setGrouped(grouppedPictureList)
    }

    return <>
        <div>
            <button onClick={click}>Группировать</button>
            <GroupList grouped={grouped}/>
        </div>
    </>
}