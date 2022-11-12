img = "";
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    od = ml5.objectDetector('cocossd', modelLoded);
}

function modelLoded() { console.log("modelLoaded");od.detect(img,getResult);}

function getResult(error, result) {
    if (error) {
        console.error(error);
    }
    console.log(result);
}

function draw() {
    image(img,0,0,640,420);
}
function preload() {
    img = loadImage('tv.webp');
}