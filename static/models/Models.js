
this.Model = function (Number) {
    var CloneTab = [];
    var container = []
    for (var i = 0; i <= Number; i++)
        container.push(new THREE.Object3D());
    var tablica = []
    var ModelMesh;
    var loader = new THREE.JSONLoader();
    this.ModelLoad = function () {
        loader.load('BombermanModel.js', function (geometry, mat) {
            geometry.computeMorphNormals();
            mat = Materials.Bomberman[0]
            ModelMesh = new THREE.MorphAnimMesh(geometry, mat);
            ModelMesh.name = "Bomberman";

            ModelMesh.scale.set(1, 1, 1);
            ModelMesh.parseAnimations();

            for (var key in ModelMesh.geometry.animations) {
                if (key === 'length' || !ModelMesh.geometry.animations.hasOwnProperty(key)) continue;
                tablica.push(key);
                console.log(key)
            }
            
            //ModelMesh.playAnimation(tablica[0], 5);
            
            for (var i = 0; i <= Number; i++) {
                CloneTab.push(ModelMesh.clone())
                CloneTab[i].playAnimation(tablica[0], 0);
            }
            for (var i = 0; i <= Number; i++) {
                
                container[i].add(CloneTab[i])
                container[i].position.y = 0;
                switch (i) {
                    case 0:
                        CloneTab[i].material = Materials.Bomberman[i]
                        container[i].position.x = -300;
                        container[i].position.z = -300;
                        break;

                    case 1:
                        CloneTab[i].material = Materials.Bomberman[i]
                        container[i].position.x = 300;
                        container[i].position.z = 300;
                        break;

                    case 2:
                        CloneTab[i].material = Materials.Bomberman[i]
                        container[i].position.x = 300;
                        container[i].position.z = -300;
                        break;

                    case 3:
                        CloneTab[i].material = Materials.Bomberman[i]
                        container[i].position.x = -300;
                        container[i].position.z = 300;
                        break;
                }
            }
            /*for (var i = 0; i< tablica.length;i++)
                tab.push(tablica[i])*/
            //Mesh(ModelMesh)

            
        });
    }


    this.getModel = function (num) {
        return container[num];
    }

    this.start = function (num, fx) {
        CloneTab[num].playAnimation(tablica[0], 5 + fx);
    }

    this.stopanim = function (num) {
        CloneTab[num].playAnimation(tablica[0], 0);
    }

	this.update = function () {
	    var delta = clock.getDelta();
	    if (CloneTab.length > 0)
	        for (var i = 0; i <= Number; i++) {
	            CloneTab[i].updateAnimation(delta * 1000);
	        }
	}
	
	this.move = function (num,fx) {
	    if (CloneTab.length > 0) {
	        container[num].translateX(-fx)
	    }
	}
	/*
	this.back = function (num) {
	    if (CloneTab.length > 0) {
	        container[num].translateX(2)
	    }
	}

	this.MoveBack = function (num,posZ) {
	    if (CloneTab.length > 0) {
	        container[num].translateZ(posZ)
	    }
	}*/

	this.Death = function (num) {
	    if (CloneTab.length > 0) {
	        CloneTab[num].playAnimation(tablica[3], 5);
	    }
	}
}
