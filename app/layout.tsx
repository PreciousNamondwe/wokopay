// src/app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";

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
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
