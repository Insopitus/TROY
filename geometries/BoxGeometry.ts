import { Geometry } from "./Geometry"

export class BoxGeometry extends Geometry {
  vertices: Float32Array
  indices: Uint16Array
  normals: Float32Array
  uv: Float32Array
  constructor(public width: number, public height: number, public depth: number) {
    super()
    const w = width
    const d = depth
    const h = height
    this.vertices = new Float32Array([
      w / 2, -d / 2, h / 2, -w / 2, -d / 2, h / 2, -w / 2, -d / 2, h / 2, -w / 2, d / 2, h / 2, w / 2, d / 2, h / 2, w / 2, -d / 2, h / 2,   // top side
      -w / 2, d / 2, -h / 2, w / 2, -d / 2, -h / 2, w / 2, -d / 2, -h / 2, w / 2, d / 2, -h / 2, -w / 2, d / 2, -h / 2, w / 2, -d / 2, -h / 2, // bottom side
      -w / 2, d / 2, h / 2, -w / 2, d / 2, -h / 2, w / 2, d / 2, h / 2, -w / 2, d / 2, -h / 2, -w / 2, d / 2, -h / 2, w / 2, d / 2, h / 2, //front side
      w / 2, -d / 2, h / 2, -w / 2, -d / 2, h / 2, w / 2, -d / 2, h / 2, w / 2, -d / 2, h / 2, w / 2, -d / 2, -h / 2, w / 2, -d / 2, h / 2, // back
      -w / 2, d / 2, h / 2, -w / 2, -d / 2, h / 2, w / 2, -d / 2, h / 2, -w / 2, d / 2, -h / 2, -w / 2, d / 2, h / 2, w / 2, -d / 2, h / 2, // left
      w / 2, -d / 2, h / 2, w / 2, d / 2, h / 2, -w / 2, d / 2, -h / 2, w / 2, -d / 2, h / 2, -w / 2, d / 2, -h / 2, w / 2, -d / 2, -h / 2, //right
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
    for(let i=0;i<36;i++){
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