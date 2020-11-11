export const getAll = (state: any) => {
    return state
}

export const getGroupped = (state: any) => {
    const grouppedPictureList = state.reduce((array: any, arg: any) => {
        array[arg.tag] = array[arg.tag] || [];
        array[arg.tag].push(arg)
        return array
    }, {})

    return grouppedPictureList
}

export const getPictures = (state: any) => (isGroupped: any) => {
    if (isGroupped)
        return getGroupped(state)
    else
        return getAll(state)
}

