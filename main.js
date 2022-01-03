//https://teachablemachine.withgoogle.com/models/_2Rz4JzhK/




function start()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_2Rz4JzhK/model.json',modelready);

}


function modelready(){
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if(error){
        console.error(error);
    } else{

        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        
        document.getElementById("resultlabel").innerHTML='i can hear-'+results[0].label;
        document.getElementById("accuracy").innerHTML='accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("resultlabel").style.color="rgb("+ random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("accuracy").style.color="rgb("+ random_number_r+","+random_number_g+","+random_number_b+")";
        img1=document.getElementById("img1");
        

        if (results[0].label=="dog")
        {
            img1.src="Casper.JPG";
            
        }

        else if (results[0].label=="cat")
        {
            img1.src="cat.jpeg";
            
        }
        
        else if (results[0].label=="monkey")
        {
            img1.src="monkey.webp";
           
        }

        else if (results[0].label=="tiger")
        {
            img1.src="tuguuuur.jpeg";
            
        }


        
    }
}