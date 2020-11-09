import React from 'react'
import { TodoList } from '../TodoList'
import { GetGroupped } from './GetGroupped'

export const GetApi = ({ todos, grouped }: any) => {
    if (grouped) {
        return <GetGroupped grouped={grouped} />
    } else {
        return <TodoList todos={todos} />
    }
}