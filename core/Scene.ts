import { Light } from '../lights/Light'
import  Mesh  from './Mesh'
export default class Scene {
  models: Set<Mesh> = new Set()
  lights: Set<Light> = new Set()
  constructor() { }
  addMesh(...meshes: Mesh[]) {
    for(let mesh of meshes){
      this.models.add(mesh)
    }
  }
  addLight(...lights:Light[]){
    for(let light of lights){
      this.lights.add(light)
    }
  }
}