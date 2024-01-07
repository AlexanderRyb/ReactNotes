import './sidebar.css'
import { useSelector, useDispatch } from 'react-redux';
import  {createNote, switchNote}  from '../../redux/actions';
import { FaPlus } from "react-icons/fa";

export default function Sidebar() {
const dispatch = useDispatch();
const notelist = useSelector((state: any) => state.notes)



const handleClick = () => { dispatch(createNote)};
let notes =[]
const activeNote = useSelector((state: any)=> state.activeNote)
console.log("active note is "+activeNote)


notes = notelist.map((item: any) => (
  <div   className={item.id === notelist[activeNote].id? 'active-note-item' : 'note-item'}

   key={item.id} id={item.id} onClick={()=> {
    console.log('Dispatching with id:', item.id);   
  dispatch(switchNote(item.id))
}
  } > 
    {item.title} 

    </div>
    ))

  return (
    <div className="sidebar">
      <button className='new-note-button' onClick={handleClick} >
        <FaPlus style={{ fontSize: '15px', display: 'block', margin: "auto"}}></FaPlus>
        <div className='new-note-tooltip'>create new note</div>
      
      </button>
      <div>{notes}</div>
    </div>
  )
}


