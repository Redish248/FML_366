import * as THREE from "three";

export default class Building {
    constructor(scene, x, y, z, width, height, depth, texture) {
        let building = this.createBuilding(width, height, depth, texture)
        scene.add(building);
        building.position.set(x, y, z);
        building.receiveShadow = true;
        building.castShadow = true;
    }


    createBuilding(width, height, depth, texture) {
        let textureLoader = new THREE.TextureLoader();
        let buildingTexture = textureLoader.load(texture);

        return new THREE.Mesh(
            new THREE.BoxGeometry(width, height, depth),
            new THREE.MeshPhongMaterial({
                color:0xffffff,
                map:buildingTexture
            })
        );
    }
}