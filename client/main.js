const io = require('socket.io');

function createRoom() {
   let socket = io('/rooms');
   socket.on('connect', () => {
       console.log(socket.id);
   });

   socket.on('my message', function (msg) {
       console.log(msg)
   })
}