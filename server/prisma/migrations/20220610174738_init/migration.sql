-- CreateTable
CREATE TABLE "usermodel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,

    CONSTRAINT "usermodel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "competitionmodel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "startdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "enddate" TIMESTAMP(3),

    CONSTRAINT "competitionmodel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stagemodel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "competitionid" INTEGER NOT NULL,

    CONSTRAINT "stagemodel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "distancemodel" (
    "id" SERIAL NOT NULL,
    "time" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "distance" INTEGER NOT NULL,
    "temp" INTEGER NOT NULL,
    "stageid" INTEGER,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "distancemodel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usermodel_name_surname_birthday_key" ON "usermodel"("name", "surname", "birthday");

-- CreateIndex
CREATE UNIQUE INDEX "competitionmodel_name_startdate_key" ON "competitionmodel"("name", "startdate");

-- AddForeignKey
ALTER TABLE "stagemodel" ADD CONSTRAINT "stagemodel_competitionid_fkey" FOREIGN KEY ("competitionid") REFERENCES "competitionmodel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "distancemodel" ADD CONSTRAINT "distancemodel_userid_fkey" FOREIGN KEY ("userid") REFERENCES "usermodel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "distancemodel" ADD CONSTRAINT "distancemodel_stageid_fkey" FOREIGN KEY ("stageid") REFERENCES "stagemodel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
