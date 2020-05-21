function pause() {
    let vids = document.getElementsByClassName("vimeo");
    for (var i = 0; i < vids.length; i++) {
        new Vimeo.Player(vids[i]).pause();
    }
}

