var io = require('socket.io')
    , fs = require('fs')
    , currentSong = ""
    
io = io.listen(4555);
    
io.sockets.on('connection', function (socket) {
    console.log('Have receive socket');
    receiveSocket = socket;
    
    socket.on('currentSong', function(song) {
        //console.log('received song name: ', song);
        if (song != currentSong) {
            currentSong = song;
            fs.writeFile("/tmp/test", song === null ? "" : song, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
    });

    socket.on('disconnect', function () {
        console.log('disconnecting');
    });
});
