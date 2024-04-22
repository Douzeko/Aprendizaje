-- CreateTable
CREATE TABLE "Person" (
    "idPerson" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("idPerson")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_idPerson_key" ON "Person"("idPerson");
