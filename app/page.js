import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">PayrollX</h1>
      <p className="text-gray-400 mt-1">
        PayrollX
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <Link href="/employees" className="card">
          <h2 className="text-xl font-semibold">Employees</h2>
          <p className="text-gray-400 mt-2">
            Manage employees and hourly rates
          </p>
        </Link>

        <Link href="/payroll" className="card">
          <h2 className="text-xl font-semibold">Run Payroll</h2>
          <p className="text-gray-400 mt-2">
            Calculate pay based on logged hours
          </p>
        </Link>
      </div>
    </main>
  );
}
