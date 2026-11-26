"use client"

import { sign } from "crypto"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import Link from "next/link"

export default function Navbar() {
    const { data: session, status } = useSession()

    return (
        <div className="flex flex-col gap-4 w-full px-8 py-2">
            <nav className="flex flex-row gap-4 items-center p-2 w-full">
                <Link href="/">Home</Link>
                {" | "}
                {status === "unauthenticated" && (
                    <nav>
                        <Link href="/login" className="cursor-pointer hover:bg-[#b08772] items-center justify-center px-4 py-1 mb-4 text-2sm text-white bg-[#9c745f] rounded-xl">Login</Link>
                        {" | "}
                        <Link href="/register" className="cursor-pointer hover:bg-[#b08772] items-center justify-center px-4 py-1 mb-4 text-2sm text-white bg-[#9c745f] rounded-xl">Register</Link>
                    </nav>
                )}


                {status === "authenticated" && (
                    <button onClick={() => signOut()}>
                        Logout
                    </button>
                )}

                {/* {status} */}
            </nav>

        </div>
    )
}