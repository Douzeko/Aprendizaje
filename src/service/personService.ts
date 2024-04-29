import prisma from "../db/db";
import { PersonModel } from "../models/PersonModel";
import { PersonBody } from "../models/bodys/PersonBody";

function toUpperCaseModel(body: PersonModel) {
  if (body) {
    body.personInfo.name = body.personInfo.name.toUpperCase();
  }
}

function toUpperCaseBody(body: PersonBody) {
  if (body) {
    body.personInfo.name = body.personInfo.name.toUpperCase();
  }
}

async function getPersons() {
  try {
    const data = await prisma.person.findMany({ where: { isActive: true } });
    const mappedData: PersonModel[] = data.map((item) => ({
      id: item.id,
      personInfo: {
        name: item.name,
        phone: item.phone,
      },
    }));
    return mappedData;
  } catch (ex: any) {
    throw new Error(`Error al acceder, papu ${ex.message}`);
  } finally {
    await prisma.$disconnect();
  }
}

async function getPersonByID(id: any) {
  try {
    return await prisma.person.findUnique({ where: { id: id } });
  } catch (ex: any) {
    throw new Error(`Error al acceder, papu ${ex.message}`);
  } finally {
    await prisma.$disconnect();
  }
}

async function addPerson(body: PersonModel) {
  try {
    if (body) {
      toUpperCaseModel(body);
      return prisma.person.create({
        data: {
          name: body.personInfo.name,
          phone: body.personInfo.phone,
          isActive: true,
        },
      });
    }
    return null;
  } catch (ex: any) {
    throw new Error(`Error al crear, papu ${ex.message}`);
  } finally {
    await prisma.$disconnect();
  }
}

async function updatePerson(id:any, body: PersonBody) {
  try {
    if (body && id && body.personInfo) {
      toUpperCaseBody(body);
      return await prisma.person.update({
        where: { id: id },
        data: {
          name: body.personInfo.name,
          phone: body.personInfo.phone,
        },
      });
    }
    return null;
  } catch (ex: any) {
    throw new Error(`Error al actualizar, papu ${ex.message}`);
  } finally {
    await prisma.$disconnect();
  }
}

async function deletePerson(id:any) {
  try {
    if(id){
      return await prisma.person.update({
        where: { id: id },
        data: {
          isActive: false,
        },
      });
    }
  }catch (ex: any) {
    throw new Error(`Error al eliminar, papu ${ex.message}`);
  }finally {
    await prisma.$disconnect();
  }
}

export default {
  getPersons,
  getPersonByID,
  addPerson,
  updatePerson,
  deletePerson,
};
