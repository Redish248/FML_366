import * as THREE from "three";

export default class Net {
    constructor(scene, x, y, z, width, height, depth) {
        let building = this.createNet(width, height, depth)
        scene.add(building);
        building.position.set(x, y, z);
        building.receiveShadow = true;
        building.castShadow = true;

    }


    createNet(width, height, depth) {
        let textureLoader = new THREE.TextureLoader();
        let netTexture = textureLoader.load("../resources/net.jpg");

        return new THREE.Mesh(
            new THREE.BoxGeometry(width, height, depth),
            new THREE.MeshPhongMaterial({
                color:0xffffff,
                map:netTexture,
                opacity: 0.5,
                transparent: true
            })
        );
    }

}