export const createNote = {
  type: 'CREATENOTE',
};
export const switchNote = (noteid) => {
  return {
    type: "SWITCHNOTE",
    payload: noteid,
  };
};
