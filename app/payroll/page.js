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
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Payroll</h1>

      {rows.length === 0 && (
        <p className="text-gray-400">No payroll data available.</p>
      )}

      <div className="space-y-4">
        {rows.map(row => (
          <div key={row.id} className="card flex justify-between">
            <span>{row.name}</span>
            <span className="font-semibold">
              ${row.total.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
