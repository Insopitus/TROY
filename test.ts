import { Camera } from './core/Camera'
import { Color } from './core/Color'
import {Renderer} from './core/Renderer'
import { BoxGeometry } from './geometries/BoxGeometry'
const canvas = document.getElementById('container') as HTMLCanvasElement
const renderer = new Renderer({canvas})
const box = new BoxGeometry(1,2,3)
const camera = new Camera(Math.PI/3,canvas.width/canvas.height,1,1000)