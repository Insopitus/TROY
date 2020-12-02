export function setShaderProgram(gl: WebGLRenderingContext, vs: string, fs: string) {
  const program = gl.createProgram()
  const vert = getShader(gl, vs, 'vert')
  const frag = getShader(gl, fs, 'frag')
  gl.attachShader(program, vert)
  gl.attachShader(program, frag)
  gl.linkProgram(program)
  const status = gl.getProgramParameter(program, gl.LINK_STATUS)
  if (!status) {
    console.error(gl.getProgramInfoLog(program))
  }
  gl.useProgram(program)
  return program

  function getShader(gl: WebGLRenderingContext, shaderStr: string, type: 'frag' | 'vert') {
    let shader: WebGLShader
    if (type === 'vert') shader = gl.createShader(gl.VERTEX_SHADER)
    else shader = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(shader, shaderStr)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      return null;
    }
    return shader
  }
}
export function setVertexBuffer(gl: WebGLRenderingContext, program: WebGLProgram, name: string, size: number, data: Float32Array) {
  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW)
  const variable = gl.getAttribLocation(program, name)
  if(variable===-1) {
    console.error(`cannot find ${name}`)
  }
  const FLOAT_SIZE = data.BYTES_PER_ELEMENT
  gl.vertexAttribPointer(variable, size, gl.FLOAT, false, 0, 0)
  gl.enableVertexAttribArray(variable)
}
export function setIndexBuffer(gl:WebGLRenderingContext,program:WebGLProgram,data:Uint8Array){
  const indicesBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,indicesBuffer)
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,data,gl.STATIC_DRAW)
  // return data.length
}