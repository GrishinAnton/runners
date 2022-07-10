-- CreateEnum
CREATE TYPE "EUserRole" AS ENUM ('ADMIN', 'EDITOR', 'USER');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "roleid" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userlist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "name" "EUserRole" NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userlist_name_surname_birthday_key" ON "userlist"("name", "surname", "birthday");
