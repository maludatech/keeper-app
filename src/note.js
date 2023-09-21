import "./App.css";
import { useState } from "react";

const items = [
  {
    key: 1,
    title: "Delegation",
    content: 
    "Q. How many Programmers does it take to change a light bulb?"
  },
  {
    key: 2,
    title: "Loops",
    content: 
    "Q. How to keep a Programmer in the shower forever?"
  },
  {
    key: 3,
    title: "Arrays",
    content: 
    "Q. Why did the programmer quit his job?"
  }
]

function Note(){
const [note, setNewNote] = useState([]);
const[inputValue, setInputValue] = useState('');

const handleClick = () =>{
  const newNote = {
    key: note.length + 1,
    content: inputValue
  }
  setNewNote([...note, newNote]);
  setInputValue("");
};

const handleInput = (event) =>{
    const value = event.target.value;
    setInputValue(value);
};

const handleDelete = (key) => {
  const updatedNotes = note.filter((prevValues) => {
    return prevValues.key !== key;
  });
  setNewNote(updatedNotes);
};

return(
      <div className="primary">
      <div className='main-container'>
        <div className="item-container" id="item1">
        <h1 className="title">This is the note title</h1>
        <p className="content">This is the note content</p>
        </div>

          {items.map((item, key)=>{
                return(
                <div className="item-container">
                  <h1 className="title">{item.title}</h1>
                  <p className="content">{item.content}</p>
                </div>
                );
          })}
            </div>

        <div className='input-container'>
        <textarea className="textArea" placeholder="Take a note..." onChange={handleInput} value={inputValue}>
       </textarea>
       <br/>
       <button onClick={handleClick}>Add</button>
        </div>

        <div className="newnotes-container">
        {note.map((notes, index) => {  
        return (
        <div className="note-container" key={notes.key}>
        <p className="content">{notes.content}</p>
        <button className="delete-btn" onClick={() => handleDelete(notes.key)}><i className="fa-solid fa-trash" style={{color: "#fcc100"}}></i></button>
      </div>
      );
      })}
    </div>
    </div>
    
    );
};

export default Note;