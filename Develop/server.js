const { v4: uuidv4 } = require("uuid");
const notes = require("./db/db.json");
const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = 3005;
const app = express();

//Middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Adds notes into db.json
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./db/db.json"));
});

//Adds new notes and posts
app.post("/api/notes", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const addNotes = req.body;
  addNotes.id = uuid.v4();
  notes.push(addNotes);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(notes);
});

//Allows for notes to be deleted
app.delete("/api/notes/:id", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const delNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(delnotes);
});

//Calling HTML
//homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

//notes.html
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

//Port listen
app.listen(PORT, () =>
  console.log(`Note Taker app listening at http://localhost:${PORT}`)
);
