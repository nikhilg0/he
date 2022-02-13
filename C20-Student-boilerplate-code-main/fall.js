class Fall {
    constructor(x, y, width,height) {
        var options={
        isStatic:true,
        
        };
        this.width=width;
        this.height=height;
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
        
    }
        
    display() {
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        pop();
    }
}