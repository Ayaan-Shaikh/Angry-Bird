class BaseClass{
    constructor(x,y,width,height){
        var options=
        {restitution:0.5,friction:1}
        
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("sprites/base.png");
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
display(){
    var pos=this.body.position
    var angle=this.body.angle
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    // stroke("green")
    // strokeWeight(4)
    // fill(255)
     imageMode(CENTER);
    image(this.image,0,0,this.width,this.height)
    pop();
}
}
