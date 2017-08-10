const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConversationSchema = new Schema({
    messages: [{
        text: Schema.Types.String,
        sendDate: Schema.Types.Date,
        isRead: Schema.Types.Boolean,
    }],
});

module.exports = mongoose.model('Conversation', ConversationSchema);
