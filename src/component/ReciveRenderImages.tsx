import React, { useState } from 'react'
import './style.css'

export const ReceiveRenderImages:React.FC = () => {
    const [tag, setTag] = useState<string>('')
    const [images, setImages] = useState([])
    const [grouped, setGrouped] = useState<boolean>(false)

    const handleLoadImages = (event:React.MouseEvent) => {
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=${tag}`)
            .then(res => res.json()
                .then((res:any) => setImages((state:any)=> 
                    state.concat({
                        url: res.data.image_url,
                        tag: tag
                    }))
                )
            )
    }

    const handleGroup = (event:React.MouseEvent) => setGrouped(state => !state)
    const handleClear = (event:React.MouseEvent) => setImages([])
  
    const setOfTags = new Set(images.map((image:any) => image.tag))
    const gropedTags = Array.from(setOfTags)

    return <>
<div className="wrapper">
    <div className="main">
        <input type="text"
            name='tag'
            value={tag}
            onChange={e => setTag(e.target.value)}
        />
        <button onClick={handleLoadImages}>Загрузть</button>
        <button onClick={handleClear}>Очстить</button>
        {grouped ? (
            <button onClick={handleGroup}>Разруппировать</button>
            ) : (
            <button onClick={handleGroup}>Группировать</button>
            )}
            </div>
                    </div>
                    {grouped ? (
                <div>
                {gropedTags.map(tag => (
                    <div className='grouped'>
                    <h1 className='tag'>{tag}</h1>
                    {images
                        .filter((image:any) => image.tag === tag)
                        .map((image:any, index) => (
                        <img key={index} src={image.url} />
                        ))}
                    </div>
                ))}
                </div>
            ) : (
                <div className='images'>
                {images.map((image:any, index) => (
                    <img key={index} src={image.url} />
                ))}
                </div>
            )}
    </>
}