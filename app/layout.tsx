import "./globals.css";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-neutral-200 m-2">
        <main className="bg-white max-w-md mx-auto">{children}</main>
      </body>
    </html>
  );
}
