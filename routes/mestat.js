var express = require('express');
var router = express.Router();
var fs=require("fs");

var paikat = require("../paikat.json") //tämä johtaa GETin json-tiedostoon

//nämä tehty POSTia varten
// var tiedot=[];
// fs.readFile("paikat.json", (err, data) => {
// tiedot = JSON.parse(data);
// })


router.get('/', function (req, res) {
    res.send(paikat);
});


router.route('/:paikka')
	.get(function (req, res) {
	    for (var kohde of paikat) {
	        if (kohde.paikka == req.params.paikka) {
	            res.json(kohde);
	            return;
	        }
	    }
	    res.json("{'msg': 'Ei sellaista kohdetta!'}");
    })



/*
router.post('/', function (req, res) {
    var kohde=req.body
    paikat.push(kohde)
    //fs että tiedot tallentuu jsoniin
    fs.writeFile("paikat.json", JSON.stringify(tiedot), () => { console.log("Tiedot tallennettu")
    })
    res.send('Got a POST request')
});
*/
module.exports = router;