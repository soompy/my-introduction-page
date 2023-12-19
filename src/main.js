import '@styles/main.scss'
import { gsap, ScrollTrigger, Draggable, Flip, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); 

import cursor from '@scripts/cursor.js';
import canvas from '@scripts/canvas.js';
import interactive from '@scripts/interactive.js';
import matter from '@scripts/matter.js';

cursor();
canvas();
interactive();
matter();