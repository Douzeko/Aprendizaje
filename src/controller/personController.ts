import { Request, Response } from "express";
import service from "../service/personService"

async function get(req:Request, res:Response) {
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

async function getById(req:Request, res:Response) {
    try {
        const data = await service.getPersonByID(req.query.id)
        if (data) {
            res.status(200).json(data)
        }
        else {
            res.status(400).send("Error al mostrar los datos")
        }
    } catch (ex:any) {
        console.log(ex.message)
    }
}

async function postProduct(req:Request, res:Response) {
    try {
        const data = await service.addPerson(req.body)
        if (data) {
            res.status(200).send(`Se ingreso el producto bajo el id: ${data.id}`);
        }
        else {
            res.status(400).send("Error al agregar datos")
        }
    } catch (ex:any) {
        console.log(ex.message)
    }
}

async function putProduct(req:Request, res:Response) {
    try {
        const data = await service.updatePerson(req.query.id, req.body)
        if(data){
            res.status(200).send(`Se actualizo el registro bajo el id: ${data.id}`);
        }
        else {
            res.status(400).send("Error al updatear los datos")
        }
    } catch (ex:any) {
        console.log(ex.message)
    }
}

async function deleteProduct(req:Request, res:Response) {
    try {
        const data = await service.deletePerson(req.query.id)
        if(data){
            res.status(200).send(`Se elimino el registro bajo el id: ${data.id}`);
        }
        else {
            res.status(400).send("Error al eliminar los datos")
        }
    } catch (ex:any) {
        console.log(ex.message)
    }
}

export default{
    get,
    getById,
    postProduct,
    putProduct,
    deleteProduct
}