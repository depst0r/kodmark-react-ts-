import React, { useState } from 'react'
import { ApiBase } from './ApiBase'

interface AllData {
    addImages(url:string, tag:string): void,
}


export const NewForm:React.FC<AllData> = ({ addImages }, { setImages, images }) => {
    const [grouped, setGrouped] = useState<Boolean>(false)
    const [tag, setTag] = useState<string>('')

    const handleLoadImage = (event: React.MouseEvent) => {
        ApiBase(`https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=${tag}`)
            .then(res => addImages(res.url, res.tag))
          }
    
    const handleGroup = () => setGrouped((state) => !state)
    const handleClear = () => setImages([])

        return<>
          <div className="wrapper">
            <div className="main">
            <input 
          type="text"
          name='tag'
          value={tag}
          onChange={e => setTag(e.target.value)}
          />
          <button onClick={handleLoadImage}>Загрузить</button>
          <button onClick={handleClear}>Очистить</button>
          {grouped ? (
              <button onClick={handleGroup}>Разруппировать</button>
          ) : (
              <button onClick={handleGroup}>Группировать</button>
          ) }
            </div>
          </div>
    
        </>
}

