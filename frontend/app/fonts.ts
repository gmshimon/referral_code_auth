import { Work_Sans } from "next/font/google";
import localFont from "next/font/local";

export const saolDisplay = localFont({
  src: "../public/fonts/SaolDisplay-Regular.woff2",
  display: "swap",
  variable: "--font-saol",
});

export const gizaStencil = localFont({
  src: "../public/fonts/GizaStencil.woff2",
  display: "swap",
  variable: "--font-giza",
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap",
});