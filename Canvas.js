let canvas; 
function setup(){ 
	canvas = createCanvas(850,500);
	canvas.center(); 
	canvas.parent("canvasContainer");  
	background('lightblue'); 
}

var textBox = document.getElementById('textBox');
var speech = window.webkitSpeechRecognition;
var recognition = new speech();

function getStarted(){
	background('whitesmoke')
	textBox.value="";
	recognition.start();
	console.log('I am here to assist you!');
	
	recognition.onresult=function(event){
		var content = event.results[0][0].transcript;
		content=content.toLowerCase();
		content=content.replaceAll('.','');
		console.log(content);
		
		if(content == 'circle'){
			stroke('black');
			strokeWeight(5);
			fill('red')
			ellipse(420, 240, 475, 475);
			speak(content);
		}

		else if(content == 'rectangle'){
			stroke('black');
			strokeWeight(5);
			fill('yellow');
			rect(25, 25, 800, 450);
			speak(content);
		}

		else if(content == 'square'){
			stroke('black');
			strokeWeight(5);
			fill('salmon');
			rect(200, 25, 450, 450);
			speak(content);
		}

		else if(content == 'oval'){
			stroke('black');
			strokeWeight(5);
			fill('orange');
			ellipse(425, 250, 700, 300);
			speak(content);	
		}

		else if(content == 'triangle'){
			stroke('black');
			strokeWeight(5);
			fill('blue');
			triangle(425, 50, 200, 425, 650, 425);
			speak(content);
		}

		else {
			textBox.value = content + "is not available now! Sorry!";
			synth = window.speechSynthesis;
			say = content + '  is not available now';
			utter = new SpeechSynthesisUtterance(say);
			synth.speak(utter);
		}
	}
}

function speak(con){
	textBox.value = "";
	textBox.value = con + '  is being drawn with magical pen. ✨ See below!';
	synth = window.speechSynthesis;
	say = con + '  is being drawn with magical pen. ✨ See below!' ;
	utter = new SpeechSynthesisUtterance(say);
	synth.speak(utter);
}

function clearCanvas(){ 	
	textBox.value = "";
	synth = window.speechSynthesis;
	say = "Are you sure to remove all your works?";
	utter = new SpeechSynthesisUtterance(say);
	synth.speak(utter);

	alert('Are you sure? You want to remove?');
	background('lightsalmon');  
}