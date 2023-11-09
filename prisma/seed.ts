import prisma from "./db";

async function main() {
  const names = ["JavaScript", "Ruby", "Python"];

  for (const name of names) {
    await prisma.tag.create({
      data: {
        name: name,
      },
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
