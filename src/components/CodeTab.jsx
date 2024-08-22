import React from 'react'
import { useSelector } from 'react-redux'

export default function CodeTab() {

    const tabsState = useSelector(state => state.tabs)
    console.log(tabsState);

  return (
    <textarea spellCheck="false" className='bg-zinc-900 text-slate-200 text-xl p-8 block h-full w-full focus:outline-none resize-none'>

    </textarea>
  )
}
