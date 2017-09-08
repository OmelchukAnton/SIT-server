const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConversationSchema = new Schema({
    messages: [{
        whoSend: Schema.Types.String,
        text: Schema.Types.String,
        sendTime: Schema.Types.String,
        isRead: Schema.Types.Boolean,
    }],
});

module.exports = mongoose.model('Conversation', ConversationSchema);
