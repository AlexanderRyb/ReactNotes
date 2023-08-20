import React from 'react'
import './sidebar.css'
import { useSelector, useDispatch } from 'react-redux';
import  createNote  from '../../redux/actions';
export default function Sidebar() {
//  const noteCount = useSelector((state) => state.value);
const dispatch = useDispatch();
const notelist = useSelector((state: any) => state.notes)


const handleClick = () => { dispatch(createNote)};
let notes =[]
notes = notelist.map((item: any) => (
  <div key={item.id}>
    <p>note number {item.id}</p>
    <p >{item.title}</p>
    <p >{item.content} </p>
    </div>
    ))

  return (
    <div className="main-body">
      <button className='new-note-button' onClick={handleClick} >New note</button>
      <div className='note-item'>note title</div>
      <div>{notes}</div>
    </div>
  )
}


