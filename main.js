function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/j8uBodknR/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    } 
    else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255 ) + 1;
        random_number_g = Math.floor(Math.random() * 255 ) + 1;
        random_number_b = Math.floor(Math.random() * 255 ) + 1;
        document.getElementById("result_label").innerHTML = 'I can hear' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy:' + (results[0].condidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        img = document.getElementById('cat')
        img1 = document.getElementById('dog')

        if(results[0].label == "clap")
        {
            img.src= 'Cat_November_2010-1a.jpg';
        }
        else
        {
            img.src= 'dog-puppy-on-garden-royalty-free-image-1586966191';
            
        }
    }  
}