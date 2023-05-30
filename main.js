function startClassify(){
    navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/mVjTNqpaI/model.json", modelloaded);
}
function modelloaded(){
    console.log("model loaded");
    classifier.classify(gotresults);
}
function gotresults(error, results){
if (error){
    console.log(error);
}
else {
    console.log(results);
    random_r = Math.floor(Math.random()*255)+1;
    random_g = Math.floor(Math.random()*255)+1;
    random_b = Math.floor(Math.random()*255)+1;
    document.getElementById("result-label").innerHTML="I can hear "+results[0].label;
    document.getElementById("result-confidence").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2) + " %";
    document.getElementById("result-label").style.color="rgb("+ random_r + ", " + random_g + ", " + random_b + ")";
    document.getElementById("result-confidence").style.color="rgb(" + random_r + ", " + random_g + ", " + random_b + ")";
img1=document.getElementById("alien-1");
img2=document.getElementById("alien-2");
img3=document.getElementById("alien-3");
img4=document.getElementById("alien-4");
if (result[0].label=="Clap")
{
    img1.src="aliens-01.gif";
    img2.src="aliens-02.png";
    img3.src="aliens-03.png";
    img3.src="aliens-04.png";
}
else if(result[0].label=="Bell")
{
    img1.src="aliens-01.png";
    img2.src="aliens-02.gif";
    img3.src="aliens-03.png";
    img3.src="aliens-04.png";
}
else if(result[0].label=="Snapping")
{
    img1.src="aliens-01.png";
    img2.src="aliens-02.png";
    img3.src="aliens-03.gif";
    img3.src="aliens-04.png";
}
else 
{
    img1.src="aliens-01.png";
    img2.src="aliens-02.png";
    img3.src="aliens-03.png";
    img3.src="aliens-04.gif";
}}}