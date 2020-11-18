import React from 'react'

interface DataProps {
    setGrouped: any
    setImages: any
}

export const ImagesRenderForm:React.FC<DataProps> = ({setGrouped, setImages}) => {

    const handleGroup = (event:React.MouseEvent) => setGrouped((state:any) => !state)
    const handlerClear = (event:React.MouseEvent) => setImages([])

    return<>
<div className="wrapper">
    <div className="controls">
        <button onClick={handleGroup}>Загрузить</button>
        <button onClick={handlerClear}>Очистить</button>
    </div>
</div>
    </>
}