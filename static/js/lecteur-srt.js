const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const subtitlesDiv = document.getElementById('subtitles');

let currentTime = 0;
let currentSubtitle = null;
let subtitleInterval = null;

// Fonction pour récupérer et parser le fichier SRT
async function getSubtitles() {
  try {
    const response = await fetch('/static/subtitles.srt');
    const text = await response.text();
    const parser = new SRTParser();
    const subtitles = parser.fromSrt(text);
    return subtitles;
  } catch (error) {
    console.error(error);
  }
}

// Fonction pour trouver le sous-titre actuel en fonction du timecode
function findCurrentSubtitle(subtitles) {
  for (const subtitle of subtitles) {
    const startTime = subtitle.start.hours * 3600 + subtitle.start.minutes * 60 + subtitle.start.seconds + subtitle.start.milliseconds / 1000;
    const endTime = subtitle.end.hours * 3600 + subtitle.end.minutes * 60 + subtitle.end.seconds + subtitle.end.milliseconds / 1000;
    if (currentTime >= startTime && currentTime <= endTime) {
      return subtitle;
    }
  }
  return null;
}

// Fonction pour mettre à jour l'affichage des sous-titres
function updateSubtitles() {
  if (currentSubtitle) {
    subtitlesDiv.innerText = currentSubtitle.text;
  } else {
    subtitlesDiv.innerText = '';
  }
}

// Fonction pour démarrer la lecture des sous-titres
async function startSubtitles() {
  const subtitles = await getSubtitles();
  subtitleInterval = setInterval(() => {
    currentTime += 1 / 60; // Incrémenter le temps de 1/60ème de seconde (fréquence d'images vidéo standard)
    currentSubtitle = findCurrentSubtitle(subtitles);
    updateSubtitles();
  }, 16.667); // Mettre à jour l'affichage toutes les 16,667 millisecondes (fréquence d'images vidéo standard)
}

// Fonction pour arrêter la lecture des sous-titres
function stopSubtitles() {
  clearInterval(subtitleInterval);
  currentTime = 0;
  currentSubtitle = null;
  updateSubtitles();
}

// Écouteurs d'événements pour les boutons
startButton.addEventListener('click', startSubtitles);
stopButton.addEventListener('click', stopSubtitles);
