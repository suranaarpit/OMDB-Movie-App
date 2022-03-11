// banner slideshow

var imageDt = JSON.parse(localStorage.getItem("images"));
console.log(imageDt);

let i=1
let slideshow = document.getElementById("slideshow")

let img = document.createElement("img");
img.src = imageDt[0];
slideshow.append(img)

setInterval(function(){
    if(i==imageDt.length){
        i=0
    }

    let image = imageDt[i]
    slideshow.innerHTML = null;

    let img = document.createElement("img")
    img.src = image

    slideshow.append(img)
    i++;
}, 3000);
