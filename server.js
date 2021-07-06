const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//parse requestes of content type- application/json
app.use(bodyParser.json());

//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

//sync sequilize database
const db = require("./app/models");

//for development purpose, drop existing tables and re-sync database using {force: true} else no need to use {force : true}
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db");
});
  
//simple route
app.get("/", (req,res) =>{
    res.json({message: "Welcome to the application."});
});

require("./app/routes/tutorial.routes")(app);

//set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{

    console.log(`Server is running on port ${PORT}`);

})