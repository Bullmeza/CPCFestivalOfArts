function pause() {
    let vids = document.getElementsByClassName("vimeo");
    for (var i = 0; i < vids.length; i++) {
        new Vimeo.Player(vids[i]).pause();
    }
}

$(document).ready(function () {
    var iframe = $('#intro_vid');
    var player = new Vimeo.Player(iframe);

    player.on('ended', function () {
        window.location.replace("#title0");
    });
});

