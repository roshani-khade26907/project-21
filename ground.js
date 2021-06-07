class Ground {
    constructor (x,y,w,h) 
    {
        let ground_options = {
            isStatic:true
        };
          
        this.body = Bodies.rectangle(x, y, w, h,ground_options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
      
    display() {
         
        push();
        rectMode(CENTER);
        stroke("white");
        fill("mediumBlue");
        rect(this.body.position.x, this.body.position.y, this.w, this.h);
        pop();
     
    }

}