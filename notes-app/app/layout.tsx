import Link from "next/link";
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          {" | "}
          <Link href="/goals">Goals</Link>
          {" | "}
          <Link href="/goals/new">Create new</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
