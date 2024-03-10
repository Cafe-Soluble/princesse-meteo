const line1 = document.querySelector("#line-1");
const line2 = document.querySelector("#line-2");
const line3 = document.querySelector("#line-3");
const img = document.querySelector("#img");
const playPause = document.querySelector("#playpause");
const playPauseBtn = document.querySelector("#playpause-btn");
const audio = document.querySelector("#audio");
const title = document.querySelector("#title");
const prevBtn = document.querySelector("#prevbtn");
const nextBtn = document.querySelector("#nextbtn");
const progress = document.querySelector("#progress");
const progressBar = document.querySelector(".progress-bar");
const currTime = document.querySelector(".current-time");
const totalDuration = document.querySelector(".duration-time");
const volume = document.querySelector("#volume");
const layer = document.querySelector(".layer");
const volBar = document.querySelector(".bar");
const progressLine = document.querySelector(".progress-line");
const volumeRange = document.querySelector(".volumerange");
const repeatBtn = document.querySelector("#repeat");
const likeBtn = document.querySelector("#like");
const likeIcon = document.querySelector("#likeicon");
const songListBtn = document.querySelector("#list");
const songList = document.querySelector("#songs-list");
const listCloseBtn = document.querySelector("#listclose");
// songs array

const subtitles = [
    {
      "startTime": "0:00",
      "endTime": "0:03",
      "text": "Elle court sur les sentiers"
    },
    {
      "startTime": "0:03",
      "endTime": "0:06",
      "text": "Elle court toute la journée"
    },
    {
      "startTime": "0:06",
      "endTime": "0:12",
      "text": "La Princesse Winesound, elle ne s'arrête jamais"
    },
    {
        "startTime": "0:12",
        "endTime": "0:15",
        "text": "L'escalade est son passe-temps"
    },
    {
        "startTime": "0:15",
        "endTime": "0:18",
        "text": "Elle grimpe toujours plus haut"
    },
    {
        "startTime": "0:18",
        "endTime": "0:24",
        "text": "Plus rien ne l'arrête, surtout pas la météo"
    },
    {
        "startTime": "0:24",
        "endTime": "0:27",
        "text": "Oh météo ..."
    },
    {
        "startTime": "0:27",
        "endTime": "0:31",
        "text": "En doctorat de psycho' elle étudie les fachos"
    },
    {
        "startTime": "0:31",
        "endTime": "0:33",
        "text": "(Dany, dany, dany ...)"
    },
    {
        "startTime": "0:33",
        "endTime": "0:37",
        "text": "La Princesse Winesound, c'est la terreur des machos"
    },
    {
        "startTime": "0:37",
        "endTime": "0:38",
        "text": "(Thémis, thémis ...)"
    }, 
    {
        "startTime": "0:38",
        "endTime": "0:43",
        "text": "Mais mon sujet préféré, c'est bien sûr"
    }, 
    {
        "startTime": "0:43",
        "endTime": "0:45",
        "text": "La météo !"
    }, 
    {
        "startTime": "0:45",
        "endTime": "0:47",
        "text": "Je suis la Princesse Winesound"
    }, 
    {
        "startTime": "0:47",
        "endTime": "0:49",
        "text": "Toujours éclatante, toujours bienveillante"
    }, 
    {
        "startTime": "0:49",
        "endTime": "0:52",
        "text": "Mais surtout fatchigante"
    },
    {
        "startTime": "0:52",
        "endTime": "0:56",
        "text": "La Princesse Winesound"
    },
    {
        "startTime": "0:56",
        "endTime": "0:58",
        "text": "Je cours, je cours !"
    },
    {
        "startTime": "0:58",
        "endTime": "1:02",
        "text": "La Princesse Winesound !"
    },
    {
        "startTime": "1:02",
        "endTime": "1:05",
        "text": "Je cours après ma thèse"
    },
    {
        "startTime": "1:05",
        "endTime": "1:08",
        "text": "Qu'il fasse froid, qu'il fasse chaud"
    },
    {
        "startTime": "1:08",
        "endTime": "1:11",
        "text": "Je veux parler de la météo"
    },
    {
        "startTime": "1:11",
        "endTime": "1:14",
        "text": "Demain j'appelle Thémis, il me faut du renouveau"
    },
    {
        "startTime": "1:14",
        "endTime": "1:17",
        "text": "Je vais changer de thèse, ça sera la météo"
    },
    {
        "startTime": "1:17",
        "endTime": "1:20",
        "text": "Allô Thémis ? Je veux parler de la météo"
    },
    {
        "startTime": "1:20",
        "endTime": "1:26",
        "text": "Allô Dany ? 28 degrés, 85% d'humidité"
    },
    {
        "startTime": "1:26",
        "endTime": "1:32",
        "text": "Changer de thèse (la thèse ...)"
    },
    {
        "startTime": "1:32",
        "endTime": "1:37",
        "text": "Pour la météo !"
    },
    {
        "startTime": "1:37",
        "endTime": "1:41",
        "text": "La Princesse Winesound"
    },
    {
        "startTime": "1:41",
        "endTime": "1:45",
        "text": "La princesse de la météo"
    },
    {
        "startTime": "1:45",
        "endTime": "1:49",
        "text": "Toujours bienveillante"
    },
    {
        "startTime": "1:49",
        "endTime": "1:51",
        "text": "Mais parfois méga chiante"
    },
    {
        "startTime": "1:51",
        "endTime": "1:54",
        "text": "Qu'il fasse froid, qu'il fasse chaud"
    },
    {
        "startTime": "1:54",
        "endTime": "1:57",
        "text": "Et même si y'a rien de nouveau"
    },
    {
        "startTime": "1:57",
        "endTime": "2:01",
        "text": "Je parle encore ..."
    },
    {
        "startTime": "2:01",
        "endTime": "2:06",
        "text": "... de la météo"
    },
    {
        "startTime": "2:06",
        "endTime": "2:29",
        "text": "Princesse de la météo"
    }
  ]


