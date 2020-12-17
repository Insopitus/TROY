attribute vec4 a_Position;
attribute vec3 a_Normal;
uniform mat4 u_ProjectionMatrix;
uniform mat4 u_ViewMatrix;
uniform mat4 u_ModelMatrix;
void main(){
  a_Normal;
  gl_Position = u_ProjectionMatrix*u_ViewMatrix*a_Position;
}