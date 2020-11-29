class Ball {
  constructor (x,y,r){
 
   var options = {
       isStatic : false,
       restitution : 0.3,
       friction : 0.5,
       density : 1.2
   }


   this.body = Bodies.rectangle(x,y,r,options);
   World.add(world,this.body)


  }





display () {
var pos = this.body.position
var angle = this.body.angle
push()
    translate(pos.x,pos.y)
    rotate(angle)
    stroke("cyan")
    fill ("lightgreen")
    rectMode(CENTER);
    ellipse(350, 250 ,this.r)
  pop();
    
}
}