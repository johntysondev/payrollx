import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";  // <<< MUST BE HERE

const prisma = new PrismaClient();

export async function GET() {
  const employees = await prisma.employee.findMany({
    include: { timeLogs: true }
  });

  const payroll = employees.map(emp => ({
    id: emp.id,
    name: emp.name,
    total: emp.timeLogs.reduce((sum, log) => sum + log.hours, 0) * emp.hourly
  }));

  return Response.json(payroll);
}
