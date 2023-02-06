import React, { useState } from 'react';
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";
import CreateArea from './CreateArea';

function App() {

    const [notesState, setNotesState] = useState(notes)

    function addNote(note) {
        setNotesState((previous) => {
            return [...notesState, {
                ...note, key: notesState.length + 1
            }]
        })
    }

    function deleteNote(id) {
        setNotesState((previous) => {
            return previous.filter((note) => {
                return note.key !== id;
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea addItem={addNote} />
            {notesState.map((note) =>
                <Note
                    key={note.key}
                    id={note.key}
                    deleteItem={deleteNote}
                    title={note.title}
                    content={note.content}
                />
            )}
            <Footer />
        </div>
    )
}

export default App;