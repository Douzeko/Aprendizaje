import Server from "./server"
import https from "https"

const port = 3000

Server.listen(port,()=>{
    console.log(`sevidor escuchando en el puerto: ${port}`)
})
