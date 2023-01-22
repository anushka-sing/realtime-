noseX=0;
noseY=0;
difference =0;
rightWristX = 0;
leftWristX =0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500)

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet= ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses );
}

function draw()
{
    background('#969A97');

    document.getElementById("square_side").innerHTML = "Width and Height of the square will be = " + difference + " px ";
    Fill ('#F90093');
    stroke('#F90093');
    square(noseX,noseY,difference);
}
function modelLoaded(){
    console.log('poseNet is initialized !');
}
 function gotPoses(results)
 {
if(results.length >0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX=" + noseX+ " noseY = " +noseY);

    leftWristX = result[0].pose.leftWrist.X;
    rightWristX = result[0].pose.rightWrist.X;
    difference = floor(leftWristX - rightWrist);

    console.log("leftWristX = "+ leftWristX + "rightWristX ="+rightWristX+"difference="+difference);
}
 }