//class background
//attributes
/*{
x,y,width,height,image,spdX
}*/
//functions
/*{
draw
}*/
function backGround(x,y,width,height,image)
{
    //attributes
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.image=image;
    //functions
    this.draw=function(ctx)
    {
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
        ctx.drawImage(this.image,this.x+this.width,this.y,this.width,this.height);
        this.x -= 1;
        if (this.x < -this.width)
        {
            this.x = 0;
            ctx.clearRect(-this.width,this.y,this.width,this.height);
        }    
    }
}
