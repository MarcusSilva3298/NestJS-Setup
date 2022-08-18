/*
  Warnings:

  - You are about to drop the `base` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "base";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");