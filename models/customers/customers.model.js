const mongoose = require('mongoose');

const alluserSchema = new mongoose.Schema(
    {
        username: {type: String},
        password: {type: String},
        fullname: {type: String},
        customerId: {type: String},
        createAt: {type: Date}
    },
    {timestamp: true}
);

const alluser = mongoose.model('All_user', alluserSchema);
module.exports = alluser