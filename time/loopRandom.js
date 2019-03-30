// Loop from random in point. Adds variation to looping precomps.
// Enable time remapping and apply there.

fps = 25
frameCount = 12						// number of frames within precomp.

loopDur = (fps * (1/frameCount));	// duration of loop converted from frames to seconds.
seedRandom(index,true);				// layer index defines seed. Adding layers above will change result.
preRun = random(loopDur);

(time + preRun)%loopDur