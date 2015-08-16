/*each rectangle will have left,right, top, bottom edges,
the width and height will be used to calculate right and bottom fields*/
function RectangleType(left, top, width, height) {
    //store given parameters
    this.left  = left;
    this.top = top;
    this.width = width;
    this.height = height;
    
    //calculate right and bottom edges
    this.right = left + width;
    this.bottom = top + height;
    
    //called when rectangle is moving to update location, bottom, and right
    this.updateLocation = function (x,y)
    {
        this.left = x;
        this.top = y;
        //calculate right and bottom edges
        this.right = this.left  + this.width;
        this.bottom = this.top + this.height;
    }
}
//----------------------------
 //add function to test if rectagnles are intersecting or not
function testCollision(A,B )//compare 2 rectangles/boxes if they intersecting
{
    //The contradictory logic because it is simpler.
    return !(A.bottom< B.top ||
              A.top >B.bottom||
              A.left > B.right||
              A.right<B.left);
}