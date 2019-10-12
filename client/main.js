const io = require('socket.io-client');
const main = require('./myFunctions');
const $ = require('jquery/dist/jquery');
const models = require('../common/models');

const socket = io('http://localhost:3000');

var chatTemplate = require('./chat');

var chats = {};
var chatsContatiner = $('#chats');

// client on connect generate a UID
// Emit it to server
socket.on('connect', () => {
    // Se è null lo genero
    let randomlyGeneratedUID = localStorage.getItem('uniqueId');
    if(randomlyGeneratedUID === null) {
        // random ID
        randomlyGeneratedUID = Math.random().toString(36).substring(3, 16) + +new Date;
        localStorage.setItem('uniqueId', randomlyGeneratedUID);
    }
    // Emit di quello che c'è in localStorage.getItem('uniqueId')
    socket.emit('register', randomlyGeneratedUID);

    console.log(`socket [[ ${socket.id} ]] connected with UID [[ ${randomlyGeneratedUID} ]]`);
});

socket.on('connected_socket', socketInfo => {
    //TODO prendi tutti i socket
    // console.log(socketInfo);
    // for (var k in Object.keys(socketInfo)) {
    //     console.log(socketInfo[k]);
    // }
});

socket.on('my_message', function (body) {
    console.log("chats[body.from] ", chats[body.from]);
    if(chats[body.from] === undefined) {
        chats[body.from] = new models.Chat(body.from, body.to);

        // Append new chat to $('#chats')
        chatsContatiner.append(chatTemplate.chat)
    }
    addMessageToChat(body.from, body);
    // Change text

    console.log(`[[ ${localStorage.getItem('uniqueId')} ]] message received: "${body.text}".`);
});

$('#create-room-button').click(createRoom);
$('#connect-to-uid-button').click(sendMessageToUID);

function createRoom() {
    console.log(`[[ ${socket.id} ]] called "createRoom" method.`);
}

function sendMessageToUID() {
    let receiverUID = $('#connect-to-uid-input').val();
    let text = $('#message-uid-input').val();

    let message = new models.MessageBody(localStorage.getItem('uniqueId'), receiverUID, text, 'TEXT');
    if(chats[message.to] === undefined) {
        chats[message.to] = new models.Chat(message.to, message.from);
    }
    addMessageToChat(message.to, message);
    // Change text

    console.log(`[[ ${localStorage.getItem('uniqueId')} ]] wants to send to [[ ${receiverUID} ]] this message: "${text}"`);
    socket.emit('say_to_someone', message);
}

function addMessageToChat(chatId, messageBody) {
    chats[chatId].addMessage(messageBody);
    console.log(chats);
}