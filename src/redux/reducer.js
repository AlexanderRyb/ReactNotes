const initialState = {
  notes: [
    {
      id: "0",
      title: "Default note",
      content: "GitHub repo: https://github.com/AlexanderRyb/ReactNotes",
      creationTime: "0",
    },
  ],
  activeNote: 0,
  editorValue: "",
  displayedNotes: [],  
  textSearchValue: "",
};
 function reducer(state = initialState, action) {
  switch (action.type) {
    case "CREATENOTE":
      let updatedNoteList = [...state.notes];
      console.log(updatedNoteList);
      let newnote = {};
      newnote.id = crypto.randomUUID();
      newnote.title = "New note";
      newnote.content = "test";

      function formatDate(date = new Date()) {
        const year = date.toLocaleString('default', {year: 'numeric'});
        const month = date.toLocaleString('default', {
          month: '2-digit',
        });
        const day = date.toLocaleString('default', {day: 'numeric'});
        const hour = date.toLocaleString('default',{hour: 'numeric', hour12: false})
        const minute = date.toLocaleString('default',{minute: '2-digit'})
        const second = date.toLocaleString('default',{second: '2-digit'})
        const noteDate = year+"/"+month+"/"+day+" "+hour+":"+minute+":"+second
    
      
        return noteDate;
      }
      let dateValue = formatDate(new Date())


      newnote.creationTime = dateValue;
      updatedNoteList.push(newnote);

      let noteIndex = updatedNoteList.findIndex(
        (note) => note.id === newnote.id
      );

      return {
        //append new note to state
        ...state,
        notes: updatedNoteList,
        //switch to that note in the editor
        activeNote: noteIndex,
        //
      };

    case "SWITCHNOTE":
      //put note content into the editor box
      console.log("action:" + action.payload.noteid);
      let updatedNoteIndex = state.notes.findIndex(
        (note) => note.id === action.payload.noteid
      );

      return {
        ...state,
        activeNote: updatedNoteIndex,
      };
    case "UPDATENOTECONTENT":
      return {
        ...state,
        notes: state.notes.map((note, i) =>
          i === state.activeNote ? { ...note, content: action.payload } : note
        ),
      };
    case "UPDATENOTETITLE":
      return {
        ...state,
        notes: state.notes.map((note, i) =>
          i === state.activeNote ? { ...note, title: action.payload } : note
        ),
      };
    case "REMOVENOTE":
      const noteToRemove = state.notes[state.activeNote].id;
      const updatedNotes = state.notes.filter(
        (note) => note.id !== noteToRemove
      );
      console.log("note to remove is " + noteToRemove);
      console.log(updatedNotes);

      return {
        ...state,
        notes: updatedNotes,
        displayedNotes: updatedNotes,
        activeNote: 0,
      };
    case "SEARCH":
      console.log("search is " + action.payload);
      let results;
      if (action.payload) {
        results = state.notes.filter((item) =>
          item.title.toLowerCase().includes(state.textSearchValue.toLowerCase())
        );
      } else {
        results = [];
        console.log(results);
      }

      return {
        ...state,
        textSearchValue: action.payload,
        displayedNotes: results,
      };

    case "SORTBYDATE":
    let sortedByName = [...state.notes]
      sortedByName =  state.notes.map(item=>item).sort((a, b) => {
        const titleA = a.creationTime
        const titleB = b.creationTime
        if (titleA < titleB) {
          return -1;
        }
        if ( titleA > titleB) {
          return 1;
        }      
        // names must be equal
        return 0;
      });
      console.log("sorted by date")

        return {
            ...state,
            displayedNotes: sortedByName,
            notes: sortedByName
        }
        case "SORTBYNAME":
    let sortedByDate  = [...state.notes]
    sortedByDate = state.notes.map(item=>item).sort((a, b) => {
      const dateA = a.title
      const dateB = b.title
      if (dateA < dateB) {
        return -1;
      }
      if ( dateA > dateB) {
        return 1;
      }      
      // names must be equal
      return 0;
    });
    console.log("sorted by name")


      return {
          ...state,
          displayedNotes: sortedByDate,
          notes: sortedByDate
      }




    default:
      return state;
  }
}
export default reducer