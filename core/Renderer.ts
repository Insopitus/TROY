import { Camera } from './Camera'
import { Color } from './Color'
import { Scene } from './Scene'
interface RendererOptions {
  canvas?: HTMLCanvasElement
  backgroundColor?: Color
}
export class Renderer {
  domElement: HTMLCanvasElement
  context: WebGLRenderingContext
  backgroundColor = new Color()
  constructor(options?: RendererOptions) {
    this.domElement = options.canvas ?? document.createElement('canvas')
    this.backgroundColor = options.backgroundColor ?? new Color()
    const gl = this.domElement.getContext('webgl2')
    this.context = gl
    gl.clearColor(this.backgroundColor.r, this.backgroundColor.g, this.backgroundColor.b, this.backgroundColor.a)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
  }
  render(scene: Scene,camera:Camera) {
    const models = scene.models
    for(let i=0,l=models.length;i<l;i++){
      
    }
  }
}