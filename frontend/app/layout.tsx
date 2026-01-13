import "./globals.css";
import Script from "next/script";
import type { ReactNode } from "react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteNavbar from "@/components/layout/SiteNavbar";
import MeetMateChatWidget from "../components/MeetMateChatWidget";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <SiteNavbar />
        {children}
        <SiteFooter />
        <MeetMateChatWidget />
        <Script src="/static/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
