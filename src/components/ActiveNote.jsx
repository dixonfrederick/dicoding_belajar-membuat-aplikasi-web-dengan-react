import React from "react";
import NoteCard from './NoteCard';

function ActiveNode({ onDelete, onActive, notes }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-8">
            {
                notes.map(note => (
                    <NoteCard changeButton="Arsip" key={note.id} onDelete={onDelete} buttonData={onActive} {...note} />
                ))
            }
        </div>
    )
}

export default ActiveNode;