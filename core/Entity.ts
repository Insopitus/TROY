import Matrix4 from "../math/Matrix4";
import Quaternion from "../math/Quaternion";
import Vector3 from "../math/Vector3";

export default class Entity {
  position = new Vector3()
  rotation = new Quaternion(1, 1, 1, 1)
  scale = new Vector3(1, 1, 1)
  matrix = new Matrix4()
  constructor() { }
  updateMatrix() {
    // TODO: compose matrix
    this.matrix
  }

}