import  Camera  from './Camera'
import  Color  from './Color'
import  Scene  from './Scene'
interface RendererOptions {
  canvas?: HTMLCanvasElement
  backgroundColor?: Color
}
export default class Renderer {
  domElement: HTMLCanvasElement
  context: WebGLRenderingContext
  backgroundColor = new Color(0,0,0)
  constructor(options?: RendererOptions) {
    this.domElement = options.canvas ?? document.createElement('canvas')
    const canvas = this.domElement
    canvas.height = canvas.clientHeight
    canvas.width = canvas.clientWidth    
    this.backgroundColor = options.backgroundColor ?? new Color(0,0,0)    
    const gl = this.domElement.getContext('webgl')
    this.context = gl
    gl.enable(gl.DEPTH_TEST)
    gl.viewport(0,0,this.domElement.clientWidth,this.domElement.clientHeight)
    gl.clearColor(this.backgroundColor.r, this.backgroundColor.g, this.backgroundColor.b, this.backgroundColor.a)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    
  }
  
  render(scene: Scene,camera:Camera) {
    const models = scene.models
    const lights = scene.lights
    const gl = this.context
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    for(const model of models){
      model.draw(gl,camera,scene)
    }
  }
}