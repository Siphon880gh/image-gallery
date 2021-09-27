const express = require("express");
const nocache = require("nocache");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(nocache());
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile("./index.html")
})
  
app.post('/collections', (req, res) => {
    let {credentials} = req.body;
    res.json({type:"collections", status: "success", debug:credentials})
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})