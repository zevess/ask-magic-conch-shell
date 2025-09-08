import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const myFont = localFont({
  src: "fonts/BlobSpongeyLowercase-wKq3.ttf",
  variable: "--font-spongebob",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Спроси у Волшебной ракушки",
  description: "Спроси у Волшебной ракушки",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
