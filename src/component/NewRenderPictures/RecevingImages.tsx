import React, { useState } from 'react'
import { ApiBase } from './ApiBase'
import { ImagesRenderForm } from './ImagesRenderForm'


export const RecevingImages:React.FC = () => {

    const [images, setImages] = useState([])
    const [tag, setTag] = useState<string>('')
    const [grouped, setGrouped] = useState<Boolean>(false)

    const handleLoadImage = (event: React.MouseEvent) => {
    ApiBase(`https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=${tag}`)
    .then(res =>
        setImages((state:any) =>
          state.concat({
            url: res.data.image_url,
            tag: tag
          })
        ))
      }

    const setOfTags = new Set(images.map((image:any) => image.tag));
    const groupedTags = Array.from(setOfTags);

    return<>
      <input 
      type="text"
      name='tag'
      value={tag}
      onChange={e => setTag(e.target.value)}
      />
      <ImagesRenderForm setGrouped={setGrouped} setImages={setImages}/>
    </>
}