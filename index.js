const express = require("express"),
          app = express(),
          port = process.env.PORT || 3000,
          bodyParser = require("body-parser");
          
const todoRoutes = require("./routes/todos");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use("/api/todos", todoRoutes);
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));


app.get("/", (req, res)=>{
    res.sendFile("index.html");
});

app.listen(port, ()=>{
    console.log("APP IS RUNNING ON PORT " + port);
});