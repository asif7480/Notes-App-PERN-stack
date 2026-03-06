import { createContext, useContext, useState, useEffect } from "react";
import { createNoteService, deleteNoteService, getAllNotesService, getSingleNoteService, updateNoteService } from "../services/notesService";

const NoteContext = createContext(null)

export const NoteContextProvider = ({ children }) => {
    const [notes, setNotes] = useState([])

    const fetchAllNotes = async () => {
        const data = await getAllNotesService()
        setNotes(data.notes)
    }

    const createNote = async (note) => {
        let response = await createNoteService(note)
        return response
    }

    const fetchSingleNote = async (id) => {
        let response = await getSingleNoteService(id)
        return response
    }

    const updateNote = async (id, note) => {
        let response = await updateNoteService(id, note)
        return response
    }

    const deleteNote = async (id) => {
        let response = await deleteNoteService(id)
        setNotes(notes.filter( note => note.id !== id ))
        return response
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, fetchAllNotes, createNote, fetchSingleNote, updateNote, deleteNote }}>
            {children}
        </NoteContext.Provider>
    )
}

export const useNote = () => {
    return useContext(NoteContext)
}