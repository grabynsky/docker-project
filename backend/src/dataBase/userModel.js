const { Schema, model } = require('mongoose');

const UserShema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

model.exports = model('user', UserShema)