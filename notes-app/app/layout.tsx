import Link from "next/link";
import './globals.css';
import { Caveat } from "next/font/google";

const caveat = Caveat({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-caveat',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={caveat.variable}>
        <nav>
          <Link href="/">Home</Link>
          {" | "}
          <Link href="/goals">Goals</Link>
          {" | "}
          <Link href="/goals/new">Create new</Link>
          {" | "}
           <Link href="/login">Login</Link>
           {" | "}
           <Link href="/register">Register</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
