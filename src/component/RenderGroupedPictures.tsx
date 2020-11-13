import React from 'react'
import { GroupePictures } from './Grouped/GroupePictures'

export const RenderGroupedPictures:React.FC = ({grouped, images}:any) => {
    return (
        <GroupePictures images={images} grouped={grouped}/>
    )
}