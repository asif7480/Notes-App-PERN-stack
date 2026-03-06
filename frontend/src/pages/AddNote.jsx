import React, { useState } from 'react'
import { useNote } from '../contexts/NoteContext'
import { Link, useNavigate } from 'react-router-dom'

function AddNote() {
  const [input, setInput] = useState({
    title: "",
    description: ""
  })
  const navigate = useNavigate()
  const { createNote } = useNote()

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createNote(input)
    navigate('/')

  }
  return (
    <>
      <h1>Add Note</h1>
      <Link to={`/`}>All Notes</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder='Enter title' name='title' onChange={handleChange} />
        </div>

        <div>
          <input type="text" placeholder='Enter description' name='description' onChange={handleChange} />
        </div>

        <div>
          <button>click to add note</button>
        </div>
      </form>
    </>
  )
}

export default AddNote