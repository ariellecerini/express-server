const pubDispatch = require('../models/pn-model')

createPubDispatch = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Unable to dispatch message history',
        })
    }

    const LivePubData = new pubDispatch(body)

    if (!LivePubData) {
        return res.status(400).json({ success: false, error: err })
    }
    LivePubData
    .save()
    .then(() => {
        return res.status(201).json({
            success: true,
            id: LivePubData._id,
            message: 'pubDispatch sent created!',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
        })
    })
}
module.exports = {
createPubDispatch
}

