import express from "express";

const app = express()
const port = 3000;
var date = new Date()
var day = date.getDay()
var message = ""

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    if (day === 6 || 0)
        message = "Hey! It's the weekend. it's time to have fun!"
    else
        message = "Hey! It's weekday, it's time to work hard!"
    res.render("index.ejs",
        {today: message}
    );
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});