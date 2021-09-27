const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile("./index.html")
})
  
app.get('/collections', (req, res) => {
    const {credentials="*"} = req.params;
    res.json({status: "Success", debug:credentials})
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})