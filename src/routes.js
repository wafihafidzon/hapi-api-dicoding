const { addNoteHandler, getAllNotesHandler, getNotesById, editNotes, deleteNotes } = require("./handler");
const routes = [
  {
    path: "/notes",
    method: "POST",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNotesById,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNotes,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNotes,
  },
];
module.exports = routes;