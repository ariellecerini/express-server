const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const PubSend = require('../controllers/pub-send')

const router = express.Router()

router.post('/userDispatch', UserCtrl.createUserDispatch)

router.post('/pubDispatch', PubSend.createPubDispatch)

module.exports = router
