export const W=220,H=240;
export type Area={x:number;y:number;width:number;height:number};
export const clamp=(v:number,a:number,b:number)=>Math.max(a,Math.min(v,Math.max(a,b)));
export function bounds(a:Area){return{left:a.x+4,right:a.x+a.width-W-4,top:a.y+4,bottom:a.y+a.height-H-4}}
export function fit(x:number,y:number,a:Area){const b=bounds(a);return{x:clamp(x,b.left,b.right),y:clamp(y,b.top,b.bottom)}}
export function flight(p:{x:number;y:number;vx:number;vy:number},a:Area,dt:number){const b=bounds(a);p.vy+=1450*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;let landed=false,bounced=false;
 if(p.x<b.left||p.x>b.right){p.x=clamp(p.x,b.left,b.right);p.vx*=-.46;bounced=true}
 if(p.y<b.top){p.y=b.top;p.vy=Math.abs(p.vy)*.4;bounced=true}
 if(p.y>=b.bottom){p.y=b.bottom;landed=true;if(Math.abs(p.vy)>150){p.vy*=-.32;p.vx*=.64}else{p.vy=0;p.vx*=.65}bounced=true}
 p.vx*=Math.exp(-.65*dt);return{landed,bounced,settled:p.y===b.bottom&&Math.abs(p.vy)<20&&Math.abs(p.vx)<12};
}
