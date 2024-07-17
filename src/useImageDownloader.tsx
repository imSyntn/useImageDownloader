import { } from 'react'

export const useImageDownloader = () => {
    return async ( imageUrl: string, fileName: string ) => {
        try {
            const req = await fetch(imageUrl)
            const res = await req.blob()
            const url = URL.createObjectURL(res)
            const a = document.createElement('a')
            a.href = url
            a.download = fileName;
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
            URL.revokeObjectURL(url)
        } catch (error) {
            console.log(error)
        }
    }
}
