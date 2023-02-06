import { Dancing_Script } from "@next/font/google";
import Link from "next/link";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  display: "optional",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={dancingScript.variable}>
      <head />
      <body className="m-2 sm:m-4">
        <main className="max-w-md mx-auto">
          <div className="flex flex-col space-y-2">
            <Link href="/">
              <div className="bg-white p-2 text-center font-dancing font-black text-2xl hover:underline">
                Joseph Malicke
              </div>
            </Link>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
