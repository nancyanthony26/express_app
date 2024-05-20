-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WorkExperience" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "company" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "years" INTEGER NOT NULL,
    "technicalskillsId" INTEGER,
    CONSTRAINT "WorkExperience_technicalskillsId_fkey" FOREIGN KEY ("technicalskillsId") REFERENCES "TechnicalSkills" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_WorkExperience" ("company", "id", "role", "years") SELECT "company", "id", "role", "years" FROM "WorkExperience";
DROP TABLE "WorkExperience";
ALTER TABLE "new_WorkExperience" RENAME TO "WorkExperience";
PRAGMA foreign_key_check("WorkExperience");
PRAGMA foreign_keys=ON;
