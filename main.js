noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
song1="";
song2="";
function preload() {
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");
}
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
}
function play() {
    song1.play();
}
function stop() {
    song1.stop();
}

