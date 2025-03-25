function openWhatsApp() {
    const phoneNumber = '+5531983364354'; // Substitua pelo número correto no formato internacional
    //const url = `https://wa.me/${phoneNumber}`;
    const url = `https://wa.link/ym9y9p`;
    window.open(url, '_blank');
}

const audioFiles = [
    "assets/sample.mpeg",
    "assets/sample_new.mpeg"
];

let currentIndex = 0;

function loadAudio(index) {
    audioPlayer.src = audioFiles[index];
    audioPlayer.play();
}

function prevAudio() {
    currentIndex = (currentIndex - 1 + audioFiles.length) % audioFiles.length;
    loadAudio(currentIndex);
}

function nextAudio() {
    currentIndex = (currentIndex + 1) % audioFiles.length;
    loadAudio(currentIndex);
}

//loadAudio(currentIndex);