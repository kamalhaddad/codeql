import Room from "./room";
import IMazeElement from "./imazeelement";

class Door implements IMazeElement {
  private static doorCounter: number = 1;
  private doorID: number;
  constructor(private room1: Room, private room2: Room) { 
    this.doorID = Door.doorCounter++;
    // Log for debug purposes.
    console.log("creating Door #" + this.doorID + " between " + 
                room1 + " and " + room2);
  }
  enter(): void { }
  public toString(): string {
    return "Door #" + this.doorID;
  }
  public clone() : Door {
    return new Door(this.room1, this.room2);
  }
  public initialize(r1: Room, r2: Room): void {
    // Make two rooms, log them.
    this.room1 = r1;
    this.room2 = r2;
    console.log("initializing Door#" + 
                this.doorID + " between " + 
                r1 + " and " + r2);
  }
}

export default Door