-- CreateTable
CREATE TABLE "Employees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "city" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TechnicalSkills" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "tools" TEXT NOT NULL,
    "proficiency" TEXT NOT NULL,
    "employeesId" INTEGER,
    CONSTRAINT "TechnicalSkills_employeesId_fkey" FOREIGN KEY ("employeesId") REFERENCES "Employees" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_TechnicalSkills" ("id", "proficiency", "title", "tools") SELECT "id", "proficiency", "title", "tools" FROM "TechnicalSkills";
DROP TABLE "TechnicalSkills";
ALTER TABLE "new_TechnicalSkills" RENAME TO "TechnicalSkills";
PRAGMA foreign_key_check("TechnicalSkills");
PRAGMA foreign_keys=ON;
