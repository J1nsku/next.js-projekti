"use client"

import Link from "next/link"
import { useState } from "react"
// import NewGoal from "./NewGoal"

export type Goal = {
    id: number,
    content: string,
    category: string,
    image_url: string,
    created_at: string
}

export default function GoalList({ goals: initialGoals }: { goals: Goal[]; buckets: Record<string, any>[]; }) {

    const [showForm, setShowForm] = useState(false)
    const [goals, setGoals] = useState<Goal[]>(initialGoals)

    // function handleAddGoal(content: string, category: string, imageUrl: string) {
    //     const newGoal = {
    //         id: Date.now(),
    //         content: content,
    //         category: category,
    //         image_url: imageUrl
    //     }

    //     setGoals((previousGoals) => [...previousGoals, newGoal])
    // }

    return (
        <div>
            {/* {goals.map((goal) => (
                <div key={goal.id}>
                    <h2> {goal.content} </h2>
                </div>
            ))} */}
            {/* <div>
                {showForm ? (
                    <NewGoal />
                ) : (
                    <button className="cursor-pointer border rounded-sm p-1" onClick={() => setShowForm(true)}>
                        + Add new goal
                    </button>
                )}
            </div> */}
        </div>
    )
}