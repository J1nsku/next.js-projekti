require("dotenv").config({ path: ".env.local" })

import { neon } from "@neondatabase/serverless";
import bcrypt from "bcryptjs";
import { password as askPassword, input } from "@inquirer/prompts";

async function Main() {
    const sql = neon(process.env.DATABASE_URL!);

    const email = await input({
        message: "Anna tilisi sähköpostiosoite:"
    })

    const password = await askPassword({
        message: "Anna uusi salasanasi."
    })

    const hashedPassword = await bcrypt.hash(password, 10)


    const existingUser = await sql`
        UPDATE users
        SET password_hash = ${hashedPassword}
        WHERE email = ${email}
        RETURNING id
    `;

    if (existingUser.length === 0) {
        throw new Error('Kyseistä sähköpostia ei löydy.');
    }

    console.log("Salasana päivitetty onnistuneesti.")
} Main()