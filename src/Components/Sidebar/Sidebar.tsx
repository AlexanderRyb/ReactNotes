import React from 'react'
import './sidebar.css'
import { useSelector, useDispatch } from 'react-redux';
import  createNote  from '../../redux/actions';

export default function Sidebar() {
//  const noteCount = useSelector((state) => state.value);
const dispatch = useDispatch();

const handleClick = () => { dispatch(createNote)};

  return (
    <div className="main-body">
      <button className='new-note-button' onClick={handleClick} >New note</button>
      <div className='note-item'>note title</div>
    </div>
  )
}


