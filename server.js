const express = require("express");
const path = require("path");
var fs = require("fs");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile("./index.html")
})

/** Get list of collections for the current credentials. Will be used by app to populate dropdown of image galleries  */
app.post('/collections', (req, res) => {
    let {credentials} = req.body;
    let credentialsFile = fs.readFileSync("./credentials.json");
    let credentialsList = [];
    let collections = [];
 
    try {
        credentialsList = JSON.parse(credentialsFile);
    } catch(err) {
        res.json({type:"collections", status: "error", err: err});
    }
    
    if(credentials in credentialsList) {
        collections = credentialsList[credentials];
    } else {
        if(!"*" in credentialsList) 
            res.json({type:"collections", status: "error", err: "Credentials list incorrectly formatted. Must have an entry for * which is the default when no credentials applied at the app."});

        collections = credentialsList["*"];
    }
    // console.log({credentials});
    // console.log({credentialsList});
    res.json({type:"collections", status: "success", collections:collections});
})

app.get('/collection/:id', (req, res) => {
    let {id:collectionId} = req.params;
    // console.log({path:path.join(__dirname, "public", "collections", collectionId, "/")});

    fs.readdir(path.join(__dirname, "public", "collections", collectionId, "/"), (err, files)=>{
        if(!err) {
            files = files.filter(file=>file.indexOf(".jpeg")>-1 || file.indexOf(".jpg")>-1 || file.indexOf(".bmp")>-1 || file.indexOf(".gif")>-1 || file.indexOf(".png")>-1 || file.indexOf(".tiff")>-1)
            res.json({type:"collection", query:collectionId, status: "success", files})
        } else
            res.json({type:"collection", query:collectionId, status: "error", err});
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})