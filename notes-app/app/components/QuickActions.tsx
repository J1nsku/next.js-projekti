"use client"

import { useRouter } from "next/navigation"
import NewGoal from "./NewGoal"
import NewBucket from "./NewBucket"

import { useState } from "react"

type Bucket = {
    id: number,
    name: string
}

const QuickActions = ({ buckets }: { buckets: Bucket[] }) => {
    const router = useRouter()

    const [showForm, setShowForm] = useState(false)
    const [showBucketForm, setShowBucketForm] = useState(false)

    return (
        <div className="flex flex-col border rounded-lg p-4 gap-4">
            <h1 className="font-bold text-lg text-[#9c745f] border-b border-[#000000]">Quick Actions</h1>

            <div className="flex flex-col gap-4">
                {showBucketForm ? (
                    <NewBucket onClose={() => setShowBucketForm(false)}

                    />
                ) : (
                    <button
                        className="cursor-pointer border rounded-md p-2"
                        onClick={() => setShowBucketForm(true)}
                    >
                        + Create New Bucket
                    </button>
                )
                }

                {
                    showForm ? (
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
        </div >
    )
}

export default QuickActions