class MessageBody {
    constructor(from, to, text, type) {
        this.from = from;
        this.to = to;
        this.text = text;
        this.type = type;
    }
}

class Chat {
    constructor(from, to) {
        this.from = from;
        this.to = to;
        // Max groups of messages
        this.setMaxGroups(2);
        // Messages per group
        this.setMaxMessages(3);
        // Past Messages
        this.history = [];
        // Current displayed messages
        this.current = [];
    }

    setMaxGroups(max) {
        if(max > 0) {
            this.maxGroups = max;
        }
    }

    setMaxMessages(max) {
        if(max > 0) {
            this.maxMessages = max;
        }
    }

    addMessage(messageBody) {
        // [ {A}, {B}, {B}, {B} ]
        this.history.push(messageBody);
        this.current.push(messageBody);
        if(this.current.length > this.maxMessages) {
            this.current.shift();
        }
    }

}

module.exports = {
    MessageBody: MessageBody,
    Chat: Chat
};