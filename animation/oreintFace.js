// Similar to the built in 'orient towards camera' function, but can be faded on and off.
// First create a slider then apply expression to orientation.
// Animate slider between zero and one.

s = effect("Slider Control")("Slider");

L = thisComp.activeCamera;

u = fromWorldVec(L.toWorldVec([1,0,0]));
v = fromWorldVec(L.toWorldVec([0,1,0]));
w = normalize(fromWorldVec(L.toWorldVec([0,0,1])));

sinb = clamp(w[0],-1,1);
b = Math.asin(sinb);
cosb = Math.cos(b);
if (Math.abs(cosb) > .0005){
  c = -Math.atan2(v[0],u[0]);
  a = -Math.atan2(w[1],w[2]);
}else{
  a = (sinb < 0  ?  -1 : 1)*Math.atan2(u[1],v[1]);
  c = 0;
}
[radiansToDegrees(a),radiansToDegrees(b),radiansToDegrees(c)] * s