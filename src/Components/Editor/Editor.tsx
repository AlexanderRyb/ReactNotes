import {
  updateNoteContent,
  updateNoteTitle,
  removeNote,
} from "../../redux/actions";
import BoldSVG from "./bold.svg";
import Italics from "./italics.svg";
import Underline from "./underline.svg";
import OrderedList from "./ordered_list.svg";
import BulletList from "./bulletList.svg";
import  Strikethrough from "./strikethrough.svg";

import "./editor.css";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import React from "react";
import ContentEditable from "react-contenteditable";

Modal.setAppElement("#root");

export const Editor = () => {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const activeNote = useSelector((state: any) => state.activeNote);
  const notes = useSelector((state: any) => state.notes);

  const handleTextFieldChange = (e: any) => {
    const newValue = e.target.value;
    dispatch(updateNoteContent(newValue));
  };
  const handleTitleChange = (e: any) => {
    const newValue = e.target.value;
    dispatch(updateNoteTitle(newValue));
  };

  const characterCount = notes[activeNote].content.length;

  function countWords(inputString: string) {
    let wordCounter = 0;
    let inWord = false;
    const wordSeparators = [" ", ",", ".", ":", "\t", "\n"];

    for (let char of inputString) {
      if (wordSeparators.includes(char)) {
        if (inWord) {
          wordCounter++;
          inWord = false;
        }
      } else if (char.match(/[a-zA-Z]/)) {
        // If the current character is a letter, mark that we're inside a word
        inWord = true;
      }
    }
    if (inWord) {
      wordCounter++;
    }
    return wordCounter;
  }
  const wordCount = countWords(notes[activeNote].content);
  const creationDate = notes[activeNote].creationTime

  return (
    <div className="editor-block">
      <div className="page-title">
        <input
          type="text"
          className="title-edit-input"
          value={notes[activeNote].title}
          onChange={handleTitleChange}
        ></input>
      </div>
      <div className="formatting-block">
        <EditButton cmd="bold">
          <img src={BoldSVG} alt="bold" />
        </EditButton>
        <EditButton cmd="italic">
          <img src={Italics} alt="italics" />
        </EditButton>
        <EditButton cmd="underline">
          <img src={Underline} alt="underline" />
        </EditButton>
        <EditButton cmd="formatBlock" arg="h1" name="heading">
          H1
        </EditButton>
        <EditButton cmd="formatBlock" arg="p" name="paragraph">
          P
        </EditButton>
        <EditButton cmd="strikeThrough">
          <img src={Strikethrough} alt="strikethrough" />
        </EditButton>
        <EditButton cmd="insertOrderedList">
          <img src={OrderedList} alt="list" />
        </EditButton>
        <EditButton cmd="insertUnorderedList">
          <img src={BulletList} alt="bullet list" />
        </EditButton>
        <EditButton cmd="blockquote">

        </EditButton>
      </div>
      <div className="page-content-editor">
        <ContentEditable
          contentEditable="true"
          className="page-content-input"
          html={notes[activeNote].content}
          placeholder="Type the content of your note here..."
          onChange={handleTextFieldChange}
        ></ContentEditable>
      </div>
      <footer>
        <div className="stats-block">
        <div className="creation-date">Creation date: {creationDate} </div>
        <div className="word-count">Word count: {wordCount} </div>
        <div className="character-count">Character count: {characterCount}</div>
        </div>
        
        <div
          className="remove-note-button"
          onClick={() => {
            notes.length > 1 ? dispatch(removeNote()) : openModal();
          }}
        >
          Remove note
        </div>
      </footer>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Modal"
        className={"modal"}
      >
        <div>Can't remove this element</div>
        <button className={"modal-button"} onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};
function EditButton(props: any) {
  return (
    <button
      className="format-button"
      key={props.cmd}
      onMouseDown={(evt) => {
        evt.preventDefault(); // Avoids loosing focus from the editable area
        document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
      }}
    >
      {props.children}
    </button>
  );
}
