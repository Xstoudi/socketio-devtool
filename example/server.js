const io = require('socket.io')()

io.on('connection', client => {
    console.log('Someone is connected')
    client.on('hello', args => {
        console.log('Received "hello" with args "' + args + '"')
        client.emit('howareyou', { how: 'fine' })
    })
    client.on('bye', args => {
        console.log('Received "bye" with args "' + args + '"')
        client.emit('bye', 'see ya')
    })
})
io.listen(3000)