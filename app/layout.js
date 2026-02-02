export const metadata = {
  title: "PayrollX",
  description: "Modern web-based payroll system"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
