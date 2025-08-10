import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "League Breaker",
  description: "Clean Next.js 14 starter",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <div className="mx-auto max-w-5xl p-6">{children}</div>
      </body>
    </html>
  );
}
