
this.Bomba = function () {
    var geometry = new THREE.SphereGeometry(10, 10, 10);
    var singleMesh = new THREE.Mesh(geometry, Materials.Bomb);
    

    this.getBomba = function (x, z) {
        singleMesh.position.y = 30;
        singleMesh.position.x = x;
        singleMesh.position.z = z;
        return singleMesh.clone();
    }
}