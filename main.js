xcoordinate=0;
ycoordinate=0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(1350,750);
    canvas.position(550,150);

    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized!");
}

function draw()
{
    background("#808080");
    document.getElementById("font_size").innerHTML = "Width and height of the text is" + difference + "px";
        textSize(difference);
        fill("#FF0000");
        stroke("#FFFF00");
        text("Yadhveer", 50, 400);
    }


function gotPoses(results){
    if(results.length > 0){
        console.log(results);


        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX -" + leftWristX + "rightWristX -" + rightWristX + "difference -" + difference);
    }
}