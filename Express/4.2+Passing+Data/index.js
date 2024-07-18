import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs');
});

app.post("/submit", (req, res) => {
  const num_length = req.body["lName"].length + req.body["fName"].length;
  res.render("index.ejs", { number: num_length})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
