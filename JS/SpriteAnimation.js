
function Sprite(options) {
    this.active = true;
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
    this.image = options.image;

    this.animatStart = false;
    this.NOFX = options.numberOfFramesX || 1;
    this.xframeIndex = 0;

    this.NOFY = options.numberOfFramesY || 1;
    this.yframeIndex = 0;

    this.timer = options.timer || 0;
    this.timerCount = 0;

    this.emptyFrame = options.emptyFrame || 0;

    this.reverse = options.reverse == null ? true : options.reverse;
    this.stop = false;
    this.draw = function ()
    {
        //clear
        //context.clearRect(this.x, this.y, this.width / this.NOFX, this.height / this.NOFY);
        //draw
        var sourceX = this.xframeIndex * this.width / this.NOFX;
        var sourceY = this.yframeIndex * this.height / this.NOFY;
        var sourceWidth = this.width / this.NOFX;
        var sourceHeight = this.height / this.NOFY;

        var destX = this.x;
        var destY = this.y;
        var destWidth = sourceWidth;
        var destHeight = sourceHeight;
        //alert(this.image.width);

        ctx.drawImage(this.image, sourceX, sourceY,
            sourceWidth, sourceHeight,
            destX, destY, destWidth, destHeight);

    }

    this.start = function () {

        this.update();
        this.draw();
        if (this.stop) {
            this.active = false;
        }
        
    }
    this.update = function () {
        this.timerCount++;

        if (this.timerCount > this.timer) {
            this.timerCount = 0;

            if (!this.reverse) {
                if (!this.stop) {
                    //update frame Index
                    if (this.xframeIndex < this.NOFX - 1)
                        this.xframeIndex++;
                    else {
                        this.xframeIndex = 0;
                        //update frame Index Y

                        if (this.yframeIndex < this.NOFY - 1)
                            this.yframeIndex++;
                        else {
                            //this.yframeIndex = 0;
                            this.stop = true;
                        }
                    }
                }
            }
            else {
                //update frame Index
                if (this.xframeIndex < this.NOFX - 1)
                    this.xframeIndex++;
                else {
                    this.xframeIndex = 0;
                    //update frame Index Y

                    if (this.yframeIndex < this.NOFY - 1)
                        this.yframeIndex++;
                    else {
                        this.yframeIndex = 0;
                    }
                }
            }

            var xEmptyIndex = this.NOFX - (this.emptyFrame % this.NOFX);
            var yEmptyIndex = this.NOFY - 1 - Math.floor(this.emptyFrame / this.NOFX);

            //alert(yEmptyIndex + ", " + xEmptyIndex);
            if (this.yframeIndex == yEmptyIndex && this.xframeIndex == xEmptyIndex) {
                this.xframeIndex = 0;
                this.yframeIndex = 0;
                this.stop = true;
            }

            /*
            for (var i = 0; i < this.emptyFrame; i++) {
                if (this.yframeIndex == yEmptyIndex && this.xframeIndex == xEmptyIndex ) {
                    this.xframeIndex = 0;
                    this.yframeIndex = 0;
                }

                //update x emptyIndex
                if (xEmptyIndex > 0)
                    xEmptyIndex--;
                else {
                    xEmptyIndex = this.NOFX - 1;

                    //update y emptyIndex
                    if (yEmptyIndex > 0)
                        yEmptyIndex--;
                    else
                        yEmptyIndex = this.NOFY - 1;
                }
            }*/
            /*
            if(this.yframeIndex==3&&this.xframeIndex==2||
                this.yframeIndex == 3 && this.xframeIndex == 3)
            {
                this.xframeIndex = 0;
                this.yframeIndex = 0;
            }*/
        }
    }

}