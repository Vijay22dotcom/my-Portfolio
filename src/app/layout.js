import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "vijay portfolio",
  description: "create by me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  bg-[#030014] overflow-y-scroll overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}
