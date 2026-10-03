const http = require('http')
const { buffer } = require('stream/consumers')

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {'Content-type': 'text/html'})

        res.end(`
            <h1>Send email</h1>
            <form method="post" action="/">
                <input name="email" type="email" placeholder="Enter your email"/> 
                <button type="sumbit">Send email</button>
            </form>
            `)
    } else if  (req.method === 'POST') {
        const body = [] 
        res.writeHead(200, {'Content-type': 'text/html: charset=utf-8' })

        req.on('data', data =>{
            body.push(Buffer.from(data))
        })

        req.on('end', () => {
            const message = body.toString().split('=')[1]

            res.end(`Email added: ${message} `)
        })
    }
})

server.listen(3000, () => {
    console.log ('server ishlayabdi')
})