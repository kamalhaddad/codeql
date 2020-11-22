import Room from './room'

class Maze {
  private rooms: Set<Room> = new Set<Room>();
  constructor() {
    // Log should only be invoked in error cases.
    console.log("Creating a maze (prototype version)..")
  }
  public addRoom(room: Room): void {
    if (!this.rooms.has(room)) {
      this.rooms.add(room)
    }
  }
  // should restrict to empty mazes
  public clone() : Maze {
    let maze : Maze = new Maze();
    // Shallow copy the rooms (this seems bad).
    maze.rooms = this.rooms;
    return maze;
 }
}

export default Maze