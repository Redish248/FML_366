import * as THREE from "three";

export default class Football {
    constructor(scene, width, height) {
        let foot = this.createGround(width, height);
        foot.rotation.x -=  Math.PI / 2; // Rotate the floor 90 degrees
        foot.position.y = -40;
        foot.position.x = 3500;
        foot.position.z = -100;
        foot.receiveShadow = true;
        scene.add(foot);
    }

    createGround(width, height) {
        let textureLoader = new THREE.TextureLoader();
        let grassTexture = textureLoader.load("resources/foot.jpg");


        return new THREE.Mesh(
            new THREE.PlaneGeometry(width, height, 20,20),
            new THREE.MeshPhongMaterial({map:grassTexture})
        );
    }
}