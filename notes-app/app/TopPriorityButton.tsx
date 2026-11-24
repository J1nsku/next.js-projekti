"use client"

import { useState } from "react";
import { useSession } from "next-auth/react";
import { toggleTopPriorityAction } from "./actions/goals";

const TopPriorityButton = ({ id, is_top_priority }: { id: number, is_top_priority: boolean }) => {

    const { data: session } = useSession()
    const [isPriority, setIsPriority] = useState(is_top_priority)

    return (
        <div>
            <button title="Top Priority" className="flex text-2xl text-[#9a8065] items-center justify-center" type="button"
                onClick={() => {
                    if (session) {
                        toggleTopPriorityAction(id, !is_top_priority)
                    } else {
                        setIsPriority(!isPriority)
                    }
                }}>
                {isPriority ? "★" : "☆"}
            </button>
        </div >
    )
}

export default TopPriorityButton