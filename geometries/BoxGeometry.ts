import Geometry from "./Geometry"

export default class BoxGeometry extends Geometry {
  vertices: Float32Array
  indices: Uint16Array
  normals: Float32Array
  uv: Float32Array
  constructor(public width: number, public height: number, public depth: number) {
    super()
    const w = width/2
    const d = depth/2
    const h = height/2
    // this.vertices = new Float32Array([
    //   w,h,-d, -w,h,-d, -w,h,d,  -w,h,d, w,h,d, w,h,-d,   // top side
    //   w,-h,-d, -w,-h,-d, -w,-h,d, -w,-h,d, w,-h,d, // bottom side
    //   -w, h, d, -w, h, -d, w, h, d, -w, h, -d, -w, h, -d, w, h, d, //front side
    //   w, -h, d, -w, -h, d, w, -h, d, w, -h, d, w, -h, -d, w, -h, d, // back
    //   -w, h, d, -w, -h, d, w, -h, d, -w, h, -d, -w, h, d, w, -h, d, // left
    //   w, -h, d, w, h, d, -w, h, -d, w, -h, d, -w, h, -d, w, -h, -d, //right
    // ])
    this.vertices = new Float32Array([
      w,h,-d, -w,h,-d, -w,h,d,  -w,h,d, w,h,d, w,h,-d, //top
      -w,h,d,-w,h,-d,-w,-h,-d, -w,-h,-d,-w,-h,d,-w,h,d,//left
      -w,-h,-d,w,-h,-d, w,-h,d,w,-h,d,-w,-h,d,-w,-h,-d, //bottom
      w,-h,d,w,h,d,-w,h,d,-w,h,d,-w,-h,d,w,-h,d, //front
      w,h,-d,w,h,d,w,-h,d, w,-h,d,w,-h,-d,w,h,-d,//right
     -w,-h,-d,-w,h,-d,w,h,-d,w,h,-d,w,-h,-d,-w,-h,-d,//back
    ])
    this.normals = new Float32Array([
      0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
      0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
      0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
      0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
      -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
      1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    ])
    const indicesArray = []
    for (let i = 0; i < 36; i++) {
      indicesArray.push(i)
    }
    this.indices = new Uint16Array(indicesArray)
  }
}








/*
0: w/2,-d/2,h/2,
1: -w/2,-d/2,h/2,
2: -w/2,d/2,h/2,
3: w/2,d/2,h/2,
4: w/2,-d/2,h/2,
5: -w/2,d/2,-h/2,
6: -w/2,d/2,-h/2,
7: w/2,-d/2,-h/2,



*/