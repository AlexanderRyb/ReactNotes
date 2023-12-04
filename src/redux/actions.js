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

