const express = require("express");
const request = require("request");
const http = require("http");
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname));

//app.listen('view', 'ejs');




app.get('/', function(req, res){
   res.sendFile(__dirname+"/index.html");
   console.log("adbadbv1");

});

app.post("/",function(req,res){
    const city=req.body.cityName;
    //const city='matugama';
    const API=APIKEY;
    const url='http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+API;


    http.get(url, function(response){
        response.on("data",function(data){
            const wheatheData=JSON.parse(data);
            const temps=wheatheData.main.temp;
            console.log(wheatheData);
            console.log(temps);
            res.render("wheather");
        })
    })

})

app.listen(3000,function () {
    console.log("Server is running on port 3000");
  });