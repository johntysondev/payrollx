import "./globals.css"; // <- MUST import here for Tailwind to work

export const metadata = {
  title: "PayrollX",
  description: "Modern web-based payroll system"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white">
        {children}
      </body>
    </html>
  );
}
