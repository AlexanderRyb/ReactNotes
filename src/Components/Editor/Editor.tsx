import React from 'react'
import { useState } from "react";
import './editor.css'


export const Editor = () => {
  const [color] = useState("red");
  return (
    <div className='editor-block'>
      <div className='page-title'><input type="text" className='title-edit-input' defaultValue={"page title"}></input></div>
      <div className='page-content-editor'>
        <textarea className='page-content-input' defaultValue={'page content here'}></textarea>
        </div>
    </div>
  )
}
