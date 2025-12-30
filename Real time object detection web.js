let video;
let detector;
let objects = [];
let showVideo = true;
let detecting = false;

var detectBtn=document.getElementById('detectBtn');

function setup() {
  let canvas = createCanvas(600, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  detector = ml5.objectDetector('cocossd', modelloaded);
}

function modelloaded() {
  console.log('Model is ready!');
}


function draw(){
  image(video, 0, 0, 600, 500);
  if(video && detecting){
    for (let i=0; i<objects.length; i++){
      drawBox(objects[i]);
      drawLabel(objects[i]);
    }
  }
}

function drawBox(obj){
  stroke('green');
  strokeWeight(5);
  noFill();
  rect(obj.x, obj.y, obj.width, obj.height);
}

function drawLabel(obj){
  noStroke();
  fill('red');
  textSize(50);
  text(obj.label, obj.x+25, obj.y+25);
}

function detectObjects(){
  detector.detect(video, function(error, results){
    if(error){
      console.log(error);
      return;
    }

    objects=results;
    if(detecting){
      detectObjects();
    }
  })
}

function Detecting(){
  detecting =  !detecting;
  if (detecting){
    detectObjects();
    detectBtn.innerText = "Stop detecting";
  }

  else{
    objects = [];
    detectBtn.innerText = "Start Detecting";
  }
}