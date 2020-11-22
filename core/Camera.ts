// perspective camera only for the moment
import { Matrix4 } from '../math/Matrix4'
export class Camera {
  modelMatrix: Matrix4 = new Matrix4()
  viewMatrix: Matrix4 = new Matrix4()// inverse of the modelMatrix
  projectionMatrix: Matrix4 = new Matrix4()
  constructor(public fov: number, public aspect: number, public near: number, public far: number) {
    const fovFactor = 1 / Math.tan(fov / 2)
    this.projectionMatrix.set(
      fovFactor / aspect, 0, 0, 0,
      0, fovFactor, 0, 0,
      0, 0, -(far + near) / (far - near), -2 * far * near / (far - near),
      0, 0, -1, 0
    )
  }
  
}