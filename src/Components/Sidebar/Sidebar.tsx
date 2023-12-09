import './sidebar.css'
import { useSelector, useDispatch } from 'react-redux';
import  {createNote, switchNote}  from '../../redux/actions';
export default function Sidebar() {
const dispatch = useDispatch();
const notelist = useSelector((state: any) => state.notes)


const handleClick = () => { dispatch(createNote)};
let notes =[]
const activeNote = useSelector((state: any)=> state.activeNote)

notes = notelist.map((item: any) => (
  <div   className={item.id === activeNote ? 'active-note-item' : 'note-item'}

   key={item.id} id={item.id} onClick={()=> {
    console.log('Dispatching with id:', item.id);
    

  
  
  dispatch(switchNote(item.id))
}
  } > 
    {item.title} 
    </div>
    ))

  return (
    <div className="main-body">
      <button className='new-note-button' onClick={handleClick} >New note</button>
      <div>{notes}</div>
    </div>
  )
}


