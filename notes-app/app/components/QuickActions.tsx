"use client"

import { useRouter } from "next/navigation"
import NewGoal from "./NewGoal"

import BucketList from "./BucketList"
import { useState } from "react"
import type { Bucket } from "../services/buckets"

// type Bucket = {
//     id: number,
//     name: string
// }

const QuickActions = ({ buckets }: { buckets: Bucket[] }) => {
    const router = useRouter()

    const [showForm, setShowForm] = useState(false)

    return (
        <div className="flex flex-col border rounded-lg p-4">
            <h1 className="font-bold text-lg text-[#9c745f]">Quick Actions</h1>
            {/* {showForm ? (
                <NewGoal onClose={() => setShowForm(false)} />
            ) : (
            )} */}
            <button
                className="cursor-pointer border rounded-md p-2"
                onClick={() => router.push("/goals/new/bucket")}
            >
                + Create New Bucket
            </button>

            {showForm ? (
                <NewGoal onClose={() => setShowForm(false)} 
                buckets={buckets}
                />
            ) : (
                <button
                    className="cursor-pointer border rounded-md p-2"
                    onClick={() => setShowForm(true)}
                >
                    + Add New Goal
                </button>
            )
            }
        </div>
    )
}

export default QuickActions