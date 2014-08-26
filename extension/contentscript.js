function gsClosure() {
    var socket = io.connect('http://localhost:4555')
    socket.on('connect', function() {
        console.log('connected')
    });
    
    setInterval(function() {
        if (socket === null) {
            return;
        }
        var song = Grooveshark.getCurrentSongStatus();
        if (song === null || song.song === null) {
            //console.log('emitting nil');
            socket.emit('currentSong', null);
            return;
        }
        
        var name = song.song.songName;
        var artist = song.song.artistName;

        //console.log('emitting');
        socket.emit('currentSong', name + " by " + artist);

    }, 3000);
}

window.addEventListener('load', function() {
    var socket_script = document.createElement('script');
    socket_script.src = "//localhost:4555/socket.io/socket.io.js";
    document.body.appendChild(socket_script);
    
    setTimeout(function() {
        var script = document.createElement('script');
        script.textContent = ";(" + gsClosure.toString() + ")();";
        document.body.appendChild(script);
    }, 500);
}, false);
