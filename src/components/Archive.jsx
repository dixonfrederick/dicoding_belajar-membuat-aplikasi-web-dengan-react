import React from "react";
import NoteCard from './NoteCard';

function Archive({ onDelete, notes, onArchive }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-8">
            {
                notes.map(note => (
                    <NoteCard changeButton="Pindah" key={note.id} onDelete={onDelete} buttonData={onArchive} {...note} />
                ))
            }
        </div>
    )
}

export default Archive;