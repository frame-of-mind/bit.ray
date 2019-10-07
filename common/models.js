class MessageBody {
    constructor(from, to, text, type) {
        this.from = from;
        this.to = to;
        this.text = text;
        this.type = type;
    }
}

module.exports = {
    MessageBody: MessageBody
};