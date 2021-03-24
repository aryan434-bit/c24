class Box {
    constructor(x,y,width,height){
        var options={
            restituion:0.8,
            friction:1.0,
            density:1.0
        
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
    push(); //captures the new setting
translate(pos.x,pos.y);
angleMode(RADIANS)
rotate(angle);


        rectMode(CENTER);
        strokeWeight(4)
        stroke("blue")
        fill(255);
        rect(0,0,this.width,this.height);
   pop();


    }
}