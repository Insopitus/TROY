import Color from "../core/Color";
import Vector3 from "../math/Vector3";
import { Light } from "./Light";

export class DirectionalLight extends Light{
  constructor(public color?:  Color | string | number,public direction?:Vector3){
      super()
    this.color = new Color(color)
    this.direction = direction?new Vector3().copy(direction):new Vector3()
  }
}