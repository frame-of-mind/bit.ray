const io = require('socket.io-client');
const main = require('./myFunctions');
const $ = require('jquery/dist/jquery');
const models = require('../common/models');

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log(`[[ ${socket.id} ]] connected.`);
});

socket.on('connected_socket', socketInfo => {
    //TODO prendi tutti i socket
    // console.log(socketInfo);
    // for (var k in Object.keys(socketInfo)) {
    //     console.log(socketInfo[k]);
    // }
});

socket.on('my_message', function (body) {
    let from = body.from;
    let to = body.to; // == socket.id
    let text = body.text;
    let type = body.type;
    console.log(`[[ ${socket.id} ]] message received: "${text}".`);
});

$('#create-room-button').click(createRoom);
$('#connect-to-socket-button').click(sendMessageToSocket);

function createRoom() {
    console.log(`[[ ${socket.id} ]] called "createRoom" method.`);
}

function sendMessageToSocket() {
    let socketId = $('#connect-to-socket-input').val();
    let text = $('#message-socket-input').val();

    let message = new models.MessageBody(socket.id, socketId, text, 'TEXT');

    console.log(`[[ ${socket.id} ]] wants to send to [[ ${socketId} ]] this message: "${text}"`);
    socket.emit('say_to_someone', message);
}