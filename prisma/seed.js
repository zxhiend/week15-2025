const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // ensure default account exists
  await prisma.account.upsert({
    where: { name: 'default' },
    update: {},
    create: { name: 'default', balance: 1000 },
  });

  const now = new Date();

  // create sample items
  await prisma.item.createMany({
    data: [
      {
        description: 'Gaji Bulanan',
        amount: 3000,
        type: 'INCOME',
        category: 'Salary',
        isRecurring: false,
        date: now,
      },
      {
        description: 'Belanja Mingguan',
        amount: 450,
        type: 'EXPENSE',
        category: 'Groceries',
        isRecurring: false,
        date: now,
      },
      {
        description: 'Langganan Streaming',
        amount: 9.99,
        type: 'EXPENSE',
        category: 'Subscriptions',
        isRecurring: true,
        recurrence: 'MONTHLY',
        nextOccurrence: new Date(now.getFullYear(), now.getMonth() + 1, now.getDate()),
        date: now,
      },
    ],
  });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
