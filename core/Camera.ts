// perspective camera only for the moment
import  Matrix4  from '../math/Matrix4'
import Vector3 from '../math/Vector3'
export default class Camera {
  projectionMatrix: Matrix4 = new Matrix4()
  #target = new Vector3(0,0,0)
  
  #rotation = new Vector3(0,0,0)
  set rotation(vec:Vector3){
    this.#rotation.copy(vec)
    this.updateMatrix()
  }
  get rotation(){
    return this.#rotation
  }
  #position = new Vector3(0,0,-1)
  set position(vec:Vector3){
    this.#position.copy(vec)
    this.updateMatrix()
  }
  get position(){
    return this.#position
  }
  modelMatrix: Matrix4 = new Matrix4().setTranslation(new Vector3(0,0,-1))
  viewMatrix: Matrix4 = new Matrix4().getInverse(this.modelMatrix)// inverse of the modelMatrix
  constructor(public fov: number, public aspect: number, public near: number, public far: number) {
    const fovFactor = 1 / Math.tan(fov / 2)
    this.projectionMatrix.set(
      fovFactor / aspect, 0, 0, 0,
      0, fovFactor, 0, 0,
      0, 0, -(far + near) / (far - near), -2 * far * near / (far - near),
      0, 0, -1, 0
    )
  }
  updateMatrix(){
    this.modelMatrix.setRotation(this.#rotation)
    this.modelMatrix.setTranslation(this.#position)
    this.viewMatrix.getInverse(this.modelMatrix)
  }
  lookAt(vec:Vector3){
    
  }
}