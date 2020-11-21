// elements are stored in column major
export class Matrix4{
  elements:Float32Array
  constructor(){
    this.elements = new Float32Array([
      1,0,0,0,
      0,1,0,0,
      0,0,1,0,
      0,0,0,1
    ])
  }
  set(elements:number[]){
    this.elements = new Float32Array(elements)
  }
}