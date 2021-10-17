Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 100
});
var camera=document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="Caputeredimage" src="'+data_uri+'"/>';
    });
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dkuah9Her/model.json',modelLoaded);
function modelLoaded(){
console.log('model loded')
}
function check(){
    img=document.getElementById("Caputeredimage");
    classifier.classify(img,gotresult);

}
function gotresult(error,results){
    if (error){
console.error(error);
    }
    else{
        console.log(results);
       document.getElementById("resultobject").innerHTML=results[0].label;
       document.getElementById("resultacuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}