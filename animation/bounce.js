// Essentially the same as Ease & Wizz.
// E&W doesn’t have options for Bounce

amp = .1;
freq = 2.0;
decay = 2.0;
n = 0;

if (numKeys > 0){
n = nearestKey(time).index;
if (key(n).time > time){
n--;
}}
if (n == 0){ t = 0;
}else{
t = time - key(n).time;
}
if (n > 0 && t < 1){
v = velocityAtTime(key(n).time - thisComp.frameDuration/10);
value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);
}else{
value
}