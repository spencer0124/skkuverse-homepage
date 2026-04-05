import type { Metadata } from "next";
import "./globals.css";
import InAppEscape from "@/components/ui/InAppEscape";
import AppBanner from "@/components/ui/AppBanner";

export const metadata: Metadata = {
  title: "스꾸버스 - 성균관대 캠퍼스 생활의 모든 것",
  description:
    "시간표, 학식, 셔틀버스, 커뮤니티까지. 성균관대 캠퍼스 생활을 하나의 앱으로 시작하세요.",
  openGraph: {
    title: "스꾸버스 - 성균관대 캠퍼스 생활의 모든 것",
    description:
      "시간표, 학식, 셔틀버스, 커뮤니티까지. 성균관대 캠퍼스 생활을 하나의 앱으로 시작하세요.",
    type: "website",
  },
  other: {
    "apple-itunes-app":
      "app-id=6446813434, app-argument=https://skkuverse.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <InAppEscape />
        <AppBanner />
        {children}
      </body>
    </html>
  );
}
