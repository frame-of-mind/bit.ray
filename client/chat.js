const $ = require('jquery/dist/jquery');

const SEND = 'send';
const RECEIVE = 'receive';

var chat = `
<div class="popup-box chat-popup popup-box-on" id="qnimate">
    <div class="popup-head">
        <!--<div class="popup-head-left pull-left"><img src="http://bootsnipp.com/img/avatars/bcf1c0d13e5500875fdd5a7e8ad9752ee16e7462.jpg" alt="iamgurdeeposahan"> Gurdeep Osahan</div>-->
        <!--<div class="popup-head-right pull-right">-->
        <!--&lt;!&ndash;<div class="btn-group">&ndash;&gt;-->
        <!--&lt;!&ndash;<button class="chat-header-button" data-toggle="dropdown" type="button" aria-expanded="false">&ndash;&gt;-->
        <!--&lt;!&ndash;<i class="fa fa-cog"></i> </button>&ndash;&gt;-->
        <!--&lt;!&ndash;<ul role="menu" class="dropdown-menu pull-right">&ndash;&gt;-->
        <!--&lt;!&ndash;<li><a href="#">Media</a></li>&ndash;&gt;-->
        <!--&lt;!&ndash;<li><a href="#">Block</a></li>&ndash;&gt;-->
        <!--&lt;!&ndash;<li><a href="#">Clear Chat</a></li>&ndash;&gt;-->
        <!--&lt;!&ndash;<li><a href="#">Email Chat</a></li>&ndash;&gt;-->
        <!--&lt;!&ndash;</ul>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->

        <!--<button data-widget="remove" id="removeClass" class="chat-header-button pull-right" type="button"><i class="fa fa-power-off"></i></button>-->
        <!--</div>-->
    </div>
    <div id="popup-messages" class="popup-messages">
        <div id="direct-chat-messages" class="direct-chat-messages">
            <div class="direct-chat-msg">
                <div class="direct-chat-info clearfix">
                    <span class="direct-chat-name pull-left" id="sender">Osahan</span>
                </div>
                <div class="direct-chat-text" id="message-text">
                    Hey bro, how’s everything going ?
                </div>
                <div class="direct-chat-info clearfix" id="send-time">
                    <span class="direct-chat-timestamp pull-right">3.36 PM</span>
                </div>
            </div>
            <div class="direct-chat-msg">
                <div class="direct-chat-info clearfix">
                    <span class="direct-chat-name pull-right" id="sender">Maic</span>
                </div>
                <div class="direct-chat-text" id="message-text">
                    Hey bro, how’s everything going ?
                </div>
                <div class="direct-chat-info clearfix" id="send-time">
                    <span class="direct-chat-timestamp pull-right">3.36 PM</span>
                </div>
            </div>
        </div>
    </div>
    <div class="popup-messages-footer">
        <textarea id="status_message" placeholder="Type a message..." rows="10" cols="40" name="message"></textarea>
        <!--&lt;!&ndash;<div class="btn-footer">&ndash;&gt;-->
        <!--&lt;!&ndash;<button class="bg_none"><i class="fa fa-film"></i> </button>&ndash;&gt;-->
        <!--&lt;!&ndash;<button class="bg_none"><i class="fa fa-video-camera"></i> </button>&ndash;&gt;-->
        <!--&lt;!&ndash;<button class="bg_none"><i class="fa fa-paperclip"></i> </button>&ndash;&gt;-->
        <!--&lt;!&ndash;<button class="bg_none pull-right"><i class="fa fa-thumbs-up"></i> </button>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
    </div>
</div>`;

var appendToChat = function (messageBody, type) {
    let toAppend = type === RECEIVE ? receivedMessage(messageBody) : sentMessage(messageBody);
    $('#direct-chat-messages').append(toAppend);
};

function receivedMessage(messageBody) {
    let html = `
        <div class="direct-chat-msg">
            <div class="direct-chat-info clearfix">
                <span class="direct-chat-name pull-left" id="sender">${messageBody.from}</span>
            </div>
            <div class="direct-chat-text pull-left" id="message-text">
                ${messageBody.text}
            </div>
            <div class="direct-chat-info clearfix" id="send-time">
                <span class="direct-chat-timestamp pull-right">now</span>
            </div>
        </div>`;
    return html;
}

function sentMessage(messageBody) {
    let html =`
    <div class="direct-chat-msg">
        <div class="direct-chat-info clearfix">
            <span class="direct-chat-name pull-right" id="sender">me: ${messageBody.from}</span>
        </div>
        <div class="direct-chat-text" id="message-text">
            ${messageBody.text}
        </div>
        <div class="direct-chat-info clearfix" id="send-time">
            <span class="direct-chat-timestamp pull-right">now</span>
        </div>
    </div>`;
    return html;
}

module.exports = {
    SEND: SEND,
    RECEIVE: RECEIVE,
    chat: chat,
    appendToChat: appendToChat
};