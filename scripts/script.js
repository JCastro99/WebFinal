var image = document.getElementById("image");
 
var imageArray = ["images/TitleScreen.png","images/Diner.png","images/cafe.png","images/hallway.png","images/HomeBoy.png","images/LibraryBackGround.png","images/ParkBackGround.png"];
 
var imageIndex = 0;
 
function changeImage() {
   image.setAttribute("src",imageArray[imageIndex]);
   imageIndex++;
   if (imageIndex >= imageArray.length) {
      imageIndex = 0;
   }
}
 
window.onload = function() {
 
   setInterval(changeImage,5000);
 
}

function growText() {
    var text = document.getElementById("t_left_text");
    if(text.style.fontSize != "22px"){
    text.style.fontSize = "22px"; 
    }else {
        text.style.fontSize = "16px";
    }
}
function growText2() {
    var text = document.getElementById("t_let_text");
    if(text.style.fontSize != "22px"){
    text.style.fontSize = "22px"; 
    }else {
        text.style.fontSize = "16px";
    }
}