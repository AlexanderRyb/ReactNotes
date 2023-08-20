const initialState = {
    notes:[
        { id: 0, title: "new note", content: 'note content'},
    ],

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
                notes: updatedNoteList
                //switch to that note in the editor
                //
            }

        default: 
        return state
    }
  
}