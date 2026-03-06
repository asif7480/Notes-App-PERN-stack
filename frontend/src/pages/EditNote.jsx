import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useNote } from '../contexts/NoteContext'

function EditNote() {
  const { state: { id, title, description, createdAt, updatedAt } } = useLocation()

  const [input, setInput] = useState({
    id,
    title,
    description,
    createdAt,
    updatedAt
  })

  const navigate = useNavigate()
  const { updateNote } = useNote()

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateNote(id, input)
    navigate('/')

  }
  return (
    <>
      <h1>EditNote</h1>
      <Link to={`/`}>All Notes</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder='Enter title' value={input.title} name='title' onChange={handleChange} />
        </div>

        <div>
          <input type="text" placeholder='Enter description' value={input.description} name='description' onChange={handleChange} />
        </div>

        <div>
          <button>click to add note</button>
        </div>
      </form>
    </>
  )
}

export default EditNote