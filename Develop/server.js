const { v4: uuidv4 } = require("uuid");
const db = require("./db/db.json");
const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = 3009;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/api/notes", (req, res) => res.json(db));

app.post("/api/notes", (req, res) => res.json(db));

app.listen(PORT, () =>
  console.log(`Note Taker app listening at http://localhost:${PORT}`)
);
