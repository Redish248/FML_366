import * as THREE from "three";

export default class Ball {

    createBall(radius, isFootball) {
        let textureLoader = new THREE.TextureLoader();
        let ballTexture = textureLoader.load(isFootball? "resources/ball_football.jpg" : "resources/ball_volleyball.jpg");

        let geometry = new THREE.SphereGeometry(radius, 12, 12);

        for(let i = 0; i < geometry.faces.length; i++) {
            geometry.faces[i].color.setRGB(Math.random(),Math.random(), Math.random());
        }
        return new THREE.Mesh(
            geometry,
            new THREE.MeshPhongMaterial({map:ballTexture})
        );

    }

}