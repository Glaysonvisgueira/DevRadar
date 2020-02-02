import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.109:3333/', {
    autoConnec: false,
});

function subscribeToNewsDevs(subscribeFunction){
    socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    };
    socket.connect();

    
}

function disconnect(){
    if (socket.connect){
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewsDevs,
};