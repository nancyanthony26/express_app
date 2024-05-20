-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Employees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Employees_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Employees" ("city", "email", "gender", "id", "name") SELECT "city", "email", "gender", "id", "name" FROM "Employees";
DROP TABLE "Employees";
ALTER TABLE "new_Employees" RENAME TO "Employees";
CREATE UNIQUE INDEX "Employees_userId_key" ON "Employees"("userId");
PRAGMA foreign_key_check("Employees");
PRAGMA foreign_keys=ON;
