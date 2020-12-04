import  Camera  from './core/Camera'
import  Color  from './core/Color'
import  Mesh  from './core/Mesh'
import Renderer from './core/Renderer'
import  Scene  from './core/Scene'
import  BoxGeometry  from './geometries/BoxGeometry'
import Geometry from './geometries/Geometry'
const canvas = document.getElementById('container') as HTMLCanvasElement
const renderer = new Renderer({canvas})
const box = new BoxGeometry(1,1,1)
const geometry = new Geometry()
geometry.vertices = new Float32Array([0.5,0.5,0,0.5,-0.5,0,-0.5,-0.5,0])
geometry.indices = new Uint16Array([1,2,3])
const scene = new Scene()
scene.addMesh(new Mesh(box))
const camera = new Camera(Math.PI/4,canvas.width/canvas.height,1,1000)
camera.position.set(0.2,0,2)
camera.updateMatrix()
console.log(camera.projectionMatrix)
console.log(camera.viewMatrix)

console.log(camera)

renderer.render(scene,camera)
// function render(){
//     requestAnimationFrame(render)
// }
// requestAnimationFrame(render)