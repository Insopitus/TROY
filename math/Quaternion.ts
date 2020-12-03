export default class Quaternion {
  constructor(public x: number, public y: number, public z: number, public w: number) {
    this.x = x ?? 0.0
    this.y = y ?? 0.0
    this.z = z ?? 0.0
    this.w = w ?? 0.0
  }
}