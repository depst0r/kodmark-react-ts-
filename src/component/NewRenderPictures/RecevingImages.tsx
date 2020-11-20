import React, { useState } from 'react'
import { IData } from './Interface'
import { NewForm } from './NewForm'

interface Images {
  grouped: boolean
}

export const RecevingImages:React.FC<Images> = ({grouped}) => {

    const [images, setImages] = useState<IData[]>([])



    const handlerData = (url:string, tag:string) => {
      const NewImage: IData = {
        url: url,
        id: Date.now(),
        tag: tag
      }

      setImages(prev => [NewImage, ...prev])
    }

    const setOfTags = new Set(images.map((image:any) => image.tag))
    const gropedTags = Array.from(setOfTags)

   return (
     <div className="wrapper">
       <div className="main">
         <NewForm addImages={handlerData}/>
         {grouped ? (
            <div>
                {gropedTags.map((tag:any) => (
                    <div>
                        <h1>{tag}</h1>
                        {images
                        .filter((image:any) => image.tag === tag)
                        .map((image:any, index:any) => (
                            <img src={image.url} alt={image.tag} key={index}/>
                ))
                        }
                    </div>
                ))}
            </div>
        ) : (
            <div>
                {images.map((image:any, index:number) => (
                    <img src={image.url} alt={image.tag} key={index}/>
                ))}
            </div>
        )}
       </div>
     </div>
   )
}