var URL = "https://teachablemachine.withgoogle.com/models/JlrJodPLI/" ;
var classifier = ml5.soundClassifier(URL + 'model.json', modelload);

function modelload() {
    console.log("Model is ready now.");
    classifier.classify(got);   
}

function got(error, result) {
    if (error) {
        console.log(error);
    } 

    else {
        var label = result[0].label;
        console.log(label);
        var con = (result[0].confidence * 100).toFixed(2);
        console.log(con);

        var sound = document.getElementById('sound');
        var acc = document.getElementById('acc');
        sound.innerText = "I am hearing: " + label;
        acc.innerText = "Accuracy: " + con + " %";

        var im1 = document.getElementById("im1");
        var im2 = document.getElementById("im2");
        var im3 = document.getElementById("im3");
        var im4 = document.getElementById("im4");
        var im5 = document.getElementById("im5");

        if(label == "Background Noise"){
            im1.src = "Vedio 3.gif";
            im2.src = "2.jfif";
            im3.src = "3.jfif";
            im4.src = "4.jfif"
            im5.src = "5.jfif"
        }

        else if(label == "Ringtone"){
            im1.src = "1.png";
            im2.src = "Vedio 2.gif";
            im3.src = "3.jfif";
            im4.src = "4.jfif"
            im5.src = "5.jfif"
        }

        else if(label == "Alarm "){
            im1.src = "1.png";
            im2.src = "2.jfif";
            im3.src = "Vedio 1.webp";
            im4.src = "4.jfif";
            im5.src = "5.jfif";
        }

        else if(label =="Chirping of Birds"){
            im1.src = "1.png";
            im2.src = "2.jfif";
            im3.src = "3.jfif";
            im4.src = "Vedio 4.gif";
            im5.src = "5.jfif";
        }

        else if(label =="Door Bell"){
            im1.src = "1.png";
            im2.src = "2.jfif";
            im3.src = "3.jfif";
            im4.src = "4.jfif";
            im5.src = "Vedio 5.gif";
        }
    }
}
