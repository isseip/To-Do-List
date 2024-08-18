-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "finished" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Task_name_key" ON "Task"("name");
