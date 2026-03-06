import axiosInstance from "../axios/axios";

const getAllNotesService = async () => {
  const { data } = await axiosInstance.get("notes");
  return data;
};

const createNoteService = async (body) => {
  const { data } = await axiosInstance.post("notes", body);
  return data;
};

const getSingleNoteService = async (id) => {
  const { data } = await axiosInstance.get(`notes/${id}`);
  return data;
};

const updateNoteService = async (id, body) => {
  const { data } = await axiosInstance.put(`notes/${id}`, body);
  return data;
};

const deleteNoteService = async (id) => {
  const { data } = await axiosInstance.delete(`notes/${id}`);
  return data;
};

export {
  getAllNotesService,
  createNoteService,
  getSingleNoteService,
  updateNoteService,
  deleteNoteService,
};
