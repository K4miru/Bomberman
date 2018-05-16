function Materials() {
    
}

Materials.MY_BMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000, side: THREE.DoubleSide, wireframe: true
});

Materials.Box = []
Materials.Box.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('Box.jpg') }));
Materials.Box.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('Box.jpg') }));
Materials.Box.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('Box.jpg') }));
Materials.Box.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('Box.jpg') }));
Materials.Box.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('Box.jpg') }));
Materials.Box.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('Box.jpg') }));

Materials.BoxMaterial = new THREE.MeshFaceMaterial(Materials.Box);

Materials.WoodBox = []
Materials.WoodBox.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('WoodBox.jpg') }));
Materials.WoodBox.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('WoodBox.jpg') }));
Materials.WoodBox.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('WoodBox.jpg') }));
Materials.WoodBox.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('WoodBox.jpg') }));
Materials.WoodBox.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('WoodBox.jpg') }));
Materials.WoodBox.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('WoodBox.jpg') }));

Materials.WoodBoxMaterial = new THREE.MeshFaceMaterial(Materials.WoodBox);

Materials.Ground = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
    map: THREE.ImageUtils.loadTexture('Grass.jpg')
})

Materials.Bomb = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
    map: THREE.ImageUtils.loadTexture('Box.jpg')
})

Materials.Bomberman = []
for (var i = 1; i < 5; i++) {
    Materials.Bomberman.push(
        new THREE.MeshPhongMaterial({
            map: THREE.ImageUtils.loadTexture("Bomberman"+i+".jpg"),
            morphTargets: true,
            morphNormals: true,
            specular: 0xffffff,
            shininess: 10,
            shading: THREE.SmoothShading,
            vertexColors: THREE.FaceColors
        }))
}
Materials.BonusTab = [];

for (var i = 1; i < 6; i++) {
    Materials.Bonus = []
    Materials.Bonus.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture("bonus/"+i+".png") }));
    Materials.Bonus.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture("bonus/" + i + ".png") }));
    Materials.Bonus.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture("bonus/" + i + ".png") }));
    Materials.Bonus.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture("bonus/" + i + ".png") }));
    Materials.Bonus.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture("bonus/" + i + ".png") }));
    Materials.Bonus.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture("bonus/" + i + ".png") }));
    Materials.FaceBonus = new THREE.MeshFaceMaterial(Materials.Bonus);

    Materials.BonusTab.push(Materials.FaceBonus)
}

Materials.HelpBonus = [
    "help/bombinfo.png",
    "help/expinfo.png",
    "help/safeinfo.png",
    "help/shieldinfo.png",
    "help/runinfo.png",
    "help/movement.png"
]


