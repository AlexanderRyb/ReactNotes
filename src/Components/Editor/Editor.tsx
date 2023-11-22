import { useState } from "react";
import './editor.css'
import { useSelector } from 'react-redux';



export const Editor = () => {
  const activeNote = useSelector((state: any)=> state.activeNote)
const notes = useSelector((state: any)=> state.notes)



  return (
    <div className='editor-block'>
      <div className='page-title'><input type="text" className='title-edit-input' defaultValue={"page title"}></input></div>
      <div className='page-content-editor'>
        <textarea className='page-content-input' defaultValue={notes[activeNote].content} ></textarea>
        </div>
    </div>
  )
}
