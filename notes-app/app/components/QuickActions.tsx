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
        <div className="rounded-[10px] border border-[#a58d80]/25 bg-white p-5 shadow-[0_2px_6px_rgba(78,52,42,0.035)] ">
            <h2 className="font-display text-[27px] font-bold leading-none text-[#996851]">Quick Actions</h2>

            <div className="my-4 h-px bg-[#8b6c5e]/15"></div>

            <div className="flex flex-col gap-4">
                {showBucketForm ? (
                    <div className="flex items-center justify-center fixed inset-0 z-50">
                        <div>
                            <NewBucket onClose={() => setShowBucketForm(false)}
                            />
                        </div>
                    </div>
                ) : (
                    <button
                        className="flex w-full items-center gap-2 rounded-md border border-[#9c8275]/25 px-3 py-2 text-left font-serif text-[15px] shadow-sm transition hover:border-[#9f7058]/45 hover:bg-[#fbf7f4]"
                        onClick={() => setShowBucketForm(true)}
                    >
                        + Create New Bucket
                    </button>
                )
                }

                {
                    showForm ? (
                        <div className="flex items-center justify-center fixed inset-0 z-50">
                            <div>
                                <NewGoal onClose={() => setShowForm(false)}
                                    buckets={buckets}
                                />
                            </div>
                        </div>
                    ) : (
                        <button
                            className="flex w-full items-center gap-2 rounded-md border border-[#9c8275]/25 px-3 py-2 text-left font-serif text-[15px] shadow-sm transition hover:border-[#9f7058]/45 hover:bg-[#fbf7f4]"
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