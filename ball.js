class Ball{
    constructor(x,y,radius,diameter){
     var  options={restitution:0.3,friction:0.5,density:1.2,isStatic:false}
      this.body=Bodies.circle(x,y,radius,options,diameter);
     this.radius=radius;
     this.diameter=diameter;
     World.add(world,this.body)
    }
display(){
    var angle=(this.body.angle);
push();
translate(this.body.position.x,this.body.position.y);
rotate(angle)
fill("green");
ellipseMode(RADIUS);
ellipse(0,0,this.radius,this.diameter);
pop();
}
}