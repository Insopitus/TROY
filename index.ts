import { Certificate } from 'crypto'
import  Camera  from './core/Camera'
import  Color  from './core/Color'
import  Mesh  from './core/Mesh'
import Renderer from './core/Renderer'
import  Scene  from './core/Scene'
import  BoxGeometry  from './geometries/BoxGeometry'
import Geometry from './geometries/Geometry'
import AmbientLight from './lights/AmbientLight'
import { DirectionalLight } from './lights/DirectionalLight'
import Vector3 from './math/Vector3'
const canvas = document.getElementById('container') as HTMLCanvasElement
const renderer = new Renderer({canvas})
const box = new BoxGeometry(1,1,1)
const geometry = new Geometry()
geometry.vertices = new Float32Array([0.5,0.5,0,0.5,-0.5,0,-0.5,-0.5,0])
geometry.indices = new Uint16Array([1,2,3])
const scene = new Scene()
scene.addMesh(new Mesh(box))
const camera = new Camera(Math.PI/4,canvas.width/canvas.height,1,1000)
const directionalLight = new DirectionalLight(0xffffff,new Vector3(-1,-1,-1))
const ambientLight = new AmbientLight(new Color(1,1,1,.2))
scene.addLight(directionalLight,ambientLight)

camera.position.set(0,1,3)
camera.updateMatrix()



renderer.render(scene,camera)
// function render(){
//     requestAnimationFrame(render)
// }
// requestAnimationFrame(render)