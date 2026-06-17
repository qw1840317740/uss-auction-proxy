// Bootstrap an ADMIN user for the dashboard.
// Run with: npm run db:seed  (after `npx prisma db push`)
//
// Override credentials via env: ADMIN_EMAIL / ADMIN_PASSWORD

import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Prisma 7 requires a driver adapter (engine 'client')
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const email = (process.env.ADMIN_EMAIL ?? "admin@example.com").trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD ?? "admin12345";

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.upsert({
    where: { email },
    update: { role: "ADMIN", status: "ACTIVE", password: hashed },
    create: {
      email,
      name: "Administrator",
      password: hashed,
      role: "ADMIN",
      status: "ACTIVE",
    },
  });

  console.log(`✓ Admin user ready: ${user.email} (role: ${user.role})`);
  if (!process.env.ADMIN_PASSWORD) {
    console.log(`  Default password: admin12345 — change it immediately in production.`);
  }
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
