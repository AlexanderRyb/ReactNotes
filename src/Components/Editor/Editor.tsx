import { useState } from "react";
import  {updateNote}  from '../../redux/actions';


import './editor.css'
import { useSelector,useDispatch } from 'react-redux';



export const Editor = () => {
  const dispatch = useDispatch();

  const activeNote = useSelector((state: any)=> state.activeNote)
const notes = useSelector((state: any)=> state.notes)

const handleTextFieldChange = (e: any) => {
  const newValue = e.target.value;
  dispatch(updateNote(newValue));
};

  return (
    <div className='editor-block'>
      <div className='page-title'><input type="text" className='title-edit-input' defaultValue={"page title"}></input></div>
      <div className='page-content-editor'>
        <textarea className='page-content-input' value={notes[activeNote].content}  
          onChange={handleTextFieldChange}



            ></textarea>
        </div>
    </div>
  )
}
