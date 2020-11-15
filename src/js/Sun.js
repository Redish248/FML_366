import * as THREE from "three";

export default class Sun {

    constructor() {
    }

    createSun(radius) {
        let textureLoader = new THREE.TextureLoader();
        let sunTexture = textureLoader.load("resources/sun.png");

        let geometry = new THREE.SphereGeometry(radius, 12, 12);
        let material = new THREE.MeshPhongMaterial({map:sunTexture});

        for(let i = 0; i < geometry.faces.length; i++) {
            geometry.faces[i].color.setRGB(Math.random(),Math.random(), Math.random());
        }
        return new THREE.Mesh(geometry, material);

    }

}