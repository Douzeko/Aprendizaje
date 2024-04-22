import  Express  from "express";
import morgan from "morgan";
import route from "../src/rute/personRute"

const app = Express()
app.use(morgan("dev"))
app.use(Express.json())
app.use(Express.urlencoded({extended:true}))
app.use("/person", route)
app.get("/home",(req,res)=>{
    res.send("Este es mi servidor")
})
export default app;

