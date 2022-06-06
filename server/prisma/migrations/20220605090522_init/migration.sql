/*
  Warnings:

  - You are about to alter the column `temp` on the `DistanceModel` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `time` on the `DistanceModel` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DistanceModel" (
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
INSERT INTO "new_DistanceModel" ("date", "distance", "id", "stageId", "temp", "time", "userId") SELECT "date", "distance", "id", "stageId", "temp", "time", "userId" FROM "DistanceModel";
DROP TABLE "DistanceModel";
ALTER TABLE "new_DistanceModel" RENAME TO "DistanceModel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
