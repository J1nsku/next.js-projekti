"use client"

import { useState } from "react"
import NewGoal from "./NewGoal"
import type { Bucket } from "./BucketList"

const NewGoalButton = ({ buckets }: {
    buckets: Bucket[]
}) => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div>
            <div>
                <button className="flex items-center justify-center px-4 py-1 mb-4 text-2sm text-white bg-[#9a8065] rounded-xl" type="button" onClick={() => setOpenModal(!openModal)}>
                    New
                </button>
            </div>
            {openModal && (
                <div className="flex items-center justify-center fixed inset-0 z-50">
                    <div className="bg-white rounded-xl shadow-xl p-6">
                        <div className="flex flex-row justify-between items-center text-2xl text-[#9a8065] font-bold">
                            Create new goal
                            <button className="flex items-center justify-center" type="button" onClick={() => setOpenModal(false)}>
                                X
                            </button>
                        </div>
                        <NewGoal onClose={() => setOpenModal(false)} buckets={buckets} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default NewGoalButton