import { ITodo } from '../../interfaces'

interface TodoListprops {
    todos: ITodo[]
}

export const getAll = ({ todos }: TodoListprops) => {
    return todos
}

export const getGrouped = (state: any) => {
    const grouppedPictureList = state.reduce((array: any, arg: any) => {
        array[arg.tag] = array[arg.tag] || [];
        array[arg.tag].push(arg)
        return array
    }, {})
    return grouppedPictureList
}

export const getPictures = (todos: any) => (isGroupped: boolean) => {
    if (isGroupped) {
        return getGrouped(todos)
    } else {
        return getAll(todos)
    }
}
