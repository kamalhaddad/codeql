import Room from "./room";
import Wall from "./wall";
import Door from "./door";
import Maze from "./maze";

interface IMazeFactory {
  makeMaze(): Maze
  makeRoom(): Room
  makeWall(): Wall
  makeDoor(room1: Room, room2: Room): Door
}

export default IMazeFactory