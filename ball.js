class Ball
{
    constructor(x,y,r)
    {
        var ballOptions={
            restitution:1,
            friction:1
          }
          this.body=Bodies.circle(x,y,r,ballOptions);
          World.add(world,this.body);
          this.w=r
          
          
    }

    display()
    {
   push()  
   translate(this.body.position.x,this.body.position.y)
   rotate(this.body.angle)
ellipseMode(CENTER)
  ellipse (0,0,this.w)  
  pop() 
    }
}