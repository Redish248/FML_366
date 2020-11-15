import * as THREE from "three";

export default class Ground {
    constructor(scene, width, height) {
        let ground = this.createGround(width, height);
        ground.rotation.x -= Math.PI / 2; // Rotate the floor 90 degrees
        ground.position.y = -50;
        ground.receiveShadow = true;
        scene.add(ground);
    }

    createGround(width, height) {
        let textureLoader = new THREE.TextureLoader();
        let grassTexture = textureLoader.load("../resources/grass.jpg");

        return new THREE.Mesh(
            new THREE.PlaneGeometry( width, height, 20,20),
            new THREE.MeshPhongMaterial({map:grassTexture})
        );
    }
}