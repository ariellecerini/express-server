const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pubDispatch = new Schema(
    {   
        senderId: { type: String, required: false },
        text: { type: String, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('LivePubData', pubDispatch)





