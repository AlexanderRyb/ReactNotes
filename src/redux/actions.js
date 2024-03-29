export const createNote = {
  type: 'CREATENOTE',
};
export const switchNote = (noteid) => {
  return {
    type: "SWITCHNOTE",
    payload: { noteid },
  };
};
export const updateNoteContent = (noteid) => {
  return {
    type: "UPDATENOTECONTENT",
    payload: noteid
  };
};
export const updateNoteTitle = (noteid) => {
  return {
    type: "UPDATENOTETITLE",
    payload: noteid
  };
};
export const removeNote = () => {
  return {
    type: "REMOVENOTE",
  };
};
export const search = (query) => {
  return {
    type: "SEARCH",
    payload: query,
  };
};
export const sortByName = () =>{
  return {
    type: 'SORTBYNAME'
  }
}
export const sortByDate = () =>{
  return {
    type: 'SORTBYDATE'
  }
}



