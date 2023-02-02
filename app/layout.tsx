import "./globals.css";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-neutral-200 my-4">{children}</body>
    </html>
  );
}
