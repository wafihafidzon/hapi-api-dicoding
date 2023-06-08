const { addNoteHandler, getAllNotesHandler } = require("./handler");
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
];
module.exports = routes;