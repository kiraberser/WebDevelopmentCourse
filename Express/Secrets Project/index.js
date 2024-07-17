import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var truePassword = "ILoveProgramming"
var url = ""

app.use(bodyParser.urlencoded({ extended: true }));

function true_password(req, res, next){
    if (truePassword === req.body["password"])
        url = __dirname + "/public/secret.html"
    else
        url = __dirname + "/public/index.html"
    next()
}

app.use(true_password)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/secret", (req, res) => {
    res.sendFile(url)
})

app.post("/check", (req, res) => {
    res.sendFile(url)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
