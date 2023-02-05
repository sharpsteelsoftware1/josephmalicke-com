import "./globals.css";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head />
      <body className="m-2 sm:m-4">
        <main className="max-w-md mx-auto">{children}</main>
      </body>
    </html>
  );
}
