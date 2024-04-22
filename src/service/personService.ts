import prisma from "../db/db"

async function getPersons() {
try {
   return await prisma.person.findMany()
} catch (ex:any) {
    throw new Error(`Error al acceder, papu ${ex.message}`)
}
} 

export default{
    getPersons
}