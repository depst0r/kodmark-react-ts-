import React from 'react'
import { GroupePictures } from './Grouped/GroupePictures'

export const RenderGroupedPictures:React.FC = ({grouped, todos}:any) => {
    return (
        <GroupePictures todos={todos} grouped={grouped}/>
    )
}