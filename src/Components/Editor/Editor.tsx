import  {updateNoteContent, updateNoteTitle, removeNote}  from '../../redux/actions';

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

const characterCount= notes[activeNote].content.length

function countWords(inputString: string){
  let wordCounter = 0;
  let inWord = false;
  const wordSeparators = [' ', ',', '.', ':', '\t', '\n'];

  for (let char of inputString){
    if (wordSeparators.includes(char)){
      if (inWord) {
        wordCounter++;
        inWord = false;
      }
    }
      else if (char.match(/[a-zA-Z]/)) {
        // If the current character is a letter, mark that we're inside a word
        inWord = true;
      }
    
  }
  if (inWord) {
    wordCounter++;
  }
  return wordCounter

}
const wordCount = countWords(notes[activeNote].content)


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
          <div className='creation-date'>Creation date: </div>
          <div className='word-count'>Word count: {wordCount} </div>
          <div className='character-count'>Character count: {characterCount}</div>
          <div className='remove-note-button' 
          onClick={()=> {
          dispatch(removeNote())
        }
          } 
          >Remove note</div>

        </footer>

    </div>
  )
}
