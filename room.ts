import Direction from "./direction";
import IMazeElement from "./imazeelement";
import Wall from './wall';
import Door from './door';

class Room implements IMazeElement {
  private static roomCounter: number = 1;
  protected roomID: number;
  private northSide: IMazeElement;
  private southSide: IMazeElement;
  private eastSide: IMazeElement;
  private westSide: IMazeElement;

  constructor() { 
    // Log for debugging.
    this.roomID = Room.roomCounter++;
    console.log("creating Room #" + this.roomID)
  }
  enter(): void { }
  public setSide(d: Direction, site: IMazeElement) {
    switch (d) {
      case Direction.North:
        this.northSide = site;
        break;
      case Direction.South:
        this.southSide = site;
        break;
      case Direction.East:
        this.eastSide = site;
        break
      case Direction.West:
        this.westSide = site;
    }
    console.log("setting " + d + 
                " side of " +
                this.toString() + 
                " to " + 
                site.toString());
  }

  public getSide(d: Direction): IMazeElement {
    // Get side based on specified Direction enum.
    switch (d) {
      case Direction.North:
        return this.northSide;
      case Direction.South:
        return this.southSide;
      case Direction.East:
        return this.eastSide;
      case Direction.West:
        return this.westSide;
    }
  }
  public toString(): string {
    return "Room #" + this.roomID;
  }
  public clone() : Room {
    // Shallow clone.
    let room = new Room();
    room.northSide = this.northSide;
    room.southSide = this.southSide;
    room.eastSide = this.eastSide;
    room.westSide = this.westSide;
    return room;
  }
}

export default Room