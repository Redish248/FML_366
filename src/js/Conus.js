import * as THREE from "three";

export default class Conus {
    constructor(scene, x, y, z) {
        let conus = this.createConus()
        scene.add(conus);
        conus.position.set(x, y, z);
        conus.receiveShadow = true;
        conus.castShadow = true;
    }


    createConus() {
        let geometry = new THREE.ConeBufferGeometry( 200, 300, 32 );
        let material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        return new THREE.Mesh( geometry, material );

    }
}