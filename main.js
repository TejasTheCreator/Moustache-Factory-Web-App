nose_X = 0;
nose_Y = 0;

function preload()
{
    realistic_moustache = loadImage("https://i.postimg.cc/BtWBd4cP/Realistic-Moustache.png");
}

function setup()
{
canvas = createCanvas(350,300)
canvas.center();
video = createCapture(VIDEO);
video.size(350,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is intiallized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_X = results[0].pose.nose.x-35;
        nose_Y = results[0].pose.nose.y+5;
        console.log("nose_X ="+ nose_X);
        console.log("nose_Y ="+ nose_Y);
    }
}

function draw()
{
image(video,0,0,350,300);
image(realistic_moustache, nose_X, nose_Y, 80, 35);
}

function redirect()
{
    window.location = "https://www.youtube.com/channel/UCt84nybM3SWblPYxc81CcYQ?view_as=subscriber";
}

function take_snapshot()
{
    save('LookAtMyMoustache');
}