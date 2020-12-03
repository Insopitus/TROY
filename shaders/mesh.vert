attribute vec4 a_Position;
attribute vec3 a_Normal;
uniform mat4 u_ProjectionMatrix;
uniform mat4 u_ViewMatrix;
uniform mat4 u_ModelMatrix;
void main(){
  gl_Position = u_ProjectionMatrix*u_ViewMatrix*a_Position;
  // gl_Position = vec4(2,3,0,1);
  gl_PointSize = 10.0;
}