import { neon } from "@neondatabase/serverless"
import type { Goal } from "../components/GoalList"
import { getServerSession } from "next-auth"
import { authOptions } from "@/auth"
import { error } from "console"

const sql = neon(process.env.DATABASE_URL!)

const goals = [
    { id: 1, content: 'Visit Japan', url: '/images/japan.jpg' },
    { id: 2, content: 'Read 20 books', url: '/images/book.jpg' }
]

let nextId = 3

export const getGoals = async (): Promise<Goal[]> => {
    const session = await getServerSession(authOptions);

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

    const goals = await sql`SELECT * FROM goals WHERE user_id = ${userId}`
    return goals as Goal[]
}

export const addGoal = async (content: string, category: string, image_url: string) => {
    const session = await getServerSession(authOptions);

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

    const buckets = await sql`
    SELECT id FROM buckets
    WHERE name = ${category}
    AND user_id = ${userId}
    `

    const bucketId = buckets[0]?.id

    if (!bucketId) {
        throw new Error("Bucket not found")
    }

    return await sql`
    INSERT INTO goals (content, category, image_url, user_id, bucket_id)
    VALUES (${content}, ${category}, ${image_url}, ${userId}, ${bucketId})
    RETURNING *
    `
}
// goals.push({ id: nextId++, content, url })

export const getGoalById = (id: number) => {
    return goals.find((goal) => goal.id === id)
}

export const toggleImportance = async (id: number) => {
    const goal = goals.find((goal) => goal.id === id)
}