// const io = require('socket.io');
const main = require('./myFunctions');
const $ = require('jquery/dist/jquery');

// main.foo();

$('#my-button').click(testFunction);

function createRoom() {
    console.log("PDio")
   // let socket = io('/rooms');
   // socket.on('connect', () => {
   //     console.log(socket.id);
   // });
   //
   // socket.on('my message', function (msg) {
   //     console.log(msg)
   // })
}

function testFunction() {
    console.log(`[[ testFunction ]] called`);
}