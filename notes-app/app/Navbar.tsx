"use client"

import { sign } from "crypto"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import Link from "next/link"

export default function Navbar() {
    const { data: session, status } = useSession()

    return (
        <nav className="flex gap-4 items-center">
            {status === "unauthenticated" && (
                <nav>
                    <Link href="/login">Login</Link>
                    {" | "}
                    <Link href="/register">Register</Link>
                </nav>
            )}


            {status === "authenticated" && (
                <button onClick={() => signOut()}>
                    Logout
                </button>
            )}

            {status}
            <Link href="/">Home</Link>
            {" | "}
        </nav>
    )
}