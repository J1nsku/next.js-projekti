"use server";

import { neon } from "@neondatabase/serverless"
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export type Bucket = {
    id: number,
    name: string
}

const sql = neon(process.env.DATABASE_URL!)

const buckets = [
    { id: 1, name: 'Travel' },
    { id: 2, name: 'Adventure' },
]

let nextId = 3

export const getBuckets = async () => {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        return [];
    }

    const users = await sql`
    SELECT id FROM users
    WHERE email = ${session.user.email}
    `;

    const userId = users[0]?.id;

    if (!userId) {
        return [];
    }

    const buckets = await sql`
    SELECT id, name FROM buckets
    WHERE user_id = ${userId}
    ORDER BY name ASC
    `;

    return buckets as Bucket[];
}

export const addBucket = async (name: string) => {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
        throw new Error("Not authenticated")
    }

    const users = await sql`
    SELECT id FROM users
    WHERE email = ${session.user.email}
    `

    const userId = users[0]?.id

    if (!userId) {
        throw new Error("User not found")
    }



    buckets.push({ id: nextId++, name })
}

export const getBucketById = async (id: number) => {
    return buckets.find((bucket) => bucket.id === id)
}

export const toggleImportance = async (id: number) => {
    const bucket = buckets.find((bucket) => bucket.id === id)
}
