import Maze from './maze'
import Room from './room'
import Door from './door'
import Direction from './direction';
import Wall from './wall';
import IMazeFactory from './imazefactory';

function createMaze(factory : IMazeFactory): Maze {
  // Create rooms.
  var aMaze = factory.makeMaze();
  var r1 = factory.makeRoom();
  var r2 = factory.makeRoom();
  var theDoor = factory.makeDoor(r1, r2);

  // Add rooms to maze.
  aMaze.addRoom(r1);
  aMaze.addRoom(r2);

  // Set side directions.
  r1.setSide(Direction.North, factory.makeWall());
  r1.setSide(Direction.East, theDoor);
  r1.setSide(Direction.South, factory.makeWall());
  r1.setSide(Direction.West, factory.makeWall());
  r2.setSide(Direction.North, factory.makeWall());
  r2.setSide(Direction.East, factory.makeWall());
  r2.setSide(Direction.South, factory.makeWall());
  r2.setSide(Direction.West, theDoor);
  return aMaze;
}

function createMaze2(factory : IMazeFactory) {
  let aMaze = factory.makeMaze();
  let rooms : Room[] = [];

  function makeDoorAndAddToMaze(r1: Room, r2: Room, m: Maze) {
    let door : Door = factory.makeDoor(r1, r2);
    m.addRoom(r2);
  }

  // Make 1k Rooms.
  for (let i : number = 0; i < 1000; i++) {
    rooms.push(factory.makeRoom());
  }

  // Make 1k - 1 doors.
  let lastRoom : Room = rooms.pop();
  aMaze.addRoom(lastRoom);
  for (let i : number = 0; i < 999; i++) {
    let rNow : Room = factory.makeRoom();
    makeDoorAndAddToMaze(lastRoom, rNow, aMaze);
    lastRoom = rNow;
  }

}

export default createMaze