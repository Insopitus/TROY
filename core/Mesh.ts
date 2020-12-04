import  BoxGeometry  from "../geometries/BoxGeometry";
import  Geometry  from "../geometries/Geometry";
import  Camera  from "./Camera";
import  readFileSync  from 'fs'
import { setIndexBuffer, setShaderProgram, setVertexBuffer } from "../utils/basic";
export default class Mesh {
  constructor(public geometry: Geometry,) {
    console.log(this.geometry)
  }
  compile(gl:WebGLRenderingContext,camera:Camera){
    const vs = readFileSync('C:/Users/jesse/Documents/GitHub/TROY/shaders/mesh.vert','utf-8')
    const fs = readFileSync('C:/Users/jesse/Documents/GitHub/TROY/shaders/mesh.frag','utf-8')
    const program = setShaderProgram(gl,vs,fs)
    const viewMatrix = camera.viewMatrix.elements
    
    const projectionMatrix = camera.projectionMatrix.elements
    //  new Float32Array([0.9284766912460327,-0.020657625049352646,0.3708157241344452,0,0,0.9984518885612488,0.05562235787510872,0,-0.3713906705379486,-0.051644064486026764,0.9270393252372742,0,5.368969158148218e-16,0,-5.393514633178711,1])
    setVertexBuffer(gl,program,'a_Position',3,this.geometry.vertices)
    // setVertexBuffer(gl,program,'a_Normal',3,this.geometry.normals)
    setIndexBuffer(gl,this.geometry.indices)
    const vmPointer = gl.getUniformLocation(program,'u_ViewMatrix')
    const pmPointer = gl.getUniformLocation(program,'u_ProjectionMatrix')
    gl.uniformMatrix4fv(vmPointer,false,viewMatrix)
    gl.uniformMatrix4fv(pmPointer,false,projectionMatrix)
    
  }

  // called by renderer, implements gl.drawArrays or gl.drawElements
  // it's supposed to be excuted every frame, so make it simple and efficient
  draw(gl: WebGLRenderingContext, camera: Camera) {  
    this.compile(gl,camera)
    const count = this.geometry.vertices.length/3
    console.log('here')
    gl.drawElements(gl.LINE_LOOP, count, gl.UNSIGNED_SHORT, 0)
    // gl.drawArrays(gl.POINTS,0,1)
  }
}