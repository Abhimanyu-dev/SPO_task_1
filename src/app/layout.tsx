import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/theme-switch";
import SideBar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task - 1",
  description: "Placement Prep Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-[600px] overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem  >
          <ModeToggle />
          <SideBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
