import Building from "./building";

export default class School {

    constructor(scene, z, depth,isFront) {
        this.createSchool(scene, z, depth, isFront);
    }

    createSchool(scene, z, depth, isFront) {
        new Building(scene, -150, 100, z, 400, 300, depth, isFront ? "../resources/wall.jpg" : "../resources/wall_empty.jpg")
        new Building(scene, -150 + 400, 100, z, 400, 300, depth, isFront ? "../resources/wall.jpg" : "../resources/wall_empty.jpg")
        new Building(scene, -150 + 400 + 400, 100, z, 400, 300, depth, isFront ? "../resources/wall.jpg" : "../resources/wall_empty.jpg")
        new Building(scene, -150 + 400 + 400, 100, z, 400, 300, depth, "../resources/wall.jpg")
        new Building(scene, -150 - 400, 100, z, 400, 300, depth, isFront ? "../resources/wall.jpg" : "../resources/wall_empty.jpg")
        new Building(scene, -150 - 800, 100, z, 400, 300, depth, "../resources/wall.jpg")

        new Building(scene, -150, 100, z - depth, 400, 300, depth, isFront ? "../resources/wall_empty.jpg" : "../resources/wall.jpg")
        new Building(scene, -150 + 400, 100, z - depth, 400, 300, depth, isFront ? "../resources/wall_empty.jpg" : "../resources/wall.jpg")
        new Building(scene, -150 + 400 + 400, 100, z - depth, 400, 300, depth, isFront ? "../resources/wall_empty.jpg" : "../resources/wall.jpg")
        new Building(scene, -150 + 400 + 400, 100, z - depth, 400, 300, depth, "../resources/wall.jpg")
        new Building(scene, -150 - 400, 100, z - depth, 400, 300, depth, isFront ? "../resources/wall_empty.jpg" : "../resources/wall.jpg")
        new Building(scene, -150 - 800, 100, z - depth, 400, 300, depth, "../resources/wall.jpg")

        new Building(scene, -150, 100 + 300, z, 400, 300, depth, isFront ? "../resources/wall.jpg" : "../resources/wall_empty.jpg")
        new Building(scene, -150 + 400, 100 + 300, z, 400, 300, depth, isFront ? "../resources/wall.jpg" : "../resources/wall_empty.jpg")
        new Building(scene, -150 + 400 + 400, 100 + 300, z, 400, 300, depth, isFront ? "../resources/wall.jpg" : "../resources/wall_empty.jpg")
        new Building(scene, -150 + 400 + 400, 100 + 300, z, 400, 300, depth, "../resources/wall.jpg")
        new Building(scene, -150 - 400, 100 + 300, z, 400, 300, depth, isFront ? "../resources/wall.jpg" : "../resources/wall_empty.jpg")
        new Building(scene, -150 - 800, 100 + 300, z, 400, 300, depth, "../resources/wall.jpg")

        new Building(scene, -150, 100 + 300, z - depth, 400, 300, depth, isFront ? "../resources/wall_empty.jpg" : "../resources/wall.jpg")
        new Building(scene, -150 + 400, 100 + 300, z - depth, 400, 300, depth, isFront ? "../resources/wall_empty.jpg" : "../resources/wall.jpg")
        new Building(scene, -150 + 400 + 400, 100 + 300, z - depth, 400, 300, depth, isFront ? "../resources/wall_empty.jpg" : "../resources/wall.jpg")
        new Building(scene, -150 + 400 + 400, 100 + 300, z - depth, 400, 300, depth, "../resources/wall.jpg")
        new Building(scene, -150 - 400, 100 + 300, z - depth, 400, 300, depth, isFront ? "../resources/wall_empty.jpg" : "../resources/wall.jpg")
        new Building(scene, -150 - 800, 100 + 300, z - depth, 400, 300, depth, "../resources/wall.jpg")

        new Building(scene, -150, 100 + 300 + 300, z, 400, 300, depth, isFront ? "../resources/wall.jpg" : "../resources/wall_empty.jpg")
        new Building(scene, -150 + 400, 100 + 300 + 300, z, 400, 300, depth, isFront ? "../resources/wall.jpg" : "../resources/wall_empty.jpg")
        new Building(scene, -150 + 400 + 400, 100 + 300 + 300, z, 400, 300, depth, isFront ? "../resources/wall.jpg" : "../resources/wall_empty.jpg")
        new Building(scene, -150 + 400 + 400, 100 + 300 + 300, z, 400, 300, depth, "../resources/wall.jpg")
        new Building(scene, -150 - 400, 100 + 300 + 300, z, 400, 300, depth, isFront ? "../resources/wall.jpg" : "../resources/wall_empty.jpg")
        new Building(scene, -150 - 800, 100 + 300 + 300, z, 400, 300, depth, "../resources/wall.jpg")

        new Building(scene, -150, 100 + 300 + 300, z - depth, 400, 300, depth, isFront ? "../resources/wall_empty.jpg" : "../resources/wall.jpg")
        new Building(scene, -150 + 400, 100 + 300 + 300, z - depth, 400, 300, depth, isFront ? "../resources/wall_empty.jpg" : "../resources/wall.jpg")
        new Building(scene, -150 + 400 + 400, 100 + 300 + 300, z - depth, 400, 300, depth, isFront ? "../resources/wall_empty.jpg" : "../resources/wall.jpg")
        new Building(scene, -150 + 400 + 400, 100 + 300 + 300, z - depth, 400, 300, depth, "../resources/wall.jpg")
        new Building(scene, -150 - 400, 100 + 300 + 300, z - depth, 400, 300, depth, isFront ? "../resources/wall_empty.jpg" : "../resources/wall.jpg")
        new Building(scene, -150 - 800, 100 + 300 + 300, z - depth, 400, 300, depth, "../resources/wall.jpg")

        new Building(scene, -150, 100 + 300 + 300 + 300, z, 400, 300, depth, isFront ? "../resources/wall.jpg" : "../resources/wall_empty.jpg")
        new Building(scene, -150 + 400, 100 + 300 + 300 + 300, z, 400, 300, depth, isFront ? "../resources/wall.jpg" : "../resources/wall_empty.jpg")
        new Building(scene, -150 + 400 + 400, 100 + 300 + 300 + 300, z, 400, 300, depth, isFront ? "../resources/wall.jpg" : "../resources/wall_empty.jpg")
        new Building(scene, -150 + 400 + 400, 100 + 300 + 300 + 300, z, 400, 300, depth, "../resources/wall.jpg")
        new Building(scene, -150 - 400, 100 + 300 + 300 + 300, z, 400, 300, depth, isFront ? "../resources/wall.jpg" : "../resources/wall_empty.jpg")
        new Building(scene, -150 - 800, 100 + 300 + 300 + 300, z, 400, 300, depth, "../resources/wall.jpg")

        new Building(scene, -150, 100 + 300 + 300 + 300, z - depth, 400, 300, depth, isFront ? "../resources/wall_empty.jpg" : "../resources/wall.jpg")
        new Building(scene, -150 + 400, 100 + 300 + 300 + 300, z - depth, 400, 300, depth, isFront ? "../resources/wall_empty.jpg" : "../resources/wall.jpg")
        new Building(scene, -150 + 400 + 400, 100 + 300 + 300 + 300, z - depth, 400, 300, depth, isFront ? "../resources/wall_empty.jpg" : "../resources/wall.jpg")
        new Building(scene, -150 + 400 + 400, 100 + 300 + 300 + 300, z - depth, 400, 300, depth, "../resources/wall.jpg")
        new Building(scene, -150 - 400, 100 + 300 + 300 + 300, z - depth, 400, 300, depth, isFront ? "../resources/wall_empty.jpg" : "../resources/wall.jpg")
        new Building(scene, -150 - 800, 100 + 300 + 300 + 300, z - depth, 400, 300, depth, "../resources/wall.jpg")
    }
}