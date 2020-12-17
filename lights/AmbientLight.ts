import Color, { ColorTypes } from "../core/Color";
import { Light } from "./Light";

export default class AmbientLight extends Light{
    color:Color
    constructor(color?: Color | string | number){
        super()
        this.color = new Color(color)
    }
}