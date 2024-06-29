leftWristX=0;
rightWristX=0;
difference=0;

function preload(){
}

function setup(){
    video= createCapture(VIDEO);
    video.size(500,500);
    canvas= createCanvas(500,400);
    canvas.position(700,150);
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("rgba(0,20,0,0)");
    document.getElementById("size").innerHTML="Font Size of the text="+difference+"px";
    fill("blue");
    textSize(difference);
    text("Ananaya", 50,200);
}

function modelLoaded(){
    console.log("The model is loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        
       
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        console.log("Left wrist X="+leftWristX+", Right wrist X="+ rightWristX+"and Difference="+ difference);
        
        difference= floor(leftWristX-rightWristX);
       
    }
    }
