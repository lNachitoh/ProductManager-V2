import express from 'express'
import {  engine  } from 'express-handlebars'
import productsRouter from '../routers/products.routers.js'
import carritoRouter from '../routers/carts.routers.js'
import viewsRouter from '../routers/views.route.js'
import {  Server  } from 'socket.io'


const app = express()
const PORT = 8080


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('src/public'))


app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', 'src/views')


app.use((req, res, next) => {
    req.io = io
    next()
})

const server = app.listen(PORT, ()=> {
    console.log(`El servidor esta corriendo en la direccion: http://localhost:${PORT}`)
})

app.use('/api/products',productsRouter)
app.use('/api/carts',carritoRouter)
app.use ('/', viewsRouter)


const io = new Server(server)

io.on('connection', (socket)=>{
    console.log(`El usuario ${socket.id} se ha conectado`)

    socket.on('disconnect', (socket)=>{
        console.log(`Un usuario se ha desconectado`)
    })
})