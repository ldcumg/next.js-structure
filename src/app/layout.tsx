import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "./assets/fonts/PretendardVariable.woff2",
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

interface LayoutProps{
  children: React.ReactNode;
}

export default function RootLayout ({ children }: LayoutProps) {
  return (
    <html lang="ko" className={`${pretendard.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
