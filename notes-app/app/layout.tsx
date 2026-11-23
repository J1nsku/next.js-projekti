import Link from "next/link";
import './globals.css';
import { Caveat } from "next/font/google";
import Providers from "./providers";
import Navbar from "./Navbar";

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
      <body className={`${caveat.variable}`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html >
  );
}
