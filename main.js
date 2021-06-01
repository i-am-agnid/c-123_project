noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(450, 450);
    canvas.position(660, 100);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}

function draw() {
    background("#38ffb6");
    document.getElementById("square_sides").innerHTML = "width and height of the text =" + difference + "px";
    fill("#00eaff");
    stroke("#242424");
    text('Agnid', noseX, noseY);
    textSize(difference);
}

function modelloaded() {
    console.log('posenet is initialized');
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = Number(results[0].pose.nose.x);
        noseY = Number(results[0].pose.nose.y);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftwristX = " + leftwristX + "rightwristX =" + rightwristX + "difference =" + difference);
    }
}