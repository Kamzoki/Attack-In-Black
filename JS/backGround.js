//class Ground
//attributes
/*{
x,y,width,height,image,spdX
}*/
//functions
/*{
draw
}*/
function backGround(x,y,width,height,image,SPDX)
{
    //attributes
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.image=image;
    this.SPDX = SPDX;
    //functions
    this.draw=function(ctx)
    {
        
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
        ctx.drawImage(this.image,this.x+this.width,this.y,this.width,this.height);
        this.x -= this.SPDX;
        if (this.x < -this.width)
        {
            this.x = 0;
            ctx.clearRect(-this.width,this.y,this.width,this.height);
        }    

    }
}