function loadImages(sources, callback) {
//images array
    var images = {};
//#loaded images
    var loadImages = 0;
//total image number
    var imageNumber = sources.length;
//iterating sources
    for (var src in sources) {
//if this source="length",get out
        if (src == "length")
            break;
//if it's not "length",then create a new Image for it
        images[src] = new Image();
//onloading this image
        images[src].onload = function () {
            //if all images are loaded,then execute images with some function
            if (++loadImages >= imageNumber)
                callback(images);
        };
//the source of the image of this source item=this source
        images[src].src = sources[src];
    }

}