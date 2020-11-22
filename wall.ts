import IMazeElement from "./imazeelement";

class Wall implements IMazeElement {
  private static wallCounter: number = 1;
  private wallID: number;
  constructor() { 
    // Log for debugging.
    this.wallID = Wall.wallCounter++;
    console.log("creating Wall #" + this.wallID)
  }
  public enter(): void { }
  public toString(): string {
    return "Wall #" + this.wallID;
  }
  public clone() : Wall {
    // Walls can't have anything special in them, so cloning is easy.
    return new Wall();
  }
}

export default Wall