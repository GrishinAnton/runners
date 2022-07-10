/*
  Warnings:

  - Changed the type of `gender` on the `usermodel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "UserGender" AS ENUM ('MALE', 'FEMALE');

-- AlterTable
ALTER TABLE "usermodel" DROP COLUMN "gender",
ADD COLUMN     "gender" "UserGender" NOT NULL;
