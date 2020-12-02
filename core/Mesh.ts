import { BoxGeometry } from "../geometries/BoxGeometry";
import { Geometry } from "../geometries/Geometry";
import { Camera } from "./Camera";
import { readFileSync } from 'fs'
import { setIndexBuffer, setShaderProgram, setVertexBuffer } from "../utils/basic";
export class Mesh {
  constructor(public geometry: Geometry,) {

  }


  // called by renderer, implements gl.drawArrays or gl.drawElements
  // it's supposed to be excuted every frame, so make it simple and efficient
  draw(gl: WebGLRenderingContext, camera: Camera) {
    const vs = readFileSync('C:/Users/jesse/Documents/GitHub/TROY/shaders/mesh.vert','utf-8')
    const fs = readFileSync('C:/Users/jesse/Documents/GitHub/TROY/shaders/mesh.frag','utf-8')
    const program = setShaderProgram(gl,vs,fs)
    const viewMatrix = camera.viewMatrix.elements
    const projectionMatrix = camera.projectionMatrix.elements
    setVertexBuffer(gl,program,'a_Position',3,this.geometry.vertices)
    // setVertexBuffer(gl,program,'a_Normal',3,this.geometry.normals)
    setIndexBuffer(gl,program,this.geometry.indices)
    const vmPointer = gl.getUniformLocation(program,'u_ViewMatrix')
    const pmPointer = gl.getUniformLocation(program,'u_ProjectionMatrix')
    gl.uniformMatrix4fv(vmPointer,false,viewMatrix)
    gl.uniformMatrix4fv(pmPointer,false,projectionMatrix)
  }
}