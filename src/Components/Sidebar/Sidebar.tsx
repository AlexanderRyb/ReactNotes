import "./sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import { createNote, switchNote } from "../../redux/actions";
import { ReactComponent as NewNote } from "./new_note.svg";
import { ReactComponent as SortOrder } from "./sort_order.svg";
import { search } from "../../redux/actions";

export default function Sidebar() {
  const dispatch = useDispatch();

  let searchString: string = useSelector((state: any)=> state.textSearchValue)
  let searchResult: Array<any> = useSelector((state: any) => state.searchResult)
  let allNotes = useSelector((state: any) => state.notes)

  const handleClick = () => {
    dispatch(createNote);
  };
  const handleChange = (e: any) => {
    dispatch(search(e.target.value));
  };
  const activeNote = useSelector((state: any) => state.activeNote);
  let displayedNotes = []

  let notes: any = []


  console.log("active note is " + activeNote);

  if (searchString == ""){
    console.log("search string is empty. Showing full search.")
    notes = allNotes

    
  }
  else{   
    console.log("search list is not empty. Showing search result")
     notes = searchResult 
  
  }
  displayedNotes = notes.map((item: any) => (
    <div
      className={
        item.id === allNotes[activeNote].id ? "active-note-item" : "note-item"
      }
      key={item.id}
      id={item.id}
      onClick={() => {
        console.log("Dispatching with id:", item.id);
        dispatch(switchNote(item.id));
      }}
    >
      {item.title}
    </div>
  ));


  return (
    <div className="sidebar">
      <div className="search-panel">
        <input type="text"   onChange={handleChange}
 ></input>
      </div>
      <div className="sidebar-button-panel">
        <button className="new-note-button" onClick={handleClick}>
          <NewNote
            style={{
              width: "100%",
              height: "100%",
              fill: "grey",
            }}
          ></NewNote>

          <div className="new-note-tooltip">create new note</div>
        </button>
        <button className="change-sort-order-button">
          <SortOrder
            style={{
              width: "100%",
              height: "100%",
              fill: "grey",
            }}
          ></SortOrder>
        </button>
      </div>

      <div>{displayedNotes}</div>
    </div>
  );
}
