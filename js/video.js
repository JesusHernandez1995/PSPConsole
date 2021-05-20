var video = document.getElementById("videopsp");
var boton = document.getElementById("btn-start");

// Añadimos un evento del tipo click para cuando el usuario presione el botón Start
boton.addEventListener("click", playVideo);

function playVideo(){
    if(video.paused){
        video.play();
    }
}

// Añadimos un evento del tipo 'ended' que ejecuta la función setBlackScreen cuando acabe el video
video.addEventListener("ended", setBlackScreen);

function setBlackScreen(){
    video.currentTime = 0;
}