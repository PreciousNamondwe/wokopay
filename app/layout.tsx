// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "WokoPay – Fast & Secure Payments",
  description: "WokoPay is a modern digital payment platform for fast and secure transactions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
