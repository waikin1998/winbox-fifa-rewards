import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WINBOX x FIFA 活动奖励",
  description: "参与足球主题活动，解锁专属礼遇与丰厚奖励。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
