import {WEBGL} from "three/examples/jsm/WebGL.js";
import * as THREE from 'three';
import Sun from "./js/Sun";
import Ground from "./js/Ground";
import School from "./js/School";
import Road from "./js/Road";
import Volleyball from "./js/Volleyball";
import Football from "./js/Football";
import Building from "./js/building";
import Fence from "./js/Fence";
import Ball from "./js/Ball";
import Net from "./js/Net";
import Conus from "./js/Conus";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Snow from "./js/Snow";

function component() {
    const element = document.createElement('canvas');
    element.id = 'canvas';
    return element;
}
document.body.appendChild(component());

let scene, renderer, camera;
let keyboard = {};
let sun, ballFootball, ballVolleyball;
let flakeArray, snow;
let flakeCount = 100000;
let player = { height:1.8, speed:7, turnSpeed:Math.PI*0.02 };

function init() {
    let width = window.innerWidth;
    let height  = window.innerHeight;
    let canvas = document.getElementById('canvas');

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setClearColor(0xbefff2);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicShadowMap;
    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 20000);
    camera.position.set(0,1000,5000);


    /*
    ==================================
    Elements
    ==================================
     */

    sun = new Sun().createSun(120);
    sun.position.y = 3000;
    sun.position.x = 3000;
    sun.receiveShadow = true;
    sun.castShadow = true;
    scene.add(sun);

    new Ground(scene, 15000, 15000);
    new Road(scene, 800,15000);
    new Volleyball(scene, 3800, 2500);
    new Football(scene, 2500, 3500);

    new School(scene, -150, 600, false);
    new School(scene, 2000, 600, true);
    new Building(scene, 250, 600, 650, 300, 600, 1000, "../resources/wall_empty.jpg");
    new Building(scene, -550, 600, 650, 300, 600, 1000, "../resources/wall_empty.jpg");

    new Building(scene, -150, 1170, 1700, 2100, 50,1300,"../resources/root.png");
    new Building(scene, -150, 1170, -450, 2100, 50,1300,"../resources/root.png");

    new Building(scene,-150, 90, 2310, 210, 280, 20, "../resources/door.png");

    /*snow = new Snow().createSnow(flakeCount);
    scene.add(snow);

    flakeArray = snow.children;*/

    new Fence(scene,-1800,-35, -500, 30, 300, 8300);
    new Fence(scene,4900,-35, -500, 30, 300, 8300);
    new Fence(scene,1550,-35, -4650, 6700, 300, 30);
    new Fence(scene,2700,-35, 3650, 4400, 300, 30);

    new Net(scene, 200, 370, -3000, 20, 350, 1800);

    new Conus(scene, 1500,100, 3000)


    ballFootball = new Ball().createBall(30, true);
    ballFootball.position.x = 4000;
    ballFootball.position.y = 0;
    ballFootball.position.z = 1000;
    ballFootball.receiveShadow = true;
    ballFootball.castShadow = true;
    scene.add(ballFootball);

    ballVolleyball = new Ball().createBall(30, false);
    ballVolleyball.position.x = 1300;
    ballVolleyball.position.y = 0;
    ballVolleyball.position.z = -2500;
    ballVolleyball.receiveShadow = true;
    ballVolleyball.castShadow = true;
    scene.add(ballVolleyball);

    /*
    ==================================
    Elements end
    ==================================
     */

    //Create a SpotLight and turn on shadows for the light
    const light = new THREE.SpotLight( 0xffffff );
    light.castShadow = true; // default false
    light.position.set(3700, 4000, 3000)
    //Set up shadow properties for the light
    light.shadow.mapSize.width = 10000;
    light.shadow.mapSize.height = 10000;
    light.shadow.camera.near = 100;
    light.shadow.camera.far = 10000;
    //light.shadow.focus = 1;
    scene.add( light );

    let ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    animate(0.1, 0.1);

}

function animate(runFoot, runVoll) {
    sun.rotation.y += Math.PI / 500;
    ballFootball.rotation.z += Math.PI / 500;
    ballFootball.position.z -= runFoot;
    ballVolleyball.rotation.z += Math.PI / 500;
    ballVolleyball.position.x -= runVoll;

    if (ballFootball.position.z === -1000) {
        runFoot = 0.1;
    }
    if (ballFootball.position.z === 1000) {
        runFoot = -0.1;
    }

    if (ballVolleyball.position.x === -1300) {
        runVoll = 0.1;
    }
    if (ballVolleyball.position.x === 1300) {
        runVoll = -0.1;
    }


  /*  for (let i = 0; i < flakeArray.length / 2; i++) {
        flakeArray[i].rotation.y += 0.01;
        flakeArray[i].rotation.x += 0.02;
        flakeArray[i].rotation.z += 0.03;
        flakeArray[i].position.y -= 0.018;
        if (flakeArray[i].position.y < -4) {
            flakeArray[i].position.y += 10;
        }
    }
    for (let i = flakeArray.length / 2; i < flakeArray.length; i++) {
        flakeArray[i].rotation.y -= 0.03;
        flakeArray[i].rotation.x -= 0.03;
        flakeArray[i].rotation.z -= 0.02;
        flakeArray[i].position.y -= 0.016;
        if (flakeArray[i].position.y < -4) {
            flakeArray[i].position.y += 9.5;
        }

        snow.rotation.y -= 0.0000002;
    } */



    if(keyboard[83]){ // S key
        camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
        camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
    }
    if(keyboard[87]){ // W key
        camera.position.x += Math.sin(camera.rotation.y) * player.speed;
        camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
    }
    if(keyboard[68]){ // D key
        // Redirect motion by 90 degrees
        camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed;
        camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2) * player.speed;
    }
    if(keyboard[65]){ // A key
        camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed;
        camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2) * player.speed;
    }

    // Keyboard turn inputs
    if(keyboard[39]){ // left arrow key
        camera.rotation.y -= 0.005;
    }
    if(keyboard[37]){ // right arrow key
        camera.rotation.y += 0.005;
    }

    // Keyboard turn inputs
    if(keyboard[40]){ // up arrow key
        camera.position.y -= 5;
    }
    if(keyboard[38]){ // down arrow key
        camera.position.y += 5;
    }

    if(keyboard[98]){ // 5 key
        camera.rotation.x -= 0.005;
    }
    if(keyboard[101]){ // 2 key
        camera.rotation.x += 0.005;
    }

    renderer.render(scene, camera);
    requestAnimationFrame(function() {animate(runFoot, runVoll)})
}

function keyDown(event){
    keyboard[event.keyCode] = true;
}

function keyUp(event){
    keyboard[event.keyCode] = false;
}

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

if (WEBGL.isWebGLAvailable()) {
    window.omload = init();
} else {
    let warning = WEBGL.getWebGLErrorMessage();
    document.body.appendChild(warning);
}