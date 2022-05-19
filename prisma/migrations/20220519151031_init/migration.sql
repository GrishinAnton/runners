-- CreateTable
CREATE TABLE "UserModel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "birthday" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CompetitionModel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "StageModel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "competitionId" INTEGER NOT NULL,
    CONSTRAINT "StageModel_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "CompetitionModel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "UserModel_name_surname_key" ON "UserModel"("name", "surname");

-- CreateIndex
CREATE UNIQUE INDEX "CompetitionModel_name_key" ON "CompetitionModel"("name");
