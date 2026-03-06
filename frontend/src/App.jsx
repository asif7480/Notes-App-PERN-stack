import { BrowserRouter, Routes, Route } from "react-router-dom"
import Notes from "./pages/Notes"
import AddNote from "./pages/AddNote"
import EditNote from "./pages/EditNote"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/addNote" element={<AddNote />} />
          <Route path="/editNote/:id" element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
