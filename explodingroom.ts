import Room from "./room";
import Door from './door';

class ExplodingRoom extends Room {
  constructor(public hasBomb: boolean) {
    super();
  }
  public explode(): void { }
  public toString(): string {
    return 'ExplodingRoom #' + this.roomID + ' (hasBomb = ' + this.hasBomb + ')'
  }
}

export default ExplodingRoom