
this.BonusBox = function () {
    var geometry = new THREE.BoxGeometry(30, 30, 30);
    var BonusBox = new THREE.Mesh(geometry, Materials.MY_BMaterial);
    

    this.getBonusBox = function (x, z, mat) {
        BonusBox.position.set(x, 30, z)
        BonusBox.material = mat
        BonusBox.rotation.y += 0.01;
        var clone = BonusBox.clone()
        clone.update = function () {
            clone.rotation.y += 0.01;
        }
        return clone;
    }
}