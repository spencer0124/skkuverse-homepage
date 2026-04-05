import type { Metadata } from "next";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
