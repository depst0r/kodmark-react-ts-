import { utimes } from 'fs'
import React from 'react'

interface Grouped {
    grouped:boolean
    setGrouped: any
}

export const GroupedImages:React.FC<Grouped> = ({grouped, setGrouped}) => {

    const handleGroup = () => setGrouped((state:any) => state)

    return<>
        {grouped ? (
            <button onClick={handleGroup}>Разруппировать</button>
        ) : (
            <button onClick={handleGroup}>Группировать</button>
        )}
    </>
}