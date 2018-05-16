
function Kamera(camera, player) {
    var camVect = new THREE.Vector3(0, 0, 0);
    var camPos;
    this.update = function () {
        camVect = new THREE.Vector3(0, 500, 0);
        camera.updateProjectionMatrix();
        //camVect2 = new THREE.Vector3(0, 40, 90);
        //var camPos2 = camVect2.applyMatrix4(player.matrixWorld);
        //camera.updateProjectionMatrix();
        //camera.lookAt(new THREE.Vector3(camPos2.x, camPos2.y, camPos2.z))
        camera.lookAt(0,0,0)
    }
    camPos = camVect.applyMatrix4(player.matrixWorld);

    camera.position.set(camPos.x, camPos.y, camPos.z);
}

