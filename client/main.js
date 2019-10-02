var io = require('socket.io-client');
const main = require('./myFunctions');
const $ = require('jquery/dist/jquery');

// main.foo();

$('#my-button').click(testFunction);
$('#create-room-button').click(createRoom);

function createRoom() {
   console.log("[[ createRoom ]] called");
   let socket = io('http://localhost:3000');
   socket.on('connect', () => {
       console.log(socket.id);
   });

   socket.on('my message', function (msg) {
       console.log(msg)
   })
}

function testFunction() {
    console.log(`[[ testFunction ]] called`);
}