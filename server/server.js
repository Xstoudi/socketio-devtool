const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

const port = process.env.HTTP_PORT || 3000

app
    .use('/public', express.static(path.join(__dirname, '..', 'public')))
    .use(express.static(path.join(__dirname, '..', 'node_modules')))
    .use((req, res) => res.sendFile(path.join(__dirname, '..', 'index.html')))

app.listen(port, () => console.log(`Listening on port ${port}`))