import * as THREE from "three";

export default class Volleyball {
    constructor(scene, width, height) {
        let voll = this.createVolleyballPlayground(width, height);
        voll.rotation.x -=  Math.PI / 2; // Rotate the floor 90 degrees
        voll.position.y = -40;
        voll.position.x = 200;
        voll.position.z = -3000;
        voll.receiveShadow = true;
        scene.add(voll);
    }

    createVolleyballPlayground(width, height) {
        let textureLoader = new THREE.TextureLoader();
        let volleyballTexture = textureLoader.load("../resources/court.jpg");

        return new THREE.Mesh(
            new THREE.PlaneGeometry(width, height, 20,20),
            new THREE.MeshPhongMaterial({map:volleyballTexture})
        );
    }
}