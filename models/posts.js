const mongoose = require('mongoose');
const Schema = mongoose.Schema,
// const { ObjectId } = Schema;
    ObjectId = Schema.ObjectId;

const postsSchema = new Schema({
    message: String,
    // users {
    //     type: Schema.ObjectId
    //     ref: 'users'
    // }
    // user: ObjectId

    // author    : ObjectId,
    // title     : String,
    // body      : String,
    // date      : Date
});

mongoose.model('posts', postsSchema);
