<<<<<<< HEAD
export const Api = async (url:string):Promise<[{}]> => {
=======
export const Api = async (url: string): Promise<any> => {
>>>>>>> e3cf6688643d6e2351f08450b0104fa5f6467ea0
    const response = await fetch(url)
    const result = await response.json()
    return result
} 