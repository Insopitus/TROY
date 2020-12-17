import BoxGeometry from "../geometries/BoxGeometry";
import Geometry from "../geometries/Geometry";
import Camera from "./Camera";
// import { readFileSync } from 'fs'
//@ts-ignore
import vs from '../shaders/mesh.vs.glsl'
//@ts-ignore
import fs from '../shaders/mesh.fs.glsl'
import { setIndexBuffer, setShaderProgram, setVertexBuffer } from "../utils/basic";
export default class Mesh {
  constructor(public geometry: Geometry,) {
  }
  compile(gl: WebGLRenderingContext, camera: Camera) {
    const program = setShaderProgram(gl, vs, fs)
    const viewMatrix = camera.viewMatrix.elements

    const projectionMatrix = camera.projectionMatrix.elements
    setVertexBuffer(gl, program, 'a_Position', 3, this.geometry.vertices)
    // setVertexBuffer(gl,program,'a_Normal',3,this.geometry.normals)
    setIndexBuffer(gl, this.geometry.indices)
    const vmPointer = gl.getUniformLocation(program, 'u_ViewMatrix')
    const pmPointer = gl.getUniformLocation(program, 'u_ProjectionMatrix')
    gl.uniformMatrix4fv(vmPointer, false, viewMatrix)
    gl.uniformMatrix4fv(pmPointer, false, projectionMatrix)

  }

  // called by renderer, implements gl.drawArrays or gl.drawElements
  // it's supposed to be excuted every frame, so make it simple and efficient
  draw(gl: WebGLRenderingContext, camera: Camera) {
    this.compile(gl, camera)
    const count = this.geometry.vertices.length / 3
    console.log('here')
    gl.drawElements(gl.LINE_LOOP, count, gl.UNSIGNED_SHORT, 0)
    // gl.drawArrays(gl.POINTS,0,1)
  }
}