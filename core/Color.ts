// reg expressions for hex color strings
const rgbReg = /^([0-9a-f]{1}){3}$/i
const rgbaReg = /^([0-9a-f]{1}){4}$/i
const rrggbbReg = /^([0-9a-f]{2}){3}$/i
const rrggbbaaReg = /^([0-9a-f]{2}){4}$/i

export default class Color {
	r = 0
	g = 0
	b = 0
	a = 1
	
	/** 
	 * 4 params R, G, B, A, all of which are numbers and are from 0 to 1. 
	 * You can also give only 1 parameter which is a W3C color keyword like 'red' or 'aqua',
	 * or a hex number like 0x00ff00, or a hex string like '#00ff00' (# is required to distinguish from color keywords)
  */
  //constructor reload
  constructor(red:number,green:number,blue:number,alpha?:number)
  constructor(color:string)
  constructor(color:number)
	constructor(red: number | string, green?: number, blue?: number, alpha?: number) {
    //have to repeat this in the set method since i got trouble dealing with the overload thing
		if(red==='transparent'){
			this.a = 0
			return
		}
		if (arguments.length >= 3) {
			this.r = red as number
			this.g = green
			this.b = blue
			this.a = alpha ?? 1
		} else {
			if (typeof red === 'string' && red[0] !== '#') {
				red = keywords[red]				
			}
			const rgb = hex2rgba(red)
			this.r = rgb.r
			this.g = rgb.g
			this.b = rgb.b
			this.a = rgb.a ?? 1
		}

  }
  copy(color:Color){
    this.r = color.r
    this.g = color.g
    this.b = color.b
    this.a = color.a
    return this
  }
  set(red:number,green:number,blue:number,alpha?:number):this
  set(color:string):this
  set(color:number):this
	set(red: number | string, green?: number, blue?: number, alpha?: number):this{
    if(red==='transparent'){
			this.a = 0
			return
		}
		if (arguments.length >= 3) {
			this.r = red as number
			this.g = green
			this.b = blue
			this.a = alpha ?? 1
		} else {
			if (typeof red === 'string' && red[0] !== '#') {
				red = keywords[red]				
			}
			const rgb = hex2rgba(red)
			this.r = rgb.r
			this.g = rgb.g
			this.b = rgb.b
			this.a = rgb.a ?? 1
		}
    return this
  }
	/**return a hex string starting with '#' */
	toHexString() {
		let result:string
		const r = (this.r * 255).toString(16).padStart(2, '0')
		const g = (this.g * 255).toString(16).padStart(2, '0')
		const b = (this.b * 255).toString(16).padStart(2, '0')
		result = `#${r}${g}${b}`
		if(this.a!==1) result += (this.a * 255).toString(16).padStart(2, '0')
		return result
	}
	/**return a CSS style string like 'rgba(r,g,b,a)'*/
	toStyleString() {
		return `rgba(${Math.round(this.r * 255)},${Math.round(this.g * 255)},${Math.round(this.b * 255)},${this.a})`
	}
}

function hex2rgba(hex: string | number) {
	let r = 1, g = 1, b = 1, a = 1	
	if(typeof hex === 'string'){
		let num:number
		if (hex[0] === '#') hex = hex.slice(1) // #开头则去掉井号
		if (hex.match(rrggbbReg)) {
			num = parseInt(hex, 16)
			r = (num >> 16 & 255) / 255
			g = (num >> 8 & 255) / 255
			b = (num & 255) / 255
		}
		else if (hex.match(rrggbbaaReg)) {
			num = parseInt(hex, 16)
			r = (num >> 24) / 255
			g = (num >> 16 & 255) / 255
			b = (num >> 8 & 255) / 255
			a = (num & 255) / 255
		}
		else if (hex.match(rgbaReg)) {
			num = parseInt(hex, 16)
			r = (num >> 12) / 15
			g = (num >> 8 & 15) / 15
			b = (num >> 4 & 15) / 15
			a = (num & 15) / 15
		}
		else if (hex.match(rgbReg)) {
			num = parseInt(hex, 16)
			r = (num >> 8 & 15) / 15
			g = (num >> 4 & 15) / 15
			b = (num & 15) / 15
		}
		else {
			throw new Error('unknown color hex format')
		}
	}else if(typeof hex === 'number'){
		r = (hex >> 16 & 255) / 255
		g = (hex >> 8 & 255) / 255
		b = (hex & 255) / 255
	}
	return { r, g, b, a }
}


