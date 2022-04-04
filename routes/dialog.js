var express = require('express');
var router = express.Router();
'use strict';
const fs = require('fs');
var jdata = {};
readJsonData();
// let rawdata = fs.readFileSync('dialog.json');
// let dialog = JSON.parse(rawdata);

router.get('/', function(req, res, next){


    var dKeys = "";
    Object.keys(jdata["dialog"]).forEach(function(key){
        dKeys+=key + " : ";
    })

    res.send(dKeys);
});


function readJsonData() {
    fs.readFile('dialog.json', (err,data) => {
        if(err) throw err;
        console.log(data);
        let dialog = JSON.parse(data);
        jdata = dialog;
    });
}

module.exports = router;
