var textbox=document.getElementById('textbox');
var camera=document.getElementById('camera');
var result=document.getElementById('result');

var speech = window.webkitSpeechRecognition;
var recognition = new speech();

function get(){
	textbox.innerText="";
	recognition.start();
}

recognition.onresult=function(event){
	var content = event.results[0][0].transcript;
	content=content.toLowerCase();
	content=content.replaceAll('.','');
	textbox.innerText=content;
	if(content=='selfie' || content=='take a selfi'){
		console.log('Taking your selfi in 5 seconds.');
		speak();
		Webcam.attach(camera);
		setTimeout(function(){
			take_snapshot();
			save();
		},5000)
		
	}
}

function speak() {
	var s = window.speechSynthesis;
	var say = "Taking your selfie in 5 seconds."
	var utter = new SpeechSynthesisUtterance(say);
	s.speak(utter);
}

Webcam.set({
	width:250,
	height:200,
	image_format:'png',
	png_quality:90
});

function take_snapshot(){
	Webcam.snap(function(data_uri){
		console.log(data_uri);
		result.innerHTML = '<img id ="inputImg" src = " '+data_uri+' " />';
	})
}

function save(){
	var link = document.getElementById('link');
	var imageURL = document.getElementById("inputImg").src;
	link.href=imageURL;
	link.click(); 
}