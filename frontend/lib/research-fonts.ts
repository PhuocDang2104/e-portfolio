import { Manrope, Merriweather } from "next/font/google";

export const researchSans = Manrope({
  subsets: ["latin"],
  variable: "--font-research-sans",
  weight: ["400", "500", "600", "700"]
});

export const researchSerif = Merriweather({
  subsets: ["latin"],
  variable: "--font-research-serif",
  weight: ["400", "700"]
});
