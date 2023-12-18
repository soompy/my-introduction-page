import '@styles/main.scss'
import { gsap, ScrollTrigger, Draggable, Flip, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); 

import cursor from '@scripts/cursor.js';
cursor();