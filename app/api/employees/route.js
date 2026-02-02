import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function GET() {
  const employees = await prisma.employee.findMany();
  return Response.json(employees);
}
