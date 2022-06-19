class Snow{
    constructor(x,y){
        var options={
            density:0.5,friction:0.08,restitution:0.001

        }
        this.image=loadImage("snow5.webp")
this.body=Bodies.circle(x,y,100,options);
World.add(world,this.body)        ;

    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        rotate (angle);
        translate (pos.x,pos.y);
        imageMode(CENTER)
        image(this.image,0,0,100,100);
    }


}