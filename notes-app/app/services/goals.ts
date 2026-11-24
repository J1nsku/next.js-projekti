import { neon } from "@neondatabase/serverless"
// import type { Goal } from "../components/GoalList"
import { getServerSession } from "next-auth"
import { authOptions } from "@/auth"
import { error } from "console"
import { revalidatePath } from "next/cache"

const sql = neon(process.env.DATABASE_URL!)

export type Goal = {
    id: number,
    content: string,
    category: string,
    image_url: string,
    created_at: string,
    target_date: string | null,
    is_top_priority: boolean,
    is_completed: boolean
}

const goals = [
    { id: 1, content: 'Visit Japan', url: '/images/japan.jpg' },
    { id: 2, content: 'Read 20 books', url: '/images/book.jpg' }
]

let nextId = 3

export const getGoals = async (): Promise<Goal[]> => {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        const demoGoals = await sql`
     SELECT * FROM goals WHERE is_demo = true
    `
        return demoGoals as Goal[]
    }

    const users = await sql`
    SELECT id FROM users
    WHERE email = ${session.user.email}
    `

    const userId = users[0]?.id

    if (!userId) {
        throw new Error("User not found")
    }

    const goals = await sql`SELECT * FROM goals WHERE user_id = ${userId} AND is_demo = false ORDER BY created_at ASC`
    return goals as Goal[]
}

export const addGoal = async (content: string, category: string, image_url: string, targetDate: string | null) => {
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
    INSERT INTO goals (content, category, image_url, user_id, bucket_id, target_date)
    VALUES (${content}, ${category}, ${image_url}, ${userId}, ${bucketId}, ${targetDate})
    RETURNING *
    `
}
// goals.push({ id: nextId++, content, url })

export const getGoalById = async (id: number): Promise<Goal | undefined> => {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
        throw new Error("Not authenticated")
    }

    const users = await sql`
        SELECT id FROM users
        WHERE email = ${session.user.email}
    `;

    const userId = users[0]?.id;

    if (!userId) {
        throw new Error("User not found");
    }

    const result = await sql`
        SELECT * FROM goals
        WHERE id = ${id}
        AND user_id = ${userId}
    `;

    return result[0] as Goal | undefined;
}

export const toggleImportance = async (id: number) => {
    const goal = goals.find((goal) => goal.id === id)
}

export const toggleCompleted = async (id: number, is_completed: boolean) => {
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

    await sql`
    UPDATE goals
    SET is_completed = ${is_completed}
    WHERE id = ${id}
    AND user_id = ${userId}
    `

    revalidatePath("/")
}

export const toggleTopPriority = async (id: number, is_top_priority: boolean) => {
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

    await sql`
  UPDATE goals
    SET is_top_priority = ${is_top_priority}
    WHERE id = ${id}
    AND user_id = ${userId}
  `

    revalidatePath("/")
}