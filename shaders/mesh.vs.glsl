attribute vec3 a_Normal;
attribute vec4 a_Position;
uniform mat4 u_ProjectionMatrix;
uniform vec3 lightDirection;
uniform vec3 directionalLightColor;
uniform vec3 ambientLightColor;
uniform mat4 u_ViewMatrix;
uniform mat4 u_ModelMatrix;
uniform mat4 u_NormalMatrix;
varying vec3 v_VertexColor;
void main(){
  vec3 diffuse = u_NormalMatrix*a_Normal*lightDirection;
  gl_Position = u_ProjectionMatrix*u_ViewMatrix*a_Position;
  v_VertexColor = diffuse;
}