const songs = [
//   {
//     path: 'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/1.mp3',
//     displayName: 'Yıldız Tozu',
//     artist: 'Ozbi',
//     cover: "https://images.genius.com/ee202c6f724ffd4cf61bd01a205eeb47.1000x1000x1.jpg",
//   },
//   {
//     path: 'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/2.mp3',
//     displayName: 'You\'re Somebody Else',
//     artist: 'flora cash',
//     cover: "https://pbs.twimg.com/media/D2NZH-2U4AAL9Xs.jpg",
//   },
//   {
//     path: 'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/3.mp3',
//     displayName: 'Powerless',
//     artist: 'Linkin Park',
//     cover: "https://images.genius.com/c5a58cdaab9f3199214f0e3c26abbd0e.1000x1000x1.jpg",
//   },
//   {
//     path: 'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/4.mp3',
//     displayName: 'Seni Dert Etmeler',
//     artist: 'Madrigal',
//     cover: "https://www.radyomega.fm/wp-content/uploads/2020/04/MADRIGAL-600.jpg",
//   },
//   {
//     path: 'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/5.mp3',
//     displayName: 'Ederlezi',
//     artist: 'Solomun',
//     cover: "https://m.media-amazon.com/images/I/616t0841uvL._SS500_.jpg",
//   },
//   {
//     path: 'https://raw.githubusercontent.com/saranshbhardwaj1999/audio/main/Justin_Bieber_Anyone.mp3',
//     displayName: 'Anyone',
//     artist: 'Justin Bieber',
//     cover: "http://universalmusic.at/website2016/wp-content/uploads/2021/01/jb_anyone-single-cover_hr-1024x1024.jpg",
//   },
//   {
//     path: 'https://raw.githubusercontent.com/saranshbhardwaj1999/audio/main/Justin_Bieber_Hold_On.mp3',
//     displayName: 'Hold On',
//     artist: 'Justin Bieber',
//     cover: "https://www.36vibes.com.ng/wp-content/uploads/2021/03/Justin-bieber-hold-on.jpg",
//   },
//   {
//     path: 'https://raw.githubusercontent.com/saranshbhardwaj1999/audio/main/Jon_Bellion_All_Time_Low.mp3',
//     displayName: 'All Time Low',
//     artist: 'Jon Bellion',
//     cover: "https://www.teahub.io/photos/full/251-2512846_all-time-low-jon-bellion-album-art.jpg",
//   },
];




// deafult song index 

let songIndex = 2;

// song default state

let isPlaying = false;

// song pause function

function playSong(){
  isPlaying = true;
  playPauseBtn.classList.replace("fa-play","fa-pause");
  audio.play();
}

// song play function

function pauseSong(){
  isPlaying = false;
  playPauseBtn.classList.replace("fa-pause","fa-play");
  audio.pause();
}

