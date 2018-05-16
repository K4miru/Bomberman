var clock = new THREE.Clock();
this.Main = function () {
    var scene = new THREE.Scene();
    var axis = new THREE.AxisHelper(2000);
    scene.add(axis);
    var szer = window.innerWidth;
    var wys = window.innerHeight;
    var camera = new THREE.OrthographicCamera(
        szer / -2,
        szer / 2,
        wys / 2,
        wys / -2,
        -5000,
        5000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xffffff);
    renderer.setSize(szer, wys);
    camera.position.x = -100;
    camera.position.y = 300;
    camera.position.z = 200;

    camera.lookAt(scene.position)
    var raycaster = new THREE.Raycaster();
    var mouseVector = new THREE.Vector2()


    var kamera
    //chodzenie
    var oldrotation = 0;
    var NumberCollision = 0;
    var posZ = 1;
    var movemesh = false;
    var rotate = [];
    //explosion
    var NewExplosion = new ExplosionMesh();
    var ExplosionClone = [];
    //bomby
    var bombynum = 0;
    var bombymax = 1;
    var NewBomba = new Bomba();
    var NewBox = new Box();
    var explosionTime = [];
    var Bomby = [];
    var BombyPN = [];
    var exptime =150
    //Boxy
    var BoxTab = [];
    var WoodBox = []
    var BonusBoxTab = [];
    var NewBonusBox = new BonusBox()
    //Serwerowe i rozróżnienie graczy
    var deathtab = [0, 0, 0, 0]
    var bombwalk = 0;
    var win = true;
    var dead = 0;
    var Number = 3;
    var NumberSelect=0;
    var PlayerNumber;
    var Username = "";
    //Bonusy
    var fasttab = [3, 3, 3, 3]
    var DetonationDistance = [2, 2, 2, 2];
    var shieldtab = [0, 0, 0, 0]
    //modele graczy
    var newModel
    var canvas
    var ModelMesh = [];
    newModel = new Model(Number)
    newModel.ModelLoad()
    for (var i = 0; i <= Number; i++) {
        ModelMesh.push(newModel.getModel(i));
        scene.add(ModelMesh[i])
    }
    //Plansza
    
    var geometry = new THREE.PlaneBufferGeometry(2250, 2250);
    var meshground = new THREE.Mesh(geometry, Materials.Ground);
    meshground.rotateX(Math.PI / 2);
    meshground.material.map.repeat.set(4, 4);
    meshground.material.map.wrapS = meshground.material.map.wrapT = THREE.RepeatWrapping;
    var meshgroundclone = meshground.clone()
    scene.add(meshgroundclone);
    //Tworzenie Boxów
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
            if (i % 2 == 0 && j % 2 == 0) {
                var Element = NewBox.getBox(j * 50 - 350, i * 50 - 350, Materials.BoxMaterial);
                BoxTab.push(Element)
                scene.add(Element);
            } else if (i == 0 || i == 14 || j == 0 || j == 14) {
                var Element = NewBox.getBox(j * 50 - 350, i * 50 - 350, Materials.BoxMaterial);
                BoxTab.push(Element)
                scene.add(Element);
            }
        }
    }
    //Tworzenie WoodBoxów
    var x, z, gol = 0;
    for (var i = 0; i < 90; i++) {
        var bool = false;
        do {
            random()
        } while ((x % 2 == 0 && z % 2 == 0) || (x > 0 && x < 3 && z > 0 && z < 3) || (x > 11 && x < 14 && z > 0 && z < 3) || (x > 0 && x < 3 && z > 11 && z < 14) || (x > 11 && x < 14 && z > 11 && z < 14))
        var Element = NewBox.getBox(x * 50 - 350, z * 50 - 350, Materials.WoodBoxMaterial);
        WoodBox.push(Element)
        scene.add(Element);
        if(i%2==0)
            BonusRandom(x * 50 - 350, z * 50 - 350)
    }
    //console.log(gol)

    for (var i = -1; i < 2; i += 1) {
        for (var j = -1; j < 2; j += 1) {
            if (i != 0 || j != 0) {
                var light = new THREE.SpotLight(0xffffff, 5, 1300, 3.14);
                light.position.set(i * 1050 + 100, 500, j * 1050 - 150);
                light.lookAt(scene.position);
                scene.add(light);
            }
        }
    }

    //Sockety odbierające
    client.on("start", function (data) {
        if (data.number < data.NumberSelect) {
            if (Username == data.User) {
                Number = data.NumberSelect
                PlayerNumber = data.number
                document.getElementById("login").removeEventListener("click", Login)
                /*
                document.getElementById("panel").style.top = "-110%";
                window.addEventListener("keypress", KeyPress, false)
                window.addEventListener("keyup", onKeyUp, false)
                document.getElementById("login").removeEventListener("click", Login)
                canvas = new Help(Number)
                // */
            }
            if (PlayerNumber == 0) {
                for (var i = 0; i < WoodBox.length; i++) {
                    client.emit("Box", {
                        ID: i,
                        X: WoodBox[i].position.x,
                        Z: WoodBox[i].position.z,
                    })
                }
                for (var i = 0; i < BonusBoxTab.length; i++) {
                    var num = BonusBoxTab[i].material.materials[0].map.sourceFile
                    num = parseInt(num.slice(6, 7)) - 1
                    client.emit("BonusBox", {
                        ID: i,
                        X: BonusBoxTab[i].position.x,
                        Z: BonusBoxTab[i].position.z,
                        num: num
                    })
                }
            } else {
                client.emit("GetBox", {
                    User: Username
                })
                client.emit("GetBonusBox", {
                    User: Username
                })
            }
        } else {
            Number = 0;
        }//
        if (data.number == (Number - 1)) {
            for (var i = Number; i < 4; i++) {
                scene.remove(ModelMesh[i])
                ModelMesh[i].position.x = -600;
                ModelMesh[i].position.x = -600;
            }
            //kamera = new Kamera(camera, ModelMesh[PlayerNumber])
            document.getElementById("panel").style.top = "-110%";
            window.addEventListener("keypress", KeyPress, false)
            window.addEventListener("keyup", onKeyUp, false)
            
            canvas = new Help(Number)
        }//*/
    });

    client.on("GetBox", function (data) {
        if (Username == data.User) {
            //console.log(data.X + " " + data.Z + " " + data.ID)
            WoodBox[data.ID].position.x = data.X
            WoodBox[data.ID].position.z = data.Z
        }
    });

    client.on("GetBonusBox", function (data) {
        if (Username == data.User) {
            //console.log(data.X + " " + data.Z + " " + data.ID)
            BonusBoxTab[data.ID].position.x = data.X
            BonusBoxTab[data.ID].position.z = data.Z
            BonusBoxTab[data.ID].material = Materials.BonusTab[data.num]
        }
    });

    client.on("Bomb", function (data) {
        Bomby.push(NewBomba.getBomba(data.X, data.Z))
        BombyPN.push(data.PlayerNumber)
        explosionTime.push(exptime)
        scene.add(Bomby[Bomby.length - 1])
    });



    client.on("Move", function (data) {
        //console.log(data.PlayerNumber + " " + data.Rotate)
        if (data.MoveBool) {
            if (rotate[data.PlayerNumber] != data.Rotate) {
                newModel.start(data.PlayerNumber, fasttab[data.PlayerNumber])
                ModelMesh[data.PlayerNumber].rotation.y = Math.PI / 2 * data.Rotate
                rotate[data.PlayerNumber] = data.Rotate
            }

            newModel.update()
            newModel.move(data.PlayerNumber, fasttab[data.PlayerNumber])
        } else {/*
            var x = ModelMesh[data.PlayerNumber].position.x
            var z = ModelMesh[data.PlayerNumber].position.z
            x = Math.round(x / 50) * 50
            z = Math.round(z / 50) * 50
            */
            ModelMesh[data.PlayerNumber].position.x = data.X
            ModelMesh[data.PlayerNumber].position.z = data.Z
            newModel.stopanim(data.PlayerNumber)
            rotate[data.PlayerNumber] = 5;
        }
    })

    client.on("DestroyedBonus", function (data) {
        scene.remove(BonusBoxTab[data.ID])
        BonusBoxTab.splice(data.ID, 1)
        switch (data.num) {
            case 4:
                fasttab[data.PlayerNumber]++;
                newModel.start(data.PlayerNumber, fasttab[data.PlayerNumber])
                break;

            case 1:
                DetonationDistance[data.PlayerNumber]++;
                break;

            case 3:
                shieldtab[data.PlayerNumber]=1;
                break;
        }
    });

    //Listenery i Funkcje
    document.getElementById("div").appendChild(renderer.domElement);
    document.getElementById("div").addEventListener("click", onMouseDown, false)
    document.getElementById("login").addEventListener("click", Login, false)

    function ModelInteract(PlayerID) {
        dead++;
        if (PlayerNumber == PlayerID) {
            win = false;
            window.removeEventListener("keypress", KeyPress)
            window.removeEventListener("keyup", onKeyUp)
        }
        if (dead == (Number - 1)) {
            if (win) {
                alert("wygrałeś")
            } else {
                alert("przegrałeś")
            }
        }
        deathtab[PlayerID] = 49;
    }


    function BonusRandom(x,z) {
        var random = parseInt(Math.floor(Math.random() * 5));
        BonusBoxTab.push(NewBonusBox.getBonusBox(x, z, Materials.BonusTab[random]))
        scene.add(BonusBoxTab[BonusBoxTab.length - 1]);
    }

    function SendDestroyedBomb(ID,num) {
        client.emit("DestroyedBonus", {
            ID: ID,
            num: num,
            PlayerNumber: PlayerNumber
        })
    }

    function SendBomb(x, z) {
        client.emit("Bomb", {
            X: x,
            Z: z,
            PlayerNumber: PlayerNumber
        })
    }

    function SendMove() {
        client.emit("Move", {
            PlayerNumber: PlayerNumber,
            Rotate: rotate[PlayerNumber],
            MoveBool: movemesh,
            X: ModelMesh[PlayerNumber].position.x,
            Z: ModelMesh[PlayerNumber].position.z
        })
    }

    function ExplosionCheck() {
        for (var i = 0; i < ExplosionClone.length; i++)
            if (ExplosionClone[i].zmienna == 0) {
                scene.remove(ExplosionClone[i])
            } else
                ExplosionClone[i].zmienna--;
    }


    function random() {
        x = parseInt(Math.floor(Math.random() * 13)) + 1;
        z = parseInt(Math.floor(Math.random() * 13)) + 1;
        for (var i = 0; i < WoodBox.length; i++) {
            if (WoodBox[i].position.x == (x * 50 - 350) && WoodBox[i].position.z == (z * 50 - 350)) {
                bool = true;
                gol++
                random()
            }
        }
    }

    function Login() {
        Username = document.getElementById("username").value;
        NumberSelect = parseInt(document.getElementById("PlayerSelect").value);
        //console.log(Username)
        console.log(NumberSelect)
        client.emit("start", {
            User: Username,
            NumberSelect: NumberSelect
        })
    }
	
    function StopAnimMove() {
        movemesh = false;
        newModel.stopanim(PlayerNumber)
        SendMove()
    }

    function onKeyUp(event) {
        var keyCode = event.which;
        //console.log(keyCode)
        switch (keyCode) {
            case 83 :
                StopAnimMove()
                break;

            case 87:
                StopAnimMove()
                break;

            case 68:
                StopAnimMove()
                break;

            case 65:
                StopAnimMove()
                break;
        }
    }

    function Rotate() {
        if (!movemesh) {
            newModel.start(PlayerNumber, fasttab[PlayerNumber])
            ModelMesh[PlayerNumber].rotation.y = Math.PI / 2 * rotate[PlayerNumber]
            //ModelMesh.rotateY(Math.PI / 2 * (4 - rotate))
            //ModelMesh.rotateY = Math.PI/2*rotate
        }
    }

    function BombDetonation() {
        for (var i = 0; i < explosionTime.length; i++)
            if (explosionTime[i] == 0) {
                if (BombyPN[i] == PlayerNumber)
                    bombynum--;
                var bx = Bomby[i].position.x
                var bz = Bomby[i].position.z
                for (var g = 0; g < ModelMesh.length; g++) {
                    //console.log(bx + " " + ModelMesh[PlayerNumber].position.x + " " + (bx - (j + 1) * 50))
                    //console.log(bz + " " + ModelMesh[PlayerNumber].position.z + " " + (bz - (j + 1) * 50))
                    var x = ModelMesh[g].position.x
                    var z = ModelMesh[g].position.z
                    x = Math.round(x / 50) * 50
                    z = Math.round(z / 50) * 50
                    ExplosionClone.push(NewExplosion.getExplosionMesh(bx,bz));
                    scene.add(ExplosionClone[ExplosionClone.length - 1])
                    if (bx == x && bz == z) {
                        if (shieldtab[g] == 1) {
                            shieldtab[g] = 0;
                        } else {
                            console.log("puff bomb")
                            ModelInteract(g)
                        }
                        //scene.remove(ModelMesh[g])
                        break;
                    }
                }
                for (var j = 0; j < DetonationDistance[BombyPN[i]]; j++) {
                    var BoxCheckleft = false;
                    for (var g = 0; g < BoxTab.length; g++) {
                        if ((bx - (j + 1) * 50) == BoxTab[g].position.x && bz == BoxTab[g].position.z) {
                            BoxCheckleft = true;
                            break;
                        }
                    }

                    if (BoxCheckleft) {
                        BoxCheckleft = false;
                        break;
                    } else {
                        for (var g = 0; g < WoodBox.length; g++) {
                            if ((bx - (j + 1) * 50) == WoodBox[g].position.x && bz == WoodBox[g].position.z) {
                                scene.remove(WoodBox[g])
                                WoodBox.splice(g, 1);
                                BoxCheckleft = true;
                                break;
                            }
                        }
                        if (!BoxCheckleft) {
                            for (var g = 0; g < Bomby.length; g++) {
                                if ((bx - (j + 1) * 50) == Bomby[g].position.x && bz == Bomby[g].position.z) {
                                    explosionTime[g] = 0;
                                    BoxCheckleft = true;
                                    break;
                                }
                            }
                        }

                        for (var g = 0; g < ModelMesh.length; g++) {
                            //console.log(bx + " " + ModelMesh[PlayerNumber].position.x + " " + (bx - (j + 1) * 50))
                            //console.log(bz + " " + ModelMesh[PlayerNumber].position.z + " " + (bz - (j + 1) * 50))
                            var x = ModelMesh[g].position.x
                            var z = ModelMesh[g].position.z
                            x = Math.round(x / 50) * 50
                            z = Math.round(z / 50) * 50
                            ExplosionClone.push(NewExplosion.getExplosionMesh((bx - (j + 1) * 50), bz));
                            scene.add(ExplosionClone[ExplosionClone.length - 1])
                            if ((bx - (j + 1) * 50) == x && bz == z) {
                                if (shieldtab[g] == 1) {
                                    shieldtab[g] = 0;
                                } else {
                                    console.log("puff left")
                                    ModelInteract(g)
                                }
                                //scene.remove(ModelMesh[g])
                                break;
                            }
                        }
                        
                    }
                    if (BoxCheckleft) {
                        BoxCheckleft = false;
                        break;
                    }
                }
                for (var j = 0; j < DetonationDistance[BombyPN[i]]; j++) {
                    var BoxCheckright = false;
                    for (var g = 0; g < BoxTab.length; g++) {
                        if ((bx + (j + 1) * 50) == BoxTab[g].position.x && bz == BoxTab[g].position.z) {
                            BoxCheckright = true;
                            break;
                        }
                    }

                    if (BoxCheckright) {
                        BoxCheckright = false;
                        break;
                    } else {
                        for (var g = 0; g < WoodBox.length; g++) {
                            if ((bx + (j + 1) * 50) == WoodBox[g].position.x && bz == WoodBox[g].position.z) {
                                scene.remove(WoodBox[g])
                                WoodBox.splice(g, 1);
                                BoxCheckright = true;
                                break;
                            }
                        }
                        if (!BoxCheckright) {
                            for (var g = 0; g < Bomby.length; g++) {
                                if ((bx + (j + 1) * 50) == Bomby[g].position.x && bz == Bomby[g].position.z) {
                                    explosionTime[g] = 0;
                                    BoxCheckright = true;
                                    break;
                                }
                            }
                        }
                        
                        for (var g = 0; g < ModelMesh.length; g++) {
                            //console.log(bx + " " + ModelMesh[PlayerNumber].position.x + " " + (bx - (j + 1) * 50))
                            //console.log(bz + " " + ModelMesh[PlayerNumber].position.z + " " + (bz - (j + 1) * 50))
                            var x = ModelMesh[g].position.x
                            var z = ModelMesh[g].position.z
                            x = Math.round(x / 50) * 50
                            z = Math.round(z / 50) * 50
                            ExplosionClone.push(NewExplosion.getExplosionMesh((bx + (j + 1) * 50), bz));
                            scene.add(ExplosionClone[ExplosionClone.length - 1])
                            if ((bx + (j + 1) * 50) == x && bz == z) {
                                if (shieldtab[g] == 1) {
                                    shieldtab[g] = 0;
                                } else {
                                    console.log("puff right")
                                    ModelInteract(g)
                                }
                                //scene.remove(ModelMesh[g])
                                break;
                            }
                        }
                        
                    }
                    if (BoxCheckright) {
                        BoxCheckright = false;
                        break;
                    }
                }
                for (var j = 0; j < DetonationDistance[BombyPN[i]]; j++) {
                    var BoxChecktop = false;
                    for (var g = 0; g < BoxTab.length; g++) {
                        if (bx == BoxTab[g].position.x && (bz - (j + 1) * 50) == BoxTab[g].position.z) {
                            BoxChecktop = true;
                            break;
                        }
                    }

                    if (BoxChecktop) {
                        BoxChecktop = false;
                        break;
                    } else {
                        for (var g = 0; g < WoodBox.length; g++) {
                            if (bx == WoodBox[g].position.x && (bz - (j + 1) * 50) == WoodBox[g].position.z) {
                                scene.remove(WoodBox[g])
                                WoodBox.splice(g, 1);
                                BoxChecktop = true;
                                break;
                            }
                        }
                        if (!BoxChecktop) {
                            for (var g = 0; g < Bomby.length; g++) {
                                if (bx == Bomby[g].position.x && (bz - (j + 1) * 50) == Bomby[g].position.z) {
                                    explosionTime[g] = 0;
                                    BoxChecktop = true;
                                    break;
                                }
                            }
                        }
                        
                        for (var g = 0; g < ModelMesh.length; g++) {
                            //console.log(bx + " " + ModelMesh[PlayerNumber].position.x + " " + (bx - (j + 1) * 50))
                            //console.log(bz + " " + ModelMesh[PlayerNumber].position.z + " " + (bz - (j + 1) * 50))
                            var x = ModelMesh[g].position.x
                            var z = ModelMesh[g].position.z
                            x = Math.round(x / 50) * 50
                            z = Math.round(z / 50) * 50
                            ExplosionClone.push(NewExplosion.getExplosionMesh(bx, (bz - (j + 1) * 50)));
                            scene.add(ExplosionClone[ExplosionClone.length - 1])
                            if (bx == x && (bz - (j + 1) * 50) == z) {
                                if (shieldtab[g] == 1) {
                                    shieldtab[g] = 0;
                                } else {
                                    console.log("puff top")
                                    ModelInteract(g)
                                }
                                //scene.remove(ModelMesh[g])
                                break;
                            }
                        }
                        
                    }
                    if (BoxChecktop) {
                        BoxChecktop = false;
                        break;
                    }
                }
                for (var j = 0; j < DetonationDistance[BombyPN[i]]; j++) {
                    var BoxCheckbottom = false;
                    for (var g = 0; g < BoxTab.length; g++) {
                        if (bx == BoxTab[g].position.x && (bz + (j + 1) * 50) == BoxTab[g].position.z) {
                            BoxCheckbottom = true;
                            break;
                        }
                    }

                    if (BoxCheckbottom) {
                        BoxCheckbottom = false;
                        break;
                    } else {
                        for (var g = 0; g < WoodBox.length; g++) {
                            if (bx == WoodBox[g].position.x && (bz + (j + 1) * 50) == WoodBox[g].position.z) {
                                scene.remove(WoodBox[g])
                                WoodBox.splice(g, 1);
                                BoxCheckbottom = true;
                                break;
                            }
                        }
                        if (!BoxCheckbottom) {
                            for (var g = 0; g < Bomby.length; g++) {
                                if (bx == Bomby[g].position.x && (bz + (j + 1) * 50) == Bomby[g].position.z) {
                                    explosionTime[g] = 0;
                                    BoxCheckbottom = true;
                                    break;
                                }
                            }
                        }
                        
                        for (var g = 0; g < ModelMesh.length; g++) {
                            //console.log(bx + " " + ModelMesh[PlayerNumber].position.x + " " + (bx - (j + 1) * 50))
                            //console.log(bz + " " + ModelMesh[PlayerNumber].position.z + " " + (bz - (j + 1) * 50))
                            var x = ModelMesh[g].position.x
                            var z = ModelMesh[g].position.z
                            x = Math.round(x / 50) * 50
                            z = Math.round(z / 50) * 50
                            ExplosionClone.push(NewExplosion.getExplosionMesh(bx, (bz + (j + 1) * 50)));
                            scene.add(ExplosionClone[ExplosionClone.length - 1])
                            if (bx == x && (bz + (j + 1) * 50) == z) {
                                if (shieldtab[g] == 1) {
                                    shieldtab[g] = 0;
                                } else {
                                    console.log("puff bottom")
                                    ModelInteract(g)
                                }
                                //scene.remove(ModelMesh[g])
                                break;
                            }
                        }
                        
                    }
                    if (BoxCheckbottom) {
                        BoxCheckbottom = false;
                        break;
                    }
                }

                explosionTime.splice(i, 1)
                scene.remove(Bomby[i])
                Bomby.splice(i, 1)
                BombyPN.splice(i,1)
            } else {
                explosionTime[i]--;
                //console.log(explosionTime[i])
            }
    }

    function KeyPress(event) {
        var keyCode = event.which;
        //console.log(keyCode)
        switch (keyCode) {
            case 113:
                //q
                break;

            case 101:
                //e
                break;

            case 119:
                //w
                rotate[PlayerNumber] = 3;
                Rotate()
                movemesh = true;
                
                break;

            case 115:
                //s
                rotate[PlayerNumber] = 1;
                Rotate()
                movemesh = true;
                break;

            case 97:
                //a
                rotate[PlayerNumber] = 0;
                Rotate()
                movemesh = true;
                break;

            case 100:
                //d
                rotate[PlayerNumber] = 2;
                Rotate()
                movemesh = true;
                break;

            case 32:
                //space
                if (bombynum < bombymax) {
                    var x = ModelMesh[PlayerNumber].position.x
                    var z = ModelMesh[PlayerNumber].position.z
                    x = Math.round(x / 50) * 50
                    z = Math.round(z / 50) * 50
                    if (Bomby.length > 0) {
                        var numberBomb = 0;
                        for (var i = 0; i < Bomby.length; i++) {
                            if (Bomby[i].position.x == x && Bomby[i].position.z == z) {
                                numberBomb++;
                            }
                        }
                        if (numberBomb == 0) {
                            Bomby.push(NewBomba.getBomba(x, z))
                            explosionTime.push(exptime)
                            scene.add(Bomby[Bomby.length - 1])
                            BombyPN.push(PlayerNumber)
                            bombynum++
                            SendBomb(x, z);
                        }
                    } else {
                        Bomby.push(NewBomba.getBomba(x, z))
                        explosionTime.push(exptime)
                        scene.add(Bomby[Bomby.length - 1])
                        BombyPN.push(PlayerNumber)
                        bombynum++
                        SendBomb(x, z);
                    }
                }
                //console.log(Bomby[Bomby.length - 1])
                break;
        }
    }
    
    function onMouseDown(event) {
        mouseVector.x = (event.clientX / szer) * 2 - 1;
        mouseVector.y = -(event.clientY / wys) * 2 + 1;

        raycaster.setFromCamera(mouseVector, camera);
        var intersects = raycaster.intersectObjects(scene.children, true);

        if (intersects.length > 0) {
            console.log(intersects[0].object);
			
            if (intersects[0].object.type == "Mesh") {
                var num = intersects[0].object.material.materials[0].map.sourceFile
                num = parseInt(num.slice(6, 7)) - 1
                console.log(num)
                canvas.putImage(Materials.HelpBonus[num])
            }
        }

    }
    
    animateScene()
    function animateScene() {
        BombDetonation()
        ExplosionCheck()
        if (newModel) {/*
            if (kamera) {
                kamera.update()
                camera.updateProjectionMatrix();
            }*/
            newModel.update()
            if (movemesh) {
                if (oldrotation == ModelMesh[PlayerNumber].rotation.y) {
                    var x = ModelMesh[PlayerNumber].position.x
                    var z = ModelMesh[PlayerNumber].position.z
                    x = Math.round(x / 50) * 50
                    z = Math.round(z / 50) * 50
                    for (var i = 0; i < BoxTab.length; i++) {
                        if (ModelMesh[PlayerNumber].position.distanceTo(BoxTab[i].position) < 50) {
                            movemesh = false
                        }
                    }

                    for (var i = 0; i < WoodBox.length; i++) {
                        if (ModelMesh[PlayerNumber].position.distanceTo(WoodBox[i].position) < 50) {
                            movemesh = false
                        }
                    }
                    if (bombwalk == 0) {
                        for (var i = 0; i < Bomby.length; i++) {
                            var x = ModelMesh[PlayerNumber].position.x
                            var z = ModelMesh[PlayerNumber].position.z
                            x = Math.round(x / 50) * 50
                            z = Math.round(z / 50) * 50
                            switch (rotate[PlayerNumber]) {
                                case 0:
                                    if (Bomby[i].position.x + 50 == x && Bomby[i].position.z == z) {
                                        movemesh = false;
                                    }
                                    break;

                                case 2:
                                    if (Bomby[i].position.x - 50 == x && Bomby[i].position.z == z) {
                                        movemesh = false;
                                    }
                                    break;

                                case 3:
                                    if (Bomby[i].position.x == x && Bomby[i].position.z + 50 == z) {
                                        movemesh = false;
                                    }
                                    break;

                                case 1:
                                    if (Bomby[i].position.x == x && Bomby[i].position.z - 50 == z) {
                                        movemesh = false;
                                    }
                                    break;
                            }

                        }
                    }
                    

                    if (!movemesh) {
                        ModelMesh[PlayerNumber].position.x =x
                        ModelMesh[PlayerNumber].position.z=z
                    } 
                } else {
                    oldrotation = ModelMesh[PlayerNumber].rotation.y
                }
                if (movemesh) {
                    newModel.move(PlayerNumber, fasttab[PlayerNumber])
                    var x = ModelMesh[PlayerNumber].position.x
                    var z = ModelMesh[PlayerNumber].position.z
                    x = Math.round(x / 50) * 50
                    z = Math.round(z / 50) * 50
                    for (var i = 0; i < BonusBoxTab.length; i++) {
                        if (x == BonusBoxTab[i].position.x && z == BonusBoxTab[i].position.z) {
                            scene.remove(BonusBoxTab[i])
                            var num = BonusBoxTab[i].material.materials[0].map.sourceFile
                            num = parseInt(num.slice(6, 7)) - 1
                            canvas.putImage(Materials.HelpBonus[num])
                            switch (num) {
                                case 0:
                                    bombymax++;
                                    break;

                                case 4:
                                    fasttab[PlayerNumber]++;
                                    newModel.start(PlayerNumber, fasttab[PlayerNumber])
                                    break;

                                case 3:
                                    shieldtab[PlayerNumber]++;
                                    break;

                                case 1:
                                    DetonationDistance[PlayerNumber]++;
                                    break;

                                case 2:
                                    bombwalk++;
                                    break;
                            }
                            BonusBoxTab.splice(i, 1)
                            SendDestroyedBomb(i,num)
                        }
                    }
                    SendMove();
                } else {
                    SendMove();
                }
            }
        }
        if (BonusBoxTab.length > 0) {
            for (var i = 0; i < BonusBoxTab.length; i++) {
                BonusBoxTab[i].update();
            }
        }
        if (canvas) {
            var tab = []
            for (var i = 0; i < ModelMesh.length; i++) {
                tab.push([ModelMesh[i].position.x, ModelMesh[i].position.z])
            }
            canvas.update(tab,BoxTab,WoodBox)
        }
        if (newModel) {
            for (var i = 0; i < deathtab.length; i++) {
                if (deathtab[i] == 49) {
                    newModel.Death(i)
                    deathtab[i]--;
                } else if (deathtab[i] < 49 && deathtab[i] > 1) {
                    console.log(deathtab[i])
                    deathtab[i]--;
                    newModel.update()
                } else if (deathtab[i] == 1) {
                    newModel.stopanim(i)
                    scene.remove(ModelMesh[i])
                    ModelMesh[i].position.x = -600
                    ModelMesh[i].position.z = -600
                }
            }
        }
        requestAnimationFrame(animateScene);
        renderer.render(scene, camera);
        camera.updateProjectionMatrix();
    }
}