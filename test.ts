import { Camera } from './core/Camera'
import { Color } from './core/Color'
import { Mesh } from './core/Mesh'
import {Renderer} from './core/Renderer'
import { Scene } from './core/Scene'
import { BoxGeometry } from './geometries/BoxGeometry'
const canvas = document.getElementById('container') as HTMLCanvasElement
const renderer = new Renderer({canvas})
const box = new BoxGeometry(1,2,3)
const scene = new Scene()
scene.addMesh(new Mesh(box))
const camera = new Camera(Math.PI/3,canvas.width/canvas.height,1,1000)

renderer.render(scene,camera)