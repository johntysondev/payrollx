"use client";
import { useEffect, useState } from "react";

export default function PayrollPage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("/api/payroll")
      .then(res => res.json())
      .then(setRows);
  }, []);

  return (
    <div className="p-10 min-h-screen bg-neutral-900 text-white">
      <h1 className="text-4xl font-bold mb-6 text-purple-400">Payroll</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rows.length === 0 && (
          <p className="text-gray-400 col-span-full">No payroll data available.</p>
        )}
        {rows.map(row => (
          <div key={row.id} className="bg-neutral-800/70 p-6 rounded-xl shadow-lg hover:shadow-xl transition flex justify-between items-center">
            <span className="text-lg font-medium">{row.name}</span>
            <span className="font-semibold text-gray-300">${row.total.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
