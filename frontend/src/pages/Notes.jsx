import React, { useEffect } from 'react'
import { useNote } from '../contexts/NoteContext'
import { Link } from 'react-router-dom'

function Notes() {
  const { notes, fetchAllNotes, deleteNote } = useNote()

  useEffect(() => {
    fetchAllNotes()
  }, [])

  const handleDelete = async(id) => {
    let confirm = window.confirm("Are you sure you want to delete?")
    if(confirm){
      deleteNote(id)
      window.alert(`id: ${id} deleted...`)
    }
  }
  return (
    <>
      <h1>Notes</h1>
      <Link to={`/addNote`}>Add new note</Link>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            notes.map((note, index) => (
              <tr key={note.id}>
                <td>{note.id}</td>
                <td>{note.title}</td>
                <td>{note.description}</td>
                <td>
                  <Link to={`/editNote/${note.id}`} state={note}>Edit</Link>
                  <button onClick={() => handleDelete(note.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>

  )
}

export default Notes