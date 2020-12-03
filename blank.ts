
import { setShaderProgram, setVertexBuffer, setIndexBuffer } from './utils/basic'

const canvas = document.getElementById('container') as HTMLCanvasElement
const gl = canvas.getContext('webgl')
canvas.height= canvas.clientHeight
canvas.width=canvas.clientWidth

// gl.enable(gl.DEPTH_TEST)
gl.viewport(0, 0, canvas.clientWidth, canvas.clientHeight)
gl.clearColor(0, 0, 0, 1)
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

const vs = `
void main(){
    gl_Position=vec4(0.5,-0.5,0.0,1.0);
    gl_PointSize = 7.0;
}
`
const fs = `
precision mediump float;
void main(){
  gl_FragColor = vec4(1.0);
}
`
const program = setShaderProgram(gl, vs, fs)
// const viewMatrix = camera.viewMatrix.elements
// const projectionMatrix = new Float32Array([2.1445069313049316, 0, 0, 0, 0, 2.1445069313049316, 0, 0, 0, 0, -1.000100016593933, -1, 0, 0, -0.2000100016593933, 0])
// // const projectionMatrix = camera.projectionMatrix.elements
// const viewMatrix = new Float32Array([0.9284766912460327, -0.020657625049352646, 0.3708157241344452, 0, 0, 0.9984518885612488, 0.05562235787510872, 0, -0.3713906705379486, -0.051644064486026764, 0.9270393252372742, 0, 5.368969158148218e-16, 0, -5.393514633178711, 1])
// setVertexBuffer(gl, program, 'a_Position', 3, new Float32Array([0, 0, 0]))
// setVertexBuffer(gl,program,'a_Normal',3,this.geometry.normals)
// setIndexBuffer(gl, new Uint16Array([0]))
// const vmPointer = gl.getUniformLocation(program, 'u_ViewMatrix')
// const pmPointer = gl.getUniformLocation(program, 'u_ProjectionMatrix')
// gl.uniformMatrix4fv(vmPointer, false, viewMatrix)
// gl.uniformMatrix4fv(pmPointer, false, projectionMatrix)
gl.drawArrays(gl.POINTS,0,1)