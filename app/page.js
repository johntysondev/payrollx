import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10 min-h-screen bg-gradient-to-br from-gray-900 to-neutral-800 text-white">
      <h1 className="text-5xl font-bold mb-2">PayrollX</h1>
      <p className="text-gray-400 mb-10">
        Modern payroll system inspired by Kronos
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/employees"
          className="bg-neutral-900/70 hover:bg-neutral-800/80 transition rounded-xl p-6 shadow-lg flex flex-col justify-between"
        >
          <h2 className="text-2xl font-semibold text-cyan-400">Employees</h2>
          <p className="text-gray-300 mt-2">Manage employees & hourly rates</p>
        </Link>

        <Link
          href="/payroll"
          className="bg-neutral-900/70 hover:bg-neutral-800/80 transition rounded-xl p-6 shadow-lg flex flex-col justify-between"
        >
          <h2 className="text-2xl font-semibold text-purple-400">Payroll</h2>
          <p className="text-gray-300 mt-2">Calculate pay based on hours worked</p>
        </Link>
      </div>
    </main>
  );
}
