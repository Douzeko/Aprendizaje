import { Request, Response } from "express";
import service from "../service/personService"
async function get(Req:Request, res:Response) {
    try {
        const data = await service.getPersons()
        
        if (data.length > 0) {
           res.status(200).json(data)
        }

        else{
         res.status(400).send("Error al mostrar los datos")
        }
    
    } catch (ex:any) {
        console.log(ex.message)
    }
}

export default{
    get
}