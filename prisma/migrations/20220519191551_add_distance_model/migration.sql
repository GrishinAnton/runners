-- CreateTable
CREATE TABLE "DistanceModel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "distance" INTEGER NOT NULL,
    "temp" INTEGER NOT NULL,
    "stageId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "DistanceModel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserModel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DistanceModel_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "StageModel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
