import * as THREE from "three";

export default class Road {
    constructor(scene, width, height) {
        let road = this.createGround(width, height);
        road.rotation.x -=  Math.PI / 2; // Rotate the floor 90 degrees
        road.position.y = -45;
        road.position.x = -2200;
        road.receiveShadow = true;
        scene.add(road);
    }

    createGround(width, height) {
        let textureLoader = new THREE.TextureLoader();
        let grassTexture = textureLoader.load("resources/tunnel_road.jpg");

        return new THREE.Mesh(
            new THREE.PlaneGeometry(width, height, 20,20),
            new THREE.MeshPhongMaterial({map:grassTexture})
        );
    }
}