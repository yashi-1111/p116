noseX=0;
noseY=0;

function preload(){
moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
Webcam.set({
    width: 360,
    height:250,
    image_format: 'png',
    png_quality: 90
    });
    
    camera = document.getElementById("canvas");

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX= results[0].pose.nose.x -15;
        noseY= results[0].pose.nose.y -15;
        console.log("nose x ="+ noseX);
        console.log("nose y ="+ noseY);
    }
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose, noseX, noseY,30,30);
}
function modelLoaded(){
console.log("PoseNet is initialized.")
}
function take_snapshot(){
    save("yashica.png");
}