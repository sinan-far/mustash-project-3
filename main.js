nose_x = 0;
nose_y = 0;

function preload(){
    img = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);

    poseNet.on("pose" , gotPoses);

}

function draw(){
    image(video,0,0,300,300); 
    image(img,nose_x,nose_y,40,40);
}
function modelLoaded(){
    console.log("posenet is working");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x - 18;
        nose_y = results[0].pose.nose.y;
    }
}
function takeSnapshot() {
    save('whyareyouusingthisgotosnapchat.jpeg');    
}