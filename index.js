const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const userRouter = require('./routes/app.js')

const app = express()
const apiPort = 8000

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));



//app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
//app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'Unable to dispatch user data due to connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.post('/userDispatch', (req, res) => {
    console.log(req.body.dispatch[0]['dwell time variance values']);
})


app.use('/api', userRouter)



app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

