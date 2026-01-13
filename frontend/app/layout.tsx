import "./globals.css";
import type { ReactNode } from "react";
import MeetMateChatWidget from "../components/MeetMateChatWidget";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body>
        {children}
        <MeetMateChatWidget />
      </body>
    </html>
  );
}
