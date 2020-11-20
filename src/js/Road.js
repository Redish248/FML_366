import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

export default class Road {
    constructor(scene, width, height) {
        let road = this.createRoad(width, height);
        road.rotation.x -=  Math.PI / 2; // Rotate the floor 90 degrees
        road.position.y = -45;
        road.position.x = -2400;
        road.receiveShadow = true;
        this.addCars(scene);
        scene.add(road);
    }

    createRoad(width, height) {
        let textureLoader = new THREE.TextureLoader();
        let roadTexture = textureLoader.load("../resources/tunnel_road.jpg");

        return new THREE.Mesh(
            new THREE.PlaneGeometry(width, height, 20,20),
            new THREE.MeshPhongMaterial({map:roadTexture})
        );
    }

    addCars(scene) {
        const loader = new GLTFLoader();

        loader.load( '../resources/car/scene.gltf', function ( gltf ) {
            let car = gltf.scene;
            car.position.x = -2570;
            car.position.z = 2500;
            car.position.y = 30;
            car.castShadow = true;
            car.receiveShadow = true;
            scene.add(car);
        }, undefined, function ( error ) {
            console.error( error );
        } );

        loader.load( '../resources/alfa/scene.gltf', function ( gltf ) {
            let car = gltf.scene;
            car.position.x = -2540;
            car.position.z = 4000;
            car.position.y = -80;
            car.castShadow = true;
            car.receiveShadow = true;
            car.scale.set(2500,2500, 2500);
            scene.add(car);
        }, undefined, function ( error ) {
            console.error( error );
        } );

        loader.load( '../resources/nissan/scene.gltf', function ( gltf ) {
            let car = gltf.scene;
            car.position.x = -2200;
            car.position.z = 5000;
            car.position.y = 70;
            car.rotation.y +=  Math.PI;
            car.castShadow = true;
            car.receiveShadow = true;
            car.scale.set(100,100, 100);
            scene.add(car);
        }, undefined, function ( error ) {
            console.error( error );
        } );
    }

}