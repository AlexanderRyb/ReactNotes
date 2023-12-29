import  {updateNoteContent, updateNoteTitle}  from '../../redux/actions';

import { FaTrash } from "react-icons/fa";

import './editor.css'
import { useSelector,useDispatch } from 'react-redux';



export const Editor = () => {
  const dispatch = useDispatch();

  const activeNote = useSelector((state: any)=> state.activeNote)
const notes = useSelector((state: any)=> state.notes)

const handleTextFieldChange = (e: any) => {
  const newValue = e.target.value;
  dispatch(updateNoteContent(newValue));
};
const handleTitleChange = (e: any) => {
  const newValue = e.target.value;
  dispatch(updateNoteTitle(newValue));
};

  return (
    <div className='editor-block'>
      <div className='page-title'>
        <input type="text" className='title-edit-input' value={notes[activeNote].title}   onChange={handleTitleChange}>

        </input>

 </div>
      <div className='page-content-editor'>
        <textarea className='page-content-input' placeholder="Type the content of your note here..." value={notes[activeNote].content}  
          onChange={handleTextFieldChange}



            ></textarea>

        </div>
        <footer>
                  <FaTrash style={{ fontSize: '20px', verticalAlign: "baseline", position: "absolute", margin: "0", border: "1px solid red"}}></FaTrash>

        </footer>

    </div>
  )
}
