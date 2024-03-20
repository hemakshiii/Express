
let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');

if (progress && song && ctrlIcon) {
 
song.onloadedmetadata=function()
{
    progress.max=song.duration;
    progress.value=song.currentTime;
}
}


// function playPause()
// {
//     if(ctrlIcon.classList.contains("fa-pause"))
//     {
//         song.pause();
//         ctrlIcon.classList.remove("fa-pause");
//         ctrlIcon.classList.add("fa-play");
//     }
//     else{
//         song.play();
//         ctrlIcon.classList.add("fa-pause");
//         ctrlIcon.classList.remove("fa-play");

//     }
   
// };
function playPause() {
    var song = document.getElementById('song');
    var ctrlIcon = document.getElementById('ctrlIcon');

    if (song.paused) {
        song.play();
       
        ctrlIcon.className = 'fa-solid fa-pause';
        setInterval(() => {
            progress.value = song.currentTime;
        }, 500);

    } else {
        song.pause();
        ctrlIcon.className = 'fa-solid fa-play';
    }
}
