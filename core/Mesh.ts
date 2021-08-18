import BoxGeometry from "../geometries/BoxGeometry";
import Geometry from "../geometries/Geometry";
import Camera from "./Camera";
//@ts-ignore
import vs from '../shaders/mesh.vs.glsl?raw'
//@ts-ignore
import fs from '../shaders/mesh.fs.glsl?raw'
import { setIndexBuffer, setShaderProgram, setVertexBuffer } from "../utils/gl";
import Scene from "./Scene";
import { DirectionalLight } from "../lights/DirectionalLight";
import AmbientLight from "../lights/AmbientLight";
import Matrix4 from "../math/Matrix4";
export default class Mesh {
  constructor(public geometry: Geometry,) {
  }
  compile(gl: WebGLRenderingContext, camera: Camera, scene: Scene) {

    const program = setShaderProgram(gl, vs, fs)
    const viewMatrix = camera.viewMatrix.elements
    const normalMatrix = new Matrix4().getInverse(camera.viewMatrix).transpose().elements
    const projectionMatrix = camera.projectionMatrix.elements
    setVertexBuffer(gl, program, 'a_Normal', 3, this.geometry.normals)
    setVertexBuffer(gl, program, 'a_Position', 3, this.geometry.vertices)
    setIndexBuffer(gl, this.geometry.indices)
    const vmPointer = gl.getUniformLocation(program, 'u_ViewMatrix')
    const pmPointer = gl.getUniformLocation(program, 'u_ProjectionMatrix')
    const nmPointer = gl.getUniformLocation(program, 'u_NormalMatrix')
    gl.uniformMatrix4fv(vmPointer, false, viewMatrix)
    gl.uniformMatrix4fv(pmPointer, false, projectionMatrix)
    gl.uniformMatrix4fv(nmPointer, false, normalMatrix)

    const lights = scene.lights
    for (let light of lights) {
      if (light instanceof DirectionalLight) {
        const directionalLightColorPointer = gl.getUniformLocation(program, 'directionalLightColor')
        gl.uniform3f(directionalLightColorPointer, light.color.r, light.color.g, light.color.b)
        const lightDirectionPointer = gl.getUniformLocation(program, 'lightDirection')
        gl.uniform3f(lightDirectionPointer, light.direction.x, light.direction.y, light.direction.z)
      }else if(light instanceof AmbientLight){
        const ambientLightColorPointer = gl.getUniformLocation(program,'ambientLightColor')
        gl.uniform3f(ambientLightColorPointer,light.color.r, light.color.g, light.color.b)
      }
    }
  }

  // called by renderer, implements gl.drawArrays or gl.drawElements
  // it's supposed to be excuted every frame, so make it simple and efficient
  draw(gl: WebGLRenderingContext, camera: Camera, scene: Scene) {
    this.compile(gl, camera, scene)
    const count = this.geometry.vertices.length / 3
    gl.drawElements(gl.TRIANGLES, count, gl.UNSIGNED_SHORT, 0)
    // gl.drawArrays(gl.POINTS,0,1)
  }
}