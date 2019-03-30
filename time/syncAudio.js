// Synchronises audio between two comps. Useful for animating to music within a precomp.
// Precomped animation can be slipped within parent comp, and audio will be automatically slipped inside precomp.
// Apply to time remap of audio inside of precomp.
// Precomp audio file itself so that the frame rate is identical to main comp so as to prevent rounding errors.

// Layout example.
// parentComp
//		Layer 01 = precomp animation
//		Layer 02 = precomp audio
// precomp animation
//		Layer 01 = keyframed animation
//		Layer 02 = precomp audio (sync goes here)


parentComp = comp("Main Comp"); 										// rename manually

compStartTimeInParent = parentComp.layer(thisComp.name).startTime;
audioStartTimeInParent = parentComp.layer(thisLayer.name).startTime;

fullStartTime = this.startTime;
fullEndTime = this.source.duration+startTime;

linear(time, fullStartTime, fullEndTime, fullStartTime+compStartTimeInParent-audioStartTimeInParent, fullEndTime+compStartTimeInParent-audioStartTimeInParent);