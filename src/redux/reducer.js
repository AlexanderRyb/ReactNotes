const initialState = {
    notes:[
        { id: "0", title: "Default note", content: 'GitHub repo: https://github.com/AlexanderRyb/ReactNotes'},
    ],
    activeNote: 0,
    editorValue:"",
    searchResult: [],
    textSearchValue: ""


}
export default function reducer(state = initialState, action){
    switch (action.type){
        case "CREATENOTE":
            let updatedNoteList = [...state.notes]
            console.log(updatedNoteList)
            let newnote = {}
            newnote.id = crypto.randomUUID()
            newnote.title = "New note"
            newnote.content = "test"
           updatedNoteList.push(newnote)

         
           let noteIndex = updatedNoteList.findIndex(note => note.id === newnote.id)



            return{
                //append new note to state
                ...state,
                notes: updatedNoteList,
                //switch to that note in the editor
                activeNote:noteIndex
                //
            }


         case "SWITCHNOTE":
            //put note content into the editor box
            console.log("action:"+action.payload.noteid)
            let updatedNoteIndex = state.notes.findIndex(note =>note.id ===action.payload.noteid)
            
            return{
                ...state, 
                activeNote: updatedNoteIndex

            }   
        case "UPDATENOTECONTENT":
            //const updatedNotes
            return{
                ...state, 
                notes: state.notes.map(
                    (note, i) => i === state.activeNote ? {...note, content: action.payload}
                                   : note
                )

            }   
        case "UPDATENOTETITLE":
        return{
            ...state, 
            notes: state.notes.map(
                (note, i) => i === state.activeNote ? {...note, title: action.payload}
                               : note
            )

        }  
        case "REMOVENOTE":         
                const noteToRemove = state.notes[state.activeNote].id; 
                const updatedNotes = state.notes.filter(note => note.id !== noteToRemove);
                console.log("note to remove is "+noteToRemove)
                console.log(updatedNotes)

    
                return{
                    ...state,
                    notes: updatedNotes,
                    activeNote: 0
                
                } 
        case "SEARCH":
            console.log("search is " +action.payload)
            let results
            if (action.payload){
                results =  state.notes.filter((item) =>
                item.title
                  .toLowerCase()
                  .includes(state.textSearchValue.toLowerCase())
                  
              )             
            } 
            else {
                results = state.notes
                console.log(results)
              }


          
            return{
                ...state,
                textSearchValue: action.payload,
                searchResult:results

               
            }               
            
          
        default: 
        return state
    }
  
}