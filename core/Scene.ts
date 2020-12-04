import { Light } from '../lights/Light'
import  Mesh  from './Mesh'
export default class Scene {
  models: Set<Mesh> = new Set()
  lights: Set<Light> = new Set()
  constructor() { }
  addMesh(mesh: Mesh) {
    this.models.add(mesh)
  }
  addLight(light:Light){
    this.lights.add(light)
  }
}