const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/connection");
const Games = require("./database/Games");
const cors = require("cors")

// Active database/sequelize
connection.
        authenticate()
        .then(() => {console.log("Database started")})
        .catch((err) => {console.log(err)})

// Active body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//cors
app.use(cors());

// Routes
app.get("/games", (req, res) => {
    res.statusCode = 200;
    Games.findAll({raw: true}).then((games) => {
        res.send(games);
    })
});

app.post("/game", (req, res) => {
    var {name, year, developedBy, description, genre} = req.body;
    if(typeof year != "number"){
        res.sendStatus(400);
    }else{
        Games.create({
            name: name,
            year: year,
            developedBy: developedBy,
            description: description,
            genre: genre
        })
        res.sendStatus(200);
    }
});

app.delete("/game/:id", async (req, res) => {
        var id = (req.params.id);
        Games.destroy({
            where:{
                id: id
            }
        }).then(() => {
            res.sendStatus(200);
        })
    }    
);

app.put("/game", async (req, res) => {
        var {id, name, description, developedBy, year, genre} = req.body;
        Games.update({
            name: name,
            description: description,
            year: year,
            developedBy: developedBy,
            genre: genre
        },{
            where:{id:id}
        }).then(() => {
            res.sendStatus(200)
            console.log("Updated")
        });
    }
);

// Server starter
app.listen(4000, () => {
    console.log("Server started!")
});