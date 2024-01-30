import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arnold Narvacan | Portfolio",
  description:
    "A dedicated and hardworking individual with a passion for growth and development.",
  icons: {
    icon: {
      rel: "icon",
      url: "/dlon-logo.ico",
      type: "image/png",
      sizes: "64x64",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
