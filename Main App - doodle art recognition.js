url = "https://teachablemachine.withgoogle.com/models/gGFAisAx1/";

let canvas; 

function setup(){ 
    canvas = createCanvas(850,500);
    canvas.center(); 
    background("white"); 
}

var doodleNet = ml5.imageClassifier(url + 'model.json', modelload);
function modelload() {
    console.log("Model is ready now.");
}

var size = document.getElementById('sizeSelector');
var textBox=document.getElementById('textBox');

function draw() {
    stroke(document.getElementById('colorSelector').value);
    if (size.value !== "0") {
        textBox.innerText = "";
        strokeWeight(size.value);
        
        if(mouseIsPressed){
            line(pmouseX, pmouseY, mouseX, mouseY);
        }
    } 
    else{
        if (mouseIsPressed) {
            textBox.innerText = "Please select a stroke size.";
        }
    }
}

var acc = document.getElementById('acc'); 
var result = document.getElementById('result');


function speak(a,b){
    let synth = window.speechSynthesis;
    let say = "According to your art, it is " + a + "with" + b + "percent accuracy";
    let utter = new SpeechSynthesisUtterance(say);
    synth.speak(utter);
}


function clearCanvas(){ 
    let synth = window.speechSynthesis;
    let say = "Are you sure to remove all your works?";
    let utter = new SpeechSynthesisUtterance(say);
    synth.speak(utter);

    alert('Are you sure? You want to remove?');
    background("white");

    document.getElementById('acc').innerText = "Accuracy:  _________________";
    document.getElementById('result').innerText = "Prediction:  ________________";
}

function identify(){
    doodleNet.classify(canvas,gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
        return;
    } 
    else {
        console.log(results);
        document.getElementById('result').innerText = "Prediction : " + results[0].label;
        var con = (results[0].confidence * 100).toFixed(2);
        speak(results[0].label,con);
        acc.innerText = "Accuracy: " + con + "%";
    }   
}