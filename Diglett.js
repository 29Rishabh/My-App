class Diglett{
    constructor(x,y,width,height){
        
        this.image=loadImage("Diglett.png");
        this.x=x;
        this.y=y;
        this.diglett=Bodies.rectangle(x,y,width,height);
        World.add(world,this.diglett);
    }

    display(){
        image(this.image,this.x-20,this.y-20);
    }
}