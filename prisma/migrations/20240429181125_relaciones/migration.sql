/*
  Warnings:

  - The primary key for the `Person` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idPerson` on the `Person` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Person` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `Person` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "Person_idPerson_key";

-- AlterTable
ALTER TABLE "Person" DROP CONSTRAINT "Person_pkey",
DROP COLUMN "idPerson",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Person_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "nameProduct" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "idPerson" TEXT NOT NULL,
    "idProduct" TEXT NOT NULL,
    "invoiceDate" TEXT NOT NULL,
    "invoiceStatus" BOOLEAN NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_id_key" ON "Invoice"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_idPerson_key" ON "Invoice"("idPerson");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_idProduct_key" ON "Invoice"("idProduct");

-- CreateIndex
CREATE UNIQUE INDEX "Person_id_key" ON "Person"("id");

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_idPerson_fkey" FOREIGN KEY ("idPerson") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
