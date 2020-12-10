import { timeStamp } from "console"

export default class Vector3 {
  constructor(public x?: number, public y?: number, public z?: number) {
    this.x = x ?? 0.0
    this.y = y ?? 0.0
    this.z = z ?? 0.0
  }
  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2)
  }
  squareLength() {
    return this.x ** 2 + this.y ** 2 + this.z ** 2
  }
  set(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
    return this
  }
  copy(vec: Vector3) {
    this.x = vec.x
    this.y = vec.y
    this.z = vec.z
    return this
  }
  clone() {
    return new Vector3(this.x, this.y, this.z)
  }
  add(vec: Vector3) {
    this.x += vec.x
    this.y += vec.y
    this.z += vec.z
    return this
  }
  sub(vec: Vector3) {
    this.x -= vec.x
    this.y -= vec.y
    this.z -= vec.z
    return this
  }
  dot(vec: Vector3) {
    return this.x * vec.x + this.y + vec.y + this.z * vec.z
  }
  cross(vec:Vector3){}
  multiplyScalar(n:number){
    this.x*=n
    this.y*=n
    this.z*=n
    return this
  }
}