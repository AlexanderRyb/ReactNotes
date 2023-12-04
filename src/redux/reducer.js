const initialState = {
    notes:[
        { id: 0, title: "new note", content: 'note content default'},
    ],
    activeNote: 0,
    editorValue:""

}
export default function reducer(state = initialState, action){
    switch (action.type){
        case "CREATENOTE":
            let updatedNoteList = [...state.notes]
            console.log(updatedNoteList)
            let newnote = {}
            newnote.id = state.notes.length
            newnote.title = "new note"
            newnote.content = "note content"
           updatedNoteList.push(newnote)

            return{
                //append new note to state
                ...state,
                notes: updatedNoteList,
                //switch to that note in the editor
                activeNote: newnote.id
                //
            }


         case "SWITCHNOTE":
            //put note content into the editor box
            console.log("action:"+action.payload.noteid)
            console. log("state: "+state.notes)
            return{
                ...state, 
                activeNote: action.payload.noteid 

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
        default: 
        return state
    }
  
}