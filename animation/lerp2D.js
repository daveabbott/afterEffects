// Linear translate between 2 points.
// Expects 3 nulls.
// First add a slider to the 3rd null then expression to position.
// Probably breaks if anything is parented. Combine with Absolute Position.

s = effect("Slider Control")("Slider");
n1 = thisComp.layer("Null 1").transform.position;
n2 = thisComp.layer("Null 2").transform.position;

x1 = n1[0];
y1 = n1[1];

x2 = n2[0];
y2 = n2[1];

s1 = linear(s, 0,100, x1, x2); // linear can be switched to 'smooth'
s2 = linear(s, 0,100, y1, y2);

[s1,s2]