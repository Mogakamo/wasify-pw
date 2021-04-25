//app server
const { createServer } = require('http')
const path = require('path')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev})
const handle = app.getRequestHandler()

const PORT = process.env.PORT || 3000

app.prepare().then(_ => {
    const server = createServer((req, res) => {
        if (req.url === '') {
            
        } else {
            
        }
    })
})