export default class Vector3{
  constructor(public x?:number,public y?:number,public z?:number){
    this.x = x ?? 0.0
    this.y = y ?? 0.0
    this.z = z ?? 0.0
  }
  length(){
    return Math.sqrt(this.x**2+this.y**2+this.z**2)
  }
  set(x:number,y:number,z:number){
    this.x = x
    this.y = y
    this.z = z
    return this
  }
}