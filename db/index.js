const mongoose = require('mongoose')
const uri = "mongodb+srv://UserSend:Bw0MjIKgAL1gTCbx@usertesting.lbccf.mongodb.net/digitalpenmanship?retryWrites=true&w=majority";

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
