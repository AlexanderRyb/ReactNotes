import './sidebar.css'
import { useSelector, useDispatch } from 'react-redux';
import  {createNote, switchNote}  from '../../redux/actions';
export default function Sidebar() {
const dispatch = useDispatch();
const notelist = useSelector((state: any) => state.notes)


const handleClick = () => { dispatch(createNote)};
let notes =[]
notes = notelist.map((item: any) => (
  <div className='note-item' key={item.id} id={item.id} onClick={()=> {
    console.log('Dispatching with id:', item.id);

  
  
  dispatch(switchNote(item.id))
}
  } > 
    <p>{item.title} {item.id}</p>
    </div>
    ))

  return (
    <div className="main-body">
      <button className='new-note-button' onClick={handleClick} >New note</button>
      <div>{notes}</div>
    </div>
  )
}


