// Reply with two static messages

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken
    reply(reply_token)
    res.sendStatus(200)
})
app.listen(port)
function reply(reply_token) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer Rgfn4uLSCnZlBiM6EwRe3RJ1U2L8n7Z5uHfhWoufJIGlFP0/ogle143qJbSKYp1/Z/NObAcatCprYNNIYdLpVs8JGEykyklRRIlIMcVhCOzL8X6NwDwBqHQ+DwWQnV+DHImTPG5vp4HZhtufql+31VGUYhWQfeY8sLGRXgo3xvw='
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            type: 'text',
            text: 'Hello'
        },
        {
            type: 'text',
            text: 'How are you?'
        }]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}