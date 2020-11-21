import { Light } from '../lights/Light'
import { Mesh } from './Mesh'
export class Scene {
  models: Mesh[] = []
  lights: Light[] = []
  constructor() { }
  addMesh(mesh: Mesh) {
    this.models.push(mesh)
  }
  addLight(light:Light){
    this.lights.push(light)
  }
}