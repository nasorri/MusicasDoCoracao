function openWhatsApp() {
    const phoneNumber = '+5531983364354'; // Substitua pelo número correto no formato internacional
    //const url = `https://wa.me/${phoneNumber}`;
    const url = `https://wa.link/ym9y9p`;
    window.open(url, '_blank');
}

function openForm() {
    const url = `https://forms.gle/KSGrS9kXQsovQ7tFA`;
    window.open(url, '_blank');
}

const audioFiles = [
    "assets/sample_01.mpeg",
    "assets/sample_02.mpeg",
    "assets/sample_03.mpeg",
    "assets/sample_04.mpeg",
    "assets/sample_05.mpeg",
    "assets/sample_06.mpeg",
    "assets/sample_07.mpeg",
    "assets/sample_08.mpeg"
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