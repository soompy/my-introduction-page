import '@styles/main.scss'
import { gsap, ScrollTrigger, Draggable, Flip, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); 

import header from '@scripts/header.js';
import cursor from '@scripts/cursor.js';
import canvas from '@scripts/canvas.js';
import interactive from '@scripts/interactive.js';
import matter from '@scripts/matter.js';

header();
cursor();
canvas();
interactive();
matter();