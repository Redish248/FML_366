import * as THREE from "three";

export default class Snow {

    createSnow(flakeCount) {
        let textureLoader = new THREE.TextureLoader();
        let snowTexture = textureLoader.load("resources/snow.jpg");

        let flakeGeometry = new THREE.SphereGeometry(5, 12, 12); // radius
        let flakeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, map: snowTexture });
        let snow = new THREE.Group();

        for (let i = 0; i < flakeCount; i++) {
            let flakeMesh = new THREE.Mesh(flakeGeometry, flakeMaterial);
            flakeMesh.position.set(
                -20000 + Math.random() * 30000,
                Math.random() * 30000,
                -20000 + Math.random() * 30000
            );
            snow.add(flakeMesh);
        }

        return snow;
    }
}