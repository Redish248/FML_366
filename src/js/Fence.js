import * as THREE from "three";

export default class Fence {
    constructor(scene, x, y, z, width, height, depth) {
        let fence = this.createFence(width, height, depth)
        scene.add(fence);
        fence.position.set(x, y, z);
        fence.receiveShadow = true;
        fence.castShadow = true;
    }


    createFence(width, height, depth) {
        let textureLoader = new THREE.TextureLoader();
        let fenceTexture = textureLoader.load("resources/zabor.png");

        return new THREE.Mesh(
            new THREE.BoxGeometry(width, height, depth),
            new THREE.MeshPhongMaterial({
                color:0x4f3200
                //map:fenceTexture
            })
        );
    }
}