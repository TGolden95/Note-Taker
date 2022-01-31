const { v4: uuidv4 } = require("uuid");
const db = require("./db/db.json");
const exp = require("express");
const fs = require("fs");
const path = require("path");
const port = 3009;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
