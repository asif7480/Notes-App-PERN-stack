import express from "express";
import {
  addNote,
  deleteNote,
  getAllNotes,
  getSingleNote,
  updateNote,
} from "../controller/notes.controller.mjs";
const notesRouter = express.Router();

notesRouter.route("/").get(getAllNotes).post(addNote);

notesRouter.route("/:id").get(getSingleNote).put(updateNote).delete(deleteNote);

export default notesRouter;
