import Credentials from "next-auth/providers/credentials";
import { neon } from "@neondatabase/serverless"
import bcrypt from "bcryptjs"

const sql = neon(process.env.DATABASE_URL)

export const authOptions = {
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },

            authorize: async (credentials) => {
                const users = await sql`
            SELECT id, email, password_hash
            FROM users
            WHERE email = ${credentials.email}
            `;

                if (users.length === 0) {
                    return null;
                }

                const user = users[0];

                const passwordMatch = await bcrypt.compare(
                    credentials.password,
                    user.password_hash
                );

                if (!passwordMatch) {
                    return null;
                }

                return {
                    id: String(user.id),
                    email: String(user.email),
                };
            },
        }),
    ],
};