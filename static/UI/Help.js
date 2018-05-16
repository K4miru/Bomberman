this.Help = function (num) {
    var canvas, context;
    canvas = document.createElement("canvas");
    canvas.width = 325
    canvas.height = 175
    canvas.style.position = "absolute";
    canvas.style.left = "0";
    canvas.style.top = "0";
    canvas.style.background = "rgba(128, 128, 128, 0.3)";
    context = canvas.getContext("2d");
    document.getElementById("div").appendChild(canvas);
    var bonushelp = new Image();
    bonushelp.src = "help/movement.png"
    bonushelp.onload = function () {
        context.drawImage(bonushelp, 0, 0, 325, 175)
    }
    /*
    var arrow =[];
    for (var i = 0; i < num; i++) {
        arrow.push(new Image());
        arrow[i].src = "arrow"+i+".png"
    }*/
    
    var canvastab = [], contexttab = []


    for (var i = 0; i < num; i++) {
        canvastab.push(document.createElement("canvas"));
        canvastab[i].width = 210
        canvastab[i].height = 210
        canvastab[i].style.position = "absolute";
        canvastab[i].style.right = "0";
        canvastab[i].style.top = "0";
        //canvastab[i].style.background = "rgba(128, 128, 128, 0.3)";
        contexttab[i] = canvastab[i].getContext("2d");
        document.getElementById("div").appendChild(canvastab[i]);
        /*
        arrow[i].src = "arrow"+i+".png"
        arrow[i].loadthis = function () {
            contexttab[i].drawImage(arrow[i], 100, 0,50,50)
        }
        arrow[i].loadthis()
        */
    }

    this.putImage = function (img) {
        console.log(img)
        bonushelp.src = ""+img+"";
        context.drawImage(bonushelp, 0, 0, 325, 175)
        context.restore()
    }
    var zmienna = [0, 0, 0, 0];
    var kolortab=["red","blue","green","yellow"]
    this.update = function (pos,box,wood) {
        for (var i = 0; i < num; i++) {
            //zmienna[i] += pos[i];
            
            contexttab[i].clearRect(0, 0, 250, 250);
            contexttab[i].fillStyle = "" + kolortab[i]+ "";
            contexttab[i].fillRect((pos[i][0] + 350) / 4 + 10, (pos[i][1] + 350) / 4 + 10, 5, 5);
            contexttab[i].fillStyle = "black";
            for (var j = 0; j < box.length; j++) {
                contexttab[i].fillRect((box[j].position.x + 350) / 4+10, (box[j].position.z + 350) / 4+10, 5, 5);
            }
            contexttab[i].fillStyle = "brown";
            for (var j = 0; j < wood.length; j++) {
                contexttab[i].fillRect((wood[j].position.x + 350) / 4+10, (wood[j].position.z + 350) / 4+10, 5, 5);
            }
            contexttab[i].save()
            contexttab[i].translate(100, 100)
            contexttab[i].rotate(zmienna[i])
            contexttab[i].translate(-100, -100)/*
            arrow[i].src = "arrow"+i+".png"
            arrow[i].loadthis = function () {
                contexttab[i].drawImage(arrow[i], 100, 50, 50, 50)
            }
            arrow[i].loadthis()*/
            contexttab[i].restore()
        }
    }
}