-- CreateTable
CREATE TABLE "favourite" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,

    CONSTRAINT "favourite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "favourite_userId_idx" ON "favourite"("userId");

-- CreateIndex
CREATE INDEX "favourite_bookId_idx" ON "favourite"("bookId");

-- CreateIndex
CREATE UNIQUE INDEX "favourite_userId_bookId_key" ON "favourite"("userId", "bookId");

-- AddForeignKey
ALTER TABLE "favourite" ADD CONSTRAINT "favourite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favourite" ADD CONSTRAINT "favourite_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
