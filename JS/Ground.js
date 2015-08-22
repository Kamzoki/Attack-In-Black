//class Ground
//attributes
/*{
x,y,width,height,image,spdX
}*/
//functions
/*{
draw
}*/
function Ground(x,y,width,height,image,SPDX)
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
        ctx.clearRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
//      ctx.drawImage(this.image,this.x+this.width,this.y,this.width,this.height);
        this.x -= this.SPDX;

    }
}
