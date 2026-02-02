import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function GET() {
  const employees = await prisma.employee.findMany({
    include: { timeLogs: true }
  });

  const payroll = employees.map(emp => {
    const hours = emp.timeLogs.reduce(
      (sum, log) => sum + log.hours,
      0
    );

    return {
      id: emp.id,
      name: emp.name,
      total: hours * emp.hourly
    };
  });

  return Response.json(payroll);
}
