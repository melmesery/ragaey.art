import type { Metadata } from "next";
import { Familjen_Grotesk as Font } from "next/font/google";
import "./globals.css";

const font = Font({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ragaey Sameh",
  description: "Motion Graphics Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
