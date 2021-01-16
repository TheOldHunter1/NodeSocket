var socket = io();

// on escuchar
socket.on('connect', function() {
    console.log('conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('perdimos al servidor');
})

socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});

// emit: enviar informacion 

socket.emit('enviarMensaje', {
    usuario: 'luis',
    mensaje: 'hola mundo!'
}, function(resp) {
    console.log(resp);
});