const express = require('express');
const app = express();
const port = 3000;

const cors = require("cors");

app.use(cors());

const fs = require("fs");

app.get('/:fileName', (req, res) => {
    var filename = req.params.fileName
    if(fs.existsSync("assets/" + filename)){
        res.sendFile("assets/" + filename, {root: "."});
    }
    else if(filename == "colors"){
        res.sendFile("colors/prismacolors.json", {root:"."});
    }
    else{
        res.send("error");
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})