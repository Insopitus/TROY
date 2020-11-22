import { BoxGeometry } from "../geometries/BoxGeometry";
import { Geometry } from "../geometries/Geometry";
import { Camera } from "./Camera";
import { readFileSync } from 'fs'
export class Mesh {
  constructor(public geometry: Geometry,) {

  }


  // called by renderer, implements gl.drawArrays or gl.drawElements
  // it's supposed to be excuted every frame, so make it simple and efficient
  draw(gl: WebGLRenderingContext, camera: Camera) {
    
  }
}