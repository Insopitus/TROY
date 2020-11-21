export class Color{
  constructor(public r?:number,public g?:number,public b?:number,public a?:number){
    this.r = r ?? 0.0
    this.g = g ?? 0.0
    this.b = b ?? 0.0
    this.a = a ?? 1.0
  }
}