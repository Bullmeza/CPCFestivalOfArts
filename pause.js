let audio = []
let spinners;

window.onload = function () {
    const players = document.getElementsByClassName("plyr");
    for (var x = 0; x < players.length; x++) {
        audio.push(new Plyr(players[x]));
    }
    spinners = document.getElementsByClassName("audio_player");
}


function pause() {
    let vids = document.getElementsByClassName("vimeo");
    for (var i = 0; i < vids.length; i++) {
        new Vimeo.Player(vids[i]).pause();
    }
    for (var i = 0; i < audio.length; i++) {
        audio[i].pause();
        audio[i].on("play", play);
        audio[i].on("pause", pauseSpinner);
    }

}

function play() {
    for (var x = 0; x < spinners.length; x++) {
        spinners[x].classList.add("rotate");
    }
}

function pauseSpinner() {
    for (var x = 0; x < spinners.length; x++) {
        spinners[x].classList.remove("rotate");
    }
}

$(document).ready(function () {
    var iframe = $('#intro_vid');
    var player = new Vimeo.Player(iframe);

    player.on('ended', function () {
        window.location.replace("#title0");
    });
});

