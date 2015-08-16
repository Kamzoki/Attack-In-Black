function Eren(x,y,width,height,sprite1,sprite2)
{
    //attributes
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.sprite1=sprite1;
    this.sprite2=sprite2;
    this.gravity=0.5;
    this.spdY=0.0;
    this.originalY=this.y;
    this.isAlive=true;
    this.hp=5.0;
    this.onGround=false;
    this.box=new RectangleType(this.x,this.y,this.width-10,this.height-30);
    //functions
    this.startJump=function()
    {
        if(this.onGround)
        {
            this.spdY=-16.0;
            this.onGround=false;
        }
    }
    this.endJump=function()
    {
        if(this.spdY<-8.0)
        {
            this.spdY=-8.0;

        }
    }
    this.updateErenPos=function()
    {   eren.sprite1.x=eren.x;
        eren.sprite1.y=eren.y;
        eren.sprite2.x=eren.x;
        eren.sprite2.y=eren.y;
        eren.box.updateLocation(eren.x,eren.y);
        this.spdY+=this.gravity;
        this.y+=this.spdY;
        if(this.y>this.originalY)
        {
            this.y=this.originalY;
            this.spdY=0;
            this.onGround=true;
        }
    }
    //user interaction
    document.onkeydown=function(e)
    {
        if(e.keyCode==32)
        {
        	jumping = document.getElementById('jumping');
            eren.startJump();
            running.pause();
            jumping.play();
        }
    
    }
    document.onkeyup=function(e)
    {
        if(e.keyCode==32)
        {
            eren.endJump();
        }
    }
    //------
    this.renderEren=function()
    {
        if(eren.onGround)
        {
            eren.drawSprite1();
        }
        else
        {
            eren.drawSprite2();
        }
    }
    this.drawSprite1=function()
    {
    	running = document.getElementById('running');
        this.sprite1.start();
        eren.sprite2.xframeIndex = 0;
        eren.sprite2.yframeIndex = 0;
	    running.loop = true;
        running.play();    
    }
    this.drawSprite2=function()
    {

        this.sprite2.start();
    }
}