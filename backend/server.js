import express from "express"
import dotenv from "dotenv/config"
import notesRouter from "./route/notes.route.mjs"

const port = process.env.PORT || 4000
const app = express()

app.use(express.json())

app.use("/api/notes", notesRouter)

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`)
})