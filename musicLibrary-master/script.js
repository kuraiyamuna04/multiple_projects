console.log('welcome to spotify')
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterplay = document.getElementById("masterplay");
let progressBar = document.getElementById("myProgressBar");
let masterSong = document.getElementById("masterSong");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs =[
{songname :"Mere ghar ram aaye", filepath :"1.mp3", coverpath : "1.jpg"},
{songname :"Kun faya kun", filepath :"2.mp3", coverpath : "2.jpg"},
{songname :"Love you Zindgi", filepath :"3.mp3", coverpath : "3.jpg"},
{songname :"Mainu Ishq hogya", filepath :"4.mp3", coverpath : "4.jpg"},
{songname :"Maan meri jaan", filepath :"5.mp3", coverpath : "5.jpg"},
{songname :"Rasiya", filepath :"6.mp3", coverpath : "6.jpg"},
{songname :"Socha wich tu", filepath :"7.mp3", coverpath : "7.jpg"},
{songname :"Apna bna le", filepath :"8.mp3", coverpath : "8.jpg"},
{songname :"Chedkhaniya", filepath :"9.mp3", coverpath : "9.jpg"},
{songname :"Deva-deva", filepath :"10.mp3", coverpath : "10.jpg"},
]
 songItems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;
    
 });



// handle play,pause and click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0) {
        audioElement.play();
        gif.style.opacity = 1;
    } 
    else
    {audioElement.pause();
    gif.style.opacity = 0;}
})

// listen event
audioElement.addEventListener("timeupdate",()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
})
progressBar.addEventListener('change',()=>{
    audioElement.currentTime = progressBar.value*audioElement.duration/100;
})

// function for changing the play button
function changeImage() {
    var image = document.getElementById('masterplay');
    if (image.src.match("play")) {
        image.src = "pause.jpg";
    }
    else {
        image.src = "play.png";
    }
}

// for play button in playlist
Array.from(document.getElementsByClassName('playButton')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
     songIndex = parseInt(e.target.id);
     masterSong.innerText = songs[songIndex].songname;
     audioElement.src= `${songIndex+1}.mp3`;
     audioElement.currentTime = 0;
     audioElement.play();
     var image = document.getElementById('masterplay');
     image.src = "pause.jpg";
     gif.style.opacity = 1;
     
    })
})
// for backward button
let button = document.getElementById('previous');
button.addEventListener('click',()=>{
    if(songIndex<=0){
      songIndex=0;
 }
     else
    {
       songIndex -= 1
    }
    audioElement.src= `${songIndex+1}.mp3`;
    masterSong.innerText = songs[songIndex].songname;
     audioElement.currentTime = 0;
     audioElement.play();
     gif.style.opacity = 1;
    })
// for forward button
let button2 = document.getElementById('next');
button2.addEventListener('click',()=>{
    if(songIndex>=9){
      songIndex=0;
 }
     else
    {
       songIndex += 1
    }
     audioElement.src= `${songIndex+1}.mp3`;
     masterSong.innerText = songs[songIndex].songname;
     audioElement.currentTime = 0;
     audioElement.play();
     gif.style.opacity = 1;
    
})