const keywords = {
	'aliceblue': 0xF0F8FF, 'antiquewhite': 0xFAEBD7, 'aqua': 0x00FFFF, 'aquamarine': 0x7FFFD4, 'azure': 0xF0FFFF,
	'beige': 0xF5F5DC, 'bisque': 0xFFE4C4, 'black': 0x000000, 'blanchedalmond': 0xFFEBCD, 'blue': 0x0000FF, 'blueviolet': 0x8A2BE2,
	'brown': 0xA52A2A, 'burlywood': 0xDEB887, 'cadetblue': 0x5F9EA0, 'chartreuse': 0x7FFF00, 'chocolate': 0xD2691E, 'coral': 0xFF7F50,
	'cornflowerblue': 0x6495ED, 'cornsilk': 0xFFF8DC, 'crimson': 0xDC143C, 'cyan': 0x00FFFF, 'darkblue': 0x00008B, 'darkcyan': 0x008B8B,
	'darkgoldenrod': 0xB8860B, 'darkgray': 0xA9A9A9, 'darkgreen': 0x006400, 'darkgrey': 0xA9A9A9, 'darkkhaki': 0xBDB76B, 'darkmagenta': 0x8B008B,
	'darkolivegreen': 0x556B2F, 'darkorange': 0xFF8C00, 'darkorchid': 0x9932CC, 'darkred': 0x8B0000, 'darksalmon': 0xE9967A, 'darkseagreen': 0x8FBC8F,
	'darkslateblue': 0x483D8B, 'darkslategray': 0x2F4F4F, 'darkslategrey': 0x2F4F4F, 'darkturquoise': 0x00CED1, 'darkviolet': 0x9400D3,
	'deeppink': 0xFF1493, 'deepskyblue': 0x00BFFF, 'dimgray': 0x696969, 'dimgrey': 0x696969, 'dodgerblue': 0x1E90FF, 'firebrick': 0xB22222,
	'floralwhite': 0xFFFAF0, 'forestgreen': 0x228B22, 'fuchsia': 0xFF00FF, 'gainsboro': 0xDCDCDC, 'ghostwhite': 0xF8F8FF, 'gold': 0xFFD700,
	'goldenrod': 0xDAA520, 'gray': 0x808080, 'green': 0x008000, 'greenyellow': 0xADFF2F, 'grey': 0x808080, 'honeydew': 0xF0FFF0, 'hotpink': 0xFF69B4,
	'indianred': 0xCD5C5C, 'indigo': 0x4B0082, 'ivory': 0xFFFFF0, 'khaki': 0xF0E68C, 'lavender': 0xE6E6FA, 'lavenderblush': 0xFFF0F5, 'lawngreen': 0x7CFC00,
	'lemonchiffon': 0xFFFACD, 'lightblue': 0xADD8E6, 'lightcoral': 0xF08080, 'lightcyan': 0xE0FFFF, 'lightgoldenrodyellow': 0xFAFAD2, 'lightgray': 0xD3D3D3,
	'lightgreen': 0x90EE90, 'lightgrey': 0xD3D3D3, 'lightpink': 0xFFB6C1, 'lightsalmon': 0xFFA07A, 'lightseagreen': 0x20B2AA, 'lightskyblue': 0x87CEFA,
	'lightslategray': 0x778899, 'lightslategrey': 0x778899, 'lightsteelblue': 0xB0C4DE, 'lightyellow': 0xFFFFE0, 'lime': 0x00FF00, 'limegreen': 0x32CD32,
	'linen': 0xFAF0E6, 'magenta': 0xFF00FF, 'maroon': 0x800000, 'mediumaquamarine': 0x66CDAA, 'mediumblue': 0x0000CD, 'mediumorchid': 0xBA55D3,
	'mediumpurple': 0x9370DB, 'mediumseagreen': 0x3CB371, 'mediumslateblue': 0x7B68EE, 'mediumspringgreen': 0x00FA9A, 'mediumturquoise': 0x48D1CC,
	'mediumvioletred': 0xC71585, 'midnightblue': 0x191970, 'mintcream': 0xF5FFFA, 'mistyrose': 0xFFE4E1, 'moccasin': 0xFFE4B5, 'navajowhite': 0xFFDEAD,
	'navy': 0x000080, 'oldlace': 0xFDF5E6, 'olive': 0x808000, 'olivedrab': 0x6B8E23, 'orange': 0xFFA500, 'orangered': 0xFF4500, 'orchid': 0xDA70D6,
	'palegoldenrod': 0xEEE8AA, 'palegreen': 0x98FB98, 'paleturquoise': 0xAFEEEE, 'palevioletred': 0xDB7093, 'papayawhip': 0xFFEFD5, 'peachpuff': 0xFFDAB9,
	'peru': 0xCD853F, 'pink': 0xFFC0CB, 'plum': 0xDDA0DD, 'powderblue': 0xB0E0E6, 'purple': 0x800080, 'rebeccapurple': 0x663399, 'red': 0xFF0000, 'rosybrown': 0xBC8F8F,
	'royalblue': 0x4169E1, 'saddlebrown': 0x8B4513, 'salmon': 0xFA8072, 'sandybrown': 0xF4A460, 'seagreen': 0x2E8B57, 'seashell': 0xFFF5EE,
	'sienna': 0xA0522D, 'silver': 0xC0C0C0, 'skyblue': 0x87CEEB, 'slateblue': 0x6A5ACD, 'slategray': 0x708090, 'slategrey': 0x708090, 'snow': 0xFFFAFA,
	'springgreen': 0x00FF7F, 'steelblue': 0x4682B4, 'tan': 0xD2B48C, 'teal': 0x008080, 'thistle': 0xD8BFD8, 'tomato': 0xFF6347, 'turquoise': 0x40E0D0,
	'violet': 0xEE82EE, 'wheat': 0xF5DEB3, 'white': 0xFFFFFF, 'whitesmoke': 0xF5F5F5, 'yellow': 0xFFFF00, 'yellowgreen': 0x9ACD32
};