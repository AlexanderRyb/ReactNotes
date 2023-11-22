export const createNote = {
  type: 'CREATENOTE',
};
export const switchNote = (noteid) => {
  return {
    type: "SWITCHNOTE",
    payload: { noteid },
  };
};
export const updateNote = (noteid) => {
  return {
    type: "UPDATENOTE",
    payload: noteid
  };
};
