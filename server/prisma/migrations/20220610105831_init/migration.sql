-- CreateTable
CREATE TABLE "UserModel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,

    CONSTRAINT "UserModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompetitionModel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),

    CONSTRAINT "CompetitionModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StageModel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "competitionId" INTEGER NOT NULL,

    CONSTRAINT "StageModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DistanceModel" (
    "id" SERIAL NOT NULL,
    "time" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "distance" INTEGER NOT NULL,
    "temp" INTEGER NOT NULL,
    "stageId" INTEGER,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "DistanceModel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserModel_name_surname_birthday_key" ON "UserModel"("name", "surname", "birthday");

-- CreateIndex
CREATE UNIQUE INDEX "CompetitionModel_name_startDate_key" ON "CompetitionModel"("name", "startDate");

-- AddForeignKey
ALTER TABLE "StageModel" ADD CONSTRAINT "StageModel_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "CompetitionModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DistanceModel" ADD CONSTRAINT "DistanceModel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DistanceModel" ADD CONSTRAINT "DistanceModel_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "StageModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
