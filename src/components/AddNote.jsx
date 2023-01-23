import React from "react";
import Note from "./Note";

function AddNote() {

    const [currentTitle, setTitle] = React.useState("");

    const [currentContent, setContent] = React.useState("");

    const [items, setItems] = React.useState([]);

    function updateTitle(event) {
        const change = event.target.value;
        setTitle(change);
    }

    function updateContent(event) {
        const change = event.target.value;
        setContent(change);
    }

    function addNote(e) {
        setItems((prevNotes) => {
            return [{title: currentTitle, content: currentContent}, ...prevNotes];
        });
        e.preventDefault(); // Prevents the page from automatically refreshing
        setTitle("");
        setContent("");
    }

    function removeNote(id) {
        setItems((prevNotes) => {
            return  prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
    <div>
        <form>
        <input onChange={updateTitle} name="title" placeholder="Title" value={currentTitle} />
        <textarea onChange={updateContent} name="content" placeholder="Take a note..." rows="3" value={currentContent} />
        <button onClick={addNote}>Add</button>
        </form>
        <div>
            {items.map((note, index) => {
                return <Note key={index} id={index} title={note.title} content={note.content} onCheck={removeNote} />;
            })}
        </div>
            
    </div>
    );
}

export default AddNote;
