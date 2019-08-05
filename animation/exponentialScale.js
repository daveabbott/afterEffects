// Animated scaling to extremely large or small amounts will appear to slow down.
// This prevents that.

n = 0;
if (numKeys > 0){
  n = nearestKey(time).index;
    if (key(n).time > time){
      n--;
    }
}
if (n == 0 || n == numKeys){
  value
}else{
  d = 1
  try{
    value[1];
    d++;
    value[2];
    d++;
    value[3];
    d++;
  }catch (err){
  }
  t1 = key(n).time;
  t2 = key(n+1).time;
  if (d == 1){
    v1 = key(n).value;
    if (v1 == 0) v1 = .0001;
    v2 = key(n+1).value;
    if (v2 == 0) v2 = .0001;
    k = Math.log(v1/v2)/(t2-t1);
    v1/Math.exp((time-t1)*k)
  }else{
    v = [];
    for(i = 0; i < d; i++){
      v1 = key(n).value[i];
      if (v1 == 0) v1 = .0001;
      v2 = key(n+1).value[i];
      if (v2 == 0) v2 = .0001;
      k = Math.log(v1/v2)/(t2-t1);
      v[i] = v1/Math.exp((time-t1)*k)
    }
    v
  }
}