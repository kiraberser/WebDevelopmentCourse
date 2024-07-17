import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var bandName = ""

app.use(bodyParser.urlencoded({ extended: true }));

function bandGenerator(req, res, next) {
  console.log(req.body)
  bandName = req.body["street"] + req.body["pet"]
  next();
};

app.use(bandGenerator)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is: \n </h1> <h3>${bandName} ✌️</h3>`)
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
