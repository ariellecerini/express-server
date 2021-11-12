const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userDispatch = new Schema(
    {
        name: { type: String, required: true },
        data: { type: Array, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('LiveUserData', userDispatch)
