import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((previous) => {
            return {
                ...previous,
                [name]: value
            }
        })
    }

    return (
        <div>
            <form onSubmit={(event) => {
                props.addItem(note);
                setNote({ title: "", content: "" })
                event.preventDefault();
            }}>
                <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
                <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default CreateArea;