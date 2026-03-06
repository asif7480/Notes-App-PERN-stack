import { eq } from "drizzle-orm";
import { db } from "../db/db.mjs";
import { notes } from "../schema/schema.mjs";

const getAllNotes = async (request, response) => {
  try {
    const allNotes = await db.select().from(notes);
    return response.status(200).json({ notes: allNotes });
  } catch (err) {
    return response.status(500).json({
      message: err.message,
    });
  }
};

const getSingleNote = async (request, response) => {
  try {
    const { id } = request.params;
    const [note] = await db.select().from(notes).where(eq(notes.id, id));

    return response.status(200).json({
      note,
    });
  } catch (err) {
    return response.status(500).json({
      message: err.message,
    });
  }
};

const addNote = async (request, response) => {
  try {
    const { title, description } = request.body;
    const missing = ["title", "description"].filter(
      (input) => !request.body[input],
    );

    if (missing.length > 0) {
      return response.status(400).json({
        message: `Missing ${missing.join(", ")}`,
      });
    }

    const [newNote] = await db
      .insert(notes)
      .values({ title, description })
      .returning();

    return response
      .status(201)
      .json({ message: `New note added.`, note: newNote });
  } catch (err) {
    return response.status(500).json({
      message: err.message,
    });
  }
};

const updateNote = async (request, response) => {
  try {
    const { id } = request.params;
    const { title, description } = request.body;
    const [note] = await db.select().from(notes).where(eq(notes.id, id));

    if (!note) {
      return response.status(404).json({
        message: `Note not found.`,
      });
    }

    const [updatedNote] = await db
      .update(notes)
      .set({ title, description })
      .where(eq(notes.id, id))
      .returning();
    return response.status(200).json({
      message: `Note updated of id: ${id}`,
      note: updatedNote,
    });
  } catch (err) {
    return response.status(500).json({
      message: err.message,
    });
  }
};

const deleteNote = async (request, response) => {
  try {
    const { id } = request.params;
    const [note] = await db.select().from(notes).where(eq(notes.id, id));

    if (!note) {
      return response.status(404).json({
        message: `Note not found.`,
      });
    }
    await db.delete(notes).where(eq(notes.id, id));

    return response
      .status(200)
      .json({ message: `Note has been deleted of id: ${id}` });
  } catch (err) {
    return response.status(500).json({
      message: err.message,
    });
  }
};

export { getAllNotes, getSingleNote, addNote, updateNote, deleteNote };
