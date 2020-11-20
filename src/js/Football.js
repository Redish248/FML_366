import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

export default class Football {
    constructor(scene, width, height) {
        let foot = this.createFootballPlayground(width, height);
        foot.rotation.x -=  Math.PI / 2; // Rotate the floor 90 degrees
        foot.position.y = -40;
        foot.position.x = 3500;
        foot.position.z = -100;
        foot.receiveShadow = true;
        this.addGoal(scene);
        scene.add(foot);
    }

    createFootballPlayground(width, height) {
        let textureLoader = new THREE.TextureLoader();
        let footballTexture = textureLoader.load("../resources/foot.jpg");


        return new THREE.Mesh(
            new THREE.PlaneGeometry(width, height, 20,20),
            new THREE.MeshPhongMaterial({map:footballTexture})
        );
    }

    addGoal(scene) {
        const loader = new GLTFLoader();

        loader.load( '../resources/goal/scene.gltf', function ( gltf ) {
            let goal = gltf.scene;
            goal.position.x = 3500;
            goal.position.z = 1550;
            goal.rotation.y -=  Math.PI / 2;
            goal.position.y = -30;
            goal.castShadow = true;
            goal.receiveShadow = true;
            goal.scale.set(0.09,0.09,0.09);
            scene.add(goal);
        }, undefined, function ( error ) {
            console.error( error );
        } );

        loader.load( '../resources/goal/scene.gltf', function ( gltf ) {
            let goal = gltf.scene;
            goal.position.x = 3500;
            goal.position.z = -1750;
            goal.rotation.y +=  Math.PI / 2;
            goal.position.y = -30;
            goal.castShadow = true;
            goal.receiveShadow = true;
            goal.scale.set(0.09,0.09,0.09);
            scene.add(goal);
        }, undefined, function ( error ) {
            console.error( error );
        } );
    }
}