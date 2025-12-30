let canvas;
let video;
let poseNet;

let nX=0;
let nY=0;

let Gx=0;
let Gy=0;

let santa;
let glass;

function preload(){
  santa = loadImage('https://i.postimg.cc/WbTZvyXn/Beard-removebg-preview.png');
  glass = loadImage('https://i.postimg.cc/QNbzs2hR/Glass-removebg-preview.png');
}

function setup() {
  canvas = createCanvas(600,500);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelload);
  poseNet.on('pose', gotResult);
}

function modelload(){
  console.log('Model is ready');
}

function gotResult(result){
  if(result.length > 0){
    let x = result[0].pose.keypoints[0].position.x - 275;
    let y = result[0].pose.keypoints[0].position.y - 300;

    nX = lerp(nX, x, 0.5);
    nY = lerp(nY, y, 0.5);

    let a = x + 275 - 150;
    let b = y + 300 - 180;

    Gx = lerp(Gx, a, 0.5);
    Gy = lerp(Gy, b, 0.5);
  }
}

function draw(){
  image(video, 0, 0, 600, 500);
  image(santa, nX, nY, 550, 600);
  image(glass, Gx, Gy, 300, 300);
} 

function snap(){
  save("myselfie.png");
}