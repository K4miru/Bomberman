
this.ExplosionMesh = function () {
    var geometry = new THREE.SphereGeometry(30, 30, 300);
    var ExplosionMesh = new THREE.Mesh(geometry, Materials.MY_BMaterial);

    this.getExplosionMesh = function (x, z) {
        ExplosionMesh.position.y = 0;
        ExplosionMesh.position.x = x;
        ExplosionMesh.position.z = z;
        var clone = ExplosionMesh.clone()
        clone.zmienna = 50;
        return clone;
    }
}