'use client';

import Link from "next/link"
import { registerUser } from "../actions/auth"

export default function RegisterPage() {
    return (
        <div className="flex flex-col items-center">
            <form action={registerUser}>
                <h1>Sign up</h1>
                <div>
                    <label className="border">
                        Email
                        <input type="email" name="email" required
                            placeholder="matti.meikalainen@gmail.com" />
                    </label>
                </div>
                <div>
                    <label className="border">
                        Password
                        <input type="password" name="password" required />
                    </label>
                </div>
                <button type="submit" className="border">
                    Create account
                </button>
                <div>Already account? <Link href="/login">Log in</Link></div>
            </form>
        </div>
    )
}