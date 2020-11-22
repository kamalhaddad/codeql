import IMazeFactory from "./imazefactory";
import Maze from "./maze";
import Room from "./room";
import Door from "./door";
import Wall from "./wall";

class MazePrototypeFactory implements IMazeFactory {
  constructor(private prototypeMaze: Maze, 
              private prototypeWall: Wall, 
              private prototypeRoom: Room, 
              private prototypeDoor: Door){
  }
  public makeMaze() : Maze { return this.prototypeMaze.clone(); }
  public makeRoom() : Room { return this.prototypeRoom.clone(); }
  public makeWall() : Wall { return this.prototypeWall.clone(); }
  public makeDoor(r1: Room, r2: Room) : Door {
    // Create door between two rooms, r1 and r2, and initialize
    // it with a connection between them.
    var door: Door = this.prototypeDoor.clone();
    door.initialize(r1, r2);
    return door;
  }
}

export default MazePrototypeFactory;