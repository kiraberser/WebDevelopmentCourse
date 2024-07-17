import express from "express"

const app = express();
const port = 3000
            
app.get('/', (req, res) => {
    res.send("Hello, World!")
});

app.get('/about', (req, res) => {
    res.send('Esta es la pagina para mostrar que ya perdi el miedo!')
});

app.listen(port, () => {
    console.log(`Server running on ${port}`)
});