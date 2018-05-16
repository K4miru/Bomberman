var socketio = require("socket.io")
var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/test5');
var Models = require("./static/database/Models.js")(mongoose)
var Operations = require("./static/database/Operations.js")
var http = require("http");
var fs = require("fs");
var db;
var number = 0;
var numberselect =0;
var opers;


var server = http.createServer(function (req, res) {
    console.log(req.url)
    
    switch (req.method) {
        case "GET":
            Get();
            break;
        case "POST":

            break;

    }

    function Get() {
        if (req.url === "/index.html" || req.url === "/") {
            fs.readFile("static/index.html", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/Main.js" || req.url === "/static/Main.js") {
            fs.readFile("static/Main.js", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/three.js" || req.url === "/static/libs/three.js") {
            fs.readFile("static/libs/three.js", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/Style.css" || req.url === "/static/Style.css") {
            fs.readFile("static/Style.css", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/Materials.js" || req.url === "/static/materials/Materials.js") {
            fs.readFile("static/materials/Materials.js", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/Box.js" || req.url === "/static/Box.js") {
            fs.readFile("static/Box.js", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/BonusBox.js" || req.url === "/static/BonusBox.js") {
            fs.readFile("static/BonusBox.js", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/Box.jpg" || req.url === "/static/materials/Box.jpg") {
            fs.readFile("static/materials/Box.jpg", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/Bomba.js" || req.url === "/static/Bomba.js") {
            fs.readFile("static/Bomba.js", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/ExplosionMesh.js" || req.url === "/static/ExplosionMesh.js") {
            fs.readFile("static/ExplosionMesh.js", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/Grass.jpg" || req.url === "/static/materials/Grass.jpg") {
            fs.readFile("static/materials/Grass.jpg", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/WoodBox.jpg" || req.url === "/static/materials/WoodBox.jpg") {
            fs.readFile("static/materials/WoodBox.jpg", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/Bomberman1.jpg" || req.url === "/static/materials/Bomberman1.jpg") {
            fs.readFile("static/materials/Bomberman1.jpg", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/Bomberman2.jpg" || req.url === "/static/materials/Bomberman2.jpg") {
            fs.readFile("static/materials/Bomberman2.jpg", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/Bomberman3.jpg" || req.url === "/static/materials/Bomberman3.jpg") {
            fs.readFile("static/materials/Bomberman3.jpg", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/Bomberman4.jpg" || req.url === "/static/materials/Bomberman4.jpg") {
            fs.readFile("static/materials/Bomberman4.jpg", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/Models.js" || req.url === "/static/models/Models.js") {
            fs.readFile("static/models/Models.js", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/BombermanModel.js" || req.url === "/static/models/BombermanModel.js") {
            fs.readFile("static/models/BombermanModel.js", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/Help.js" || req.url === "/static/UI/Help.js") {
            fs.readFile("static/UI/Help.js", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/Kamera.js" || req.url === "/static/UI/Kamera.js") {
            fs.readFile("static/UI/Kamera.js", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/bonus/1.png" || req.url === "/static/materials/bonus/1.png") {
            fs.readFile("static/materials/bonus/1.png", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/bonus/2.png" || req.url === "/static/materials/bonus/2.png") {
            fs.readFile("static/materials/bonus/2.png", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/bonus/3.png" || req.url === "/static/materials/bonus/3.png") {
            fs.readFile("static/materials/bonus/3.png", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/bonus/4.png" || req.url === "/static/materials/bonus/4.png") {
            fs.readFile("static/materials/bonus/4.png", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/bonus/5.png" || req.url === "/static/materials/bonus/5.png") {
            fs.readFile("static/materials/bonus/5.png", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/help/shieldinfo.png" || req.url === "/materials/help/shieldinfo.png") {
            fs.readFile("static/materials/help/shieldinfo.png", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/help/safeinfo.png" || req.url === "/materials/help/safeinfo.png") {
            fs.readFile("static/materials/help/safeinfo.png", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/help/runinfo.png" || req.url === "/materials/help/runinfo.png") {
            fs.readFile("static/materials/help/runinfo.png", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/help/movement.png" || req.url === "/materials/help/movement.png") {
            fs.readFile("static/materials/help/movement.png", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/help/expinfo.png" || req.url === "/materials/help/expinfo.png") {
            fs.readFile("static/materials/help/expinfo.png", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/help/bombinfo.png" || req.url === "/materials/help/bombinfo.png") {
            fs.readFile("static/materials/help/bombinfo.png", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/arrow0.png" || req.url === "/materials/radar/arrow0.png") {
            fs.readFile("static/materials/radar/arrow0.png", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/arrow1.png" || req.url === "/materials/radar/arrow1.png") {
            fs.readFile("static/materials/radar/arrow1.png", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/arrow2.png" || req.url === "/materials/radar/arrow2.png") {
            fs.readFile("static/materials/radar/arrow2.png", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.write(data);
                res.end();
            })
        } else if (req.url === "/arrow3.png" || req.url === "/materials/radar/arrow3.png") {
            fs.readFile("static/materials/radar/arrow3.png", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.write(data);
                res.end();
            })
        }
		


    }
        
})


server.listen(3000);
console.log("serwer staruje na porcie 3000 - ten komunikat zobaczysz tylko raz")




//=================

var io = socketio.listen(server)

io.sockets.on("connection", function (client) {
    
    console.log("klient sie podłączył" + client.id)
	
    client.on("start", function (data) {
        var Username = data.User
        if (number == 0) {
            opers.DeleteAll(Models.Box)
            opers.DeleteAll(Models.BonusBox)
            numberselect = data.NumberSelect
        }
        io.sockets.emit("start", {
            number: number,
            User: Username,
            NumberSelect: numberselect
        });
        number++;
    })

    client.on("Move", function (data) {
        client.broadcast.emit("Move", {
            PlayerNumber: data.PlayerNumber,
            Rotate: data.Rotate,
            MoveBool: data.MoveBool,
            X: data.X,
            Z: data.Z
        });
    })

    client.on("Bomb", function (data) {
        client.broadcast.emit("Bomb", {
            X: data.X,
            Z: data.Z,
            PlayerNumber: data.PlayerNumber
        })
    })

    client.on("DestroyedBonus", function (data) {
        client.broadcast.emit("DestroyedBonus", {
            ID: data.ID,
            num: data.num,
            PlayerNumber: data.PlayerNumber
        })
    })



    client.on("GetBox", function (data) {
        var Username = data.User

        var zmienna = function (data) {
            for (var i = 0; i < data.length; i++) {
                //console.log(data[i].X + " " + data[i].Z + " " + data[i].ID)
                io.sockets.emit("GetBox", {
                    ID: data[i].ID,
                    X: data[i].X,
                    Z: data[i].Z,
                    User: Username
                });
            }

        }

        opers.SelectAll(Models.Box, zmienna);
    })

    client.on("GetBonusBox", function (data) {
        var Username = data.User

        var zmienna = function (data) {
            for (var i = 0; i < data.length; i++) {
                //console.log(data[i].X + " " + data[i].Z + " " + data[i].ID)
                io.sockets.emit("GetBonusBox", {
                    ID: data[i].ID,
                    X: data[i].X,
                    Z: data[i].Z,
                    num: data[i].num,
                    User: Username
                });
            }

        }

        opers.SelectAll(Models.BonusBox, zmienna);
    })


    client.on("Box", function (data) {
        //console.log(data.X + " " + data.Z + " " + data.ID)

        if (opers != null) {
            var box = new Models.Box(
                {
                    ID: data.ID,
                    X: data.X,
                    Z: data.Z
                });

            box.validate(function (err) {
                //console.log("błąd: "+err + " " + box);
            });

            opers.InsertOne(box);
        }
    })

    client.on("BonusBox", function (data) {
        //console.log(data.X + " " + data.Z + " " + data.ID)

        if (opers != null) {
            var box = new Models.BonusBox(
                {
                    ID: data.ID,
                    X: data.X,
                    Z: data.Z,
                    num: data.num
                });

            box.validate(function (err) {
                //console.log("błąd: "+err + " " + box);
            });

            opers.InsertOne(box);
        }
    })

    client.on("disconnect", function () {
        console.log("klient się rozłącza")
    })
    
})

function connectToMongo() {

    db = mongoose.connection;

    //przy wystąpieniu błędu
    db.on("error", function () {
        console.log("problem z mongo")
    });
	

    //przy poprawnym połaczeniu z bazą
    db.once("open", function () {
        console.log("mongo jest podłączone - można wykonywać operacje na bazie");
        opers = new Operations();
        

    });
	

    //przy rozłaczeniu z bazą
    db.once("close", function () {
        console.log("mongodb zostało odłączone");
    });
}

connectToMongo();