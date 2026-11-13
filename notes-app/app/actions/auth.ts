"use server";

import bcrypt from "bcryptjs";
import { neon } from "@neondatabase/serverless";
import { redirect } from "next/navigation";

const sql = neon(process.env.DATABASE_URL!);

export async function registerUser(formData: FormData) {
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    if (!email || !password) {
        throw new Error('Täytä kaikki kentät.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await sql`
        SELECT id FROM users
        WHERE email = ${email}
    `;

    if (existingUser.length > 0) {
        throw new Error('Sähköposti on jo käytössä.');
    }

    await sql`
    INSERT INTO users (email, password_hash)
    VALUES (${email}, ${hashedPassword})
    `;

    redirect('/login');
}

// export async function loginUser(formData: FormData) {
//     await signIn('credentials', {
//         email: formData.get("email"),
//         password: formData.get("password"),
//         redirectTo: "/",
//     });
// }

// const email = formData.get("email") as string
// const password = formData.get("password") as string

// if (!email || !password) {
//     throw new Error('Täytä kaikki kentät.')
// }

// const users = await sql`
// SELECT id, email, password_hash
// FROM users
// WHERE email = ${email}
// `;

// if (users.length > 0) {
//     throw new Error('Virheellinen sähköposti tai salasana.');
// }

// const user = users[0];

// const passwordMatch = await bcrypt.compare(
//     password,
//     user.password_hash
// );

// if (!passwordMatch) {
//     throw new Error('Virheellinen sähköposti tai salasana.');
// }