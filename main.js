var toTopBtn = document.getElementById(toTopBtn);
var audioMusic = document.getElementById('music');
var vol = 1;



function topFunction() {
    document.documentElement.scrollTop = 0;
}
function playMusic(){
    audioMusic.play();
}
function pauseMusic(){
    audioMusic.pause();
}
function volMusic(volN){
    vol = vol + volN;
    audioMusic.volume = vol;  
}

function resetMusic(){
    audioMusic.load();
}
