/*
  Warnings:

  - You are about to drop the column `description` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `techStack` on the `Project` table. All the data in the column will be lost.
  - Added the required column `summary` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Made the column `repoUrl` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Project" DROP COLUMN "description",
DROP COLUMN "techStack",
ADD COLUMN     "stack" TEXT[],
ADD COLUMN     "summary" TEXT NOT NULL,
ALTER COLUMN "repoUrl" SET NOT NULL;
