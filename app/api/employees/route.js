import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";  // <<< MUST BE HERE

const prisma = new PrismaClient();

export async function GET() {
  const employees = await prisma.employee.findMany();
  return Response.json(employees);
}
