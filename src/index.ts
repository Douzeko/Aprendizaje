import Server from "./server"
import  env  from "dotenv";

env.config();

const port = 3000

Server.listen(port,()=>{
    console.log(`sevidor escuchando en el puerto: ${port}`)
})