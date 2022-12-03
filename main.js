status1="";
objectname="";
function preload()
{
    
}

function setup()
{
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function start()
{
  objectDetector=ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML="status : detecting objects";
  objectname=document.getElementById("box").value;
}

function modelLoaded()
{
  console.log("model loaded");
  status1=true;
}

function draw()
{
  image(video,0,0,380,380);
}