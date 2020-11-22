export function initShader(gl:WebGLRenderingContext,vs:string,fs:string){
  const program = gl.createProgram()
  const vertShader = gl.createShader(gl.VERTEX_SHADER)
  gl.compileShader(vertShader)
  gl.linkProgram(program)
}