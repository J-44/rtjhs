viY= 0;
viX
function preload(){
  clown=loadImage('https://i.postimg.cc/TPcZjQCZ/icon.jpg');
}
function setup(){
  canvas = cereateCanvas(500,600);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  video.size(500,600);
  poseNet = ml5.posenet(video,modelLoaded);
  posenet.on('pose',gotposes);
}
function gotposes(results){
  if(results.length > 0){
    console.log("Results");
    viX=results[0].pose.munchi.x-15;
    viY=results[0].pose.munchi.y-15;
    console.log("Munchi X ="+viX);
    console.log("Munchi Y ="+viY);
  }

}
function modelLoaded(){
  console.log("Posenet is initialized");
}
function draw(){
  image(video,0,0,500,600);
  image(clown,viX,viY,40,40); 
}
function save(){
  save('munchi.png');
}