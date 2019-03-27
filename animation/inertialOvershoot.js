// This will ignore any keyframes and instead move between two specific values.
// Start and end values are X,Y positions. Expand startVal and endVal to [0,0,0] for 3D movement.
// Link to null or Point Controls for easy use.

freq = 3;
decay = 5;
dur = 0.1;

// 2D
startVal = [0,0];		// START COORDINATE
endVal = [200,200];		// END COORDINATE

t = time - inPoint;

if (t < dur){
  linear(t,0,dur,startVal,endVal);
}else{
  amp = (endVal - startVal)/dur;
  w = freq*Math.PI*2;
  endVal + amp*(Math.sin((t-dur)*w)/Math.exp(decay*(t-dur))/w);
}