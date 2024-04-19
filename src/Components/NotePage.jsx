import Note from "./Note";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import InputNote from "./InputNote";


function NotePage(props) {
    const [inputNote, setInputNote] = React.useState();
    const [notes, setNotes] = React.useState([]);

    function deleteNote(arg_id) {
        setNotes(notes.filter((item) => {
                return item.id !== arg_id;
            })
        )
    }

    function handleChange(event) 
    {
        const {id, value} = event.target;
        setInputNote({...inputNote,[id]: value});
    }

    function addNote(event) {
        setNotes([...notes, {
            key: uuidv4(),
            id: uuidv4(),
            ...inputNote
        }]);
        console.log(notes);
        event.preventDefault();
        // writeFile("notes.js", {notes}, (err) => {
        //     if(err) throw err;
        //     console.log("File has been saved");
        // })

    }


    return <form className="notePage">
        <InputNote
            onChange={handleChange}
            onClick={addNote}
        />
        <div className="notes">
            {notes.map((note) => {
                return <Note
                    key={note.key}
                    id={note.id}
                    title={note.title}
                    about={note.about}
                    onDelete={deleteNote}
                />
            })}
        </div>
    </form>;
}

export default NotePage;