function updateLyrics(currentTime) {
  const currentTimeStr = formatTime(currentTime);
  let currentIndex = 0;
  for (let i = 0; i < subtitles.length; i++) {
    const subtitle = subtitles[i];
    if (currentTimeStr >= subtitle.startTime && currentTimeStr < subtitle.endTime) {
      currentIndex = i;
      break;
    }
  }

  // Gérez les cas particuliers au début et à la fin de la musique
  if (currentIndex === 0) { // Cas particulier du début de la musique
    line1.textContent = subtitles[currentIndex].text;
    line1.classList.add("current-line");
    line1.classList.remove("other-line");

    line2.textContent = subtitles[currentIndex + 1].text;
    line2.classList.remove("current-line");
    line2.classList.add("other-line");

    line3.textContent = subtitles[currentIndex + 2].text;
    line3.classList.remove("current-line");

  } else if (currentIndex === subtitles.length - 1) { // Cas particulier fin de la musique
    line1.classList.remove("current-line");
    line1.classList.add("other-line");

    line2.classList.remove("current-line");
    line2.classList.add("other-line");

    line3.textContent = subtitles[currentIndex].text;
    line3.classList.remove("other-line");
    line3.classList.add("current-line");
  } else {
    line1.textContent = subtitles[currentIndex - 1].text;
    line1.classList.remove("current-line");
    line1.classList.add("other-line");

    line2.textContent = subtitles[currentIndex].text;    
    line2.classList.remove("other-line");
    line2.classList.add("current-line");


    line3.textContent = subtitles[currentIndex + 1].text;
    line3.classList.remove("current-line");
    line3.classList.add("other-line");

  }
}

// loading songs

function loadSong(song){
    img.src = song.cover;
    title.textContent = song.displayName;
    audio.src = song.path;
};

// previous song 

function prevSong(){
//   songIndex--;
//   if(songIndex < 0){
//     songIndex = songs.length - 1;
//   }
//   loadSong(songs[songIndex]);
//   playSong();
}

// next song

function nextSong(){
//   songIndex++;
//   if(songIndex > songs.length-1){
//     songIndex = 0;
//   }
//   loadSong(songs[songIndex]);
//   playSong();
}

// progress bar function
console.log(audio.duration);

function updateProgress(e){
  if (isPlaying) {
    const { duration, currentTime } = e.target;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.value = progressPercent;
    progressLine.style.width = `${progressPercent}%`;
    if(progressPercent==100){
      return nextSong();
    }
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      totalDuration.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    // Calculate display for currentTime
    let currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currTime.textContent = `${currentMinutes}:${currentSeconds}`;
    updateLyrics(audio.currentTime);
  }
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

function progressSlide(e){
  const { value } = e.target;
  const progressTime = Math.ceil((audio.duration / 100) * value);
  audio.currentTime = progressTime;
  console.log(progressTime);
    if(!isPlaying) {
      progressLine.style.width = `${value}%`;    
   }
}

function volumeBar(){
  layer.classList.toggle('hide');
  setTimeout(()=>{
    if(layer.classList.contains("hide")){
      layer.classList.remove("hide");
    }
  }, 5000);
}

function setVolume(){
  audio.volume = volumeRange.value;
  const barWidth = (volumeRange.value/1)*100;
  volBar.style.width = `${barWidth}%`;
}

function repeat(){
  repeatBtn.classList.toggle('color');
  const repeatBtnState = repeatBtn.classList.contains("color");
  if(repeatBtnState){
    audio.loop = true;
    loadSong();
  }else{
    audio.loop = false;
    loadSong();
  }
  
}

// function like(){
//   likeBtn.classList.toggle('color');
//   if(likeBtn.classList.contains("color")){
//   likeIcon.classList.replace("far","fas");
// }else{
//   likeIcon.classList.replace("fas","far");
// }}

function like() {
  if (likeBtn.classList.toggle('color')) {
    likeIcon.classList.replace('far', 'fas');
  } else {
    likeIcon.classList.replace('fas', 'far');
  }
}

function musicList(){
  songList.classList.toggle("showlist");
  listCloseBtn.addEventListener("click",()=>{
    songList.classList.remove("showlist");
  })
}


playPause.addEventListener("click", () => (isPlaying ? pauseSong() : playSong())); 
prevBtn.addEventListener("click",prevSong);
nextBtn.addEventListener("click",nextSong);
audio.addEventListener("timeupdate", updateProgress);
progress.addEventListener("input", progressSlide);
volume.addEventListener("click", volumeBar);
volumeRange.addEventListener("input",setVolume);
repeatBtn.addEventListener("click", repeat);
likeBtn.addEventListener("click", like);
songListBtn.addEventListener("click",musicList);