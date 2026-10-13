import { fit, flight } from './physics.ts';
const area = {x:0,y:0,width:1280,height:720};
const position = {...fit(300,100,area),vx:100,vy:0};
for (let i=0;i<180;i++) flight(position,area,1/60);
console.log(position);
