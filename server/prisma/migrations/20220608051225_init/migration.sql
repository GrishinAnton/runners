-- CreateTable
CREATE TABLE "UserModel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "birthday" DATETIME NOT NULL,
    "gender" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CompetitionModel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" DATETIME
);

-- CreateTable
CREATE TABLE "StageModel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "competitionId" INTEGER NOT NULL,
    CONSTRAINT "StageModel_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "CompetitionModel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DistanceModel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time" INTEGER NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "distance" INTEGER NOT NULL,
    "temp" INTEGER NOT NULL,
    "stageId" INTEGER,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "DistanceModel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserModel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DistanceModel_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "StageModel" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "UserModel_name_surname_birthday_key" ON "UserModel"("name", "surname", "birthday");

-- CreateIndex
CREATE UNIQUE INDEX "CompetitionModel_name_startDate_key" ON "CompetitionModel"("name", "startDate");
