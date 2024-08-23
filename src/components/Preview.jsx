import React from 'react'
import { useSelector } from 'react-redux'

export default function Preview() {

    const tabs = useSelector(state => state.tabs)

    const getCode =(lang)=>{
        return tabs.find(obj => obj.lang === lang).code
    }

    const scrDoc = `
    <!DOCTYPE html>
    <html>
        <head>
            <style>${getCode("css")}</style>
        </head>
        <body>
            ${getCode("html")}
            <script>${getCode("javascript")}</script>
        </body>
    </html>
    `

  return (
    <div className='absolute top-0 left-0 w-full h-full bg-zinc-900'>
        <iframe 
        className='absolute top-0 left-0 w-full h-full bg-zinc-900'
        srcDoc={scrDoc} 
        sandbox='allow-scripts'></iframe>
    </div>
  )
}
