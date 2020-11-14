import React, { useState } from 'react'
import { TodoForm } from '../component/TodoForm'
import { TodoList } from '../component/TodoList'
import { IApiData } from '../interfaces'
import { GroupePictures } from './Grouped/GroupePictures'


const RenderAllPictures: React.FC = ({grouped}:any) => {
  const [images, setImages] = useState<IApiData[]>([])

  const addHandler = (url: string, tag: string) => {
    const newTodo: IApiData = {
      image_original_url: url,
      id: Date.now(),
      tag: tag
    }
    
    setImages(prev => [newTodo, ...prev])
  }


  return (
    <>
      <div className="wrapper">
        <GroupePictures images={images} grouped={grouped}/>
        <TodoForm onAdd={addHandler} images={images} />
        <TodoList images={images} />
      </div>
    </>
  )
}
export default RenderAllPictures;