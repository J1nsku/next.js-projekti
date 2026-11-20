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
    const [openQuickActions, setOpenQuickActions] = useState(false)

    return (
        <div className="flex flex-col border border-[#D9D9D9] rounded-lg p-4 gap-4">
            <h1 className="font-bold text-lg text-[#9c745f] border-b border-[#D9D9D9]">Quick Actions</h1>

            <div className="flex flex-col gap-4">
                {showBucketForm ? (
                    <NewBucket onClose={() => setShowBucketForm(false)}

                    />
                ) : (
                    <button
                        className="cursor-pointer border border-[#D9D9D9] rounded-md p-2"
                        onClick={() => setShowBucketForm(true)}
                    >
                        + Create New Bucket
                    </button>
                )
                }

                {
                    showForm ? (
                        <div className="flex items-center justify-center fixed inset-0 z-50">
                            <div className="bg-white rounded-xl shadow-xl p-6">
                            <NewGoal onClose={() => setShowForm(false)}
                                buckets={buckets}
                            />
                            </div>
                        </div>
                    ) : (
                        <button
                            className="cursor-pointer border border-[#D9D9D9] rounded-md p-2"
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