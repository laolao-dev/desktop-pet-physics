import test from 'node:test';
import assert from 'node:assert/strict';
import {fit,flight,bounds} from './physics.ts';
const a={x:0,y:0,width:1280,height:720};
test('off-screen position is clamped',()=>assert.deepEqual(fit(-100,10000,a),{x:4,y:476}));
test('trajectory lands and remains within desktop bounds',()=>{const p={x:300,y:100,vx:100,vy:0};let landed=false;for(let i=0;i<600;i++){landed ||= flight(p,a,1/60).landed;const b=bounds(a);assert.ok(p.x>=b.left&&p.x<=b.right&&p.y>=b.top&&p.y<=b.bottom);}assert.ok(landed);});
