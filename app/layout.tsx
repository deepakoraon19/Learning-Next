import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <Nav></Nav>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}