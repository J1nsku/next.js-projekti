"use client";

import { useState, useEffect } from "react";
import { error } from "console";
import { signIn } from "next-auth/react";
import Link from "next/link"

export default function LoginPage() {

    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        setHasError(
            window.location.search.includes("error=CredentialsSignin")
        );
    }, []);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const result = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            callbackUrl: "/",
            redirect: false,
        });

        if (result?.error) {
            window.location.href = "/login?error=CredentialsSignin";
        } else {
            window.location.href = "/";
        }
    }

    return (
        <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
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
                    Login
                </button>
                {hasError && (
                    <p style={{ color: "red" }}>
                        Virheellinen sähköposti tai salasana.
                    </p>
                )}
                <div>No account? <Link href="/register">Register</Link></div>
            </form>
        </div>
    )
}