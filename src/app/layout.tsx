import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umurava Platform",
  description: "Umurava Platform",
  icons: {
    icon: '/umurava.ico',
    shortcut: '/umurava.ico',
    apple: '/umurava.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}