
this.Box = function () {
    var geometry = new THREE.BoxGeometry(50, 50, 50);
    var Box = new THREE.Mesh(geometry, Materials.MY_BMaterial);
	
	
	this.getBox = function (x, z, mat) {
	    Box.position.set(x, 25, z)
        Box.material = mat
		return Box.clone();
	}
}