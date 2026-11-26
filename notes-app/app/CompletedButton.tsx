"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { toggleCompletedAction } from "./actions/goals";

const CompletedButton = ({ id, is_completed }: { id: number, is_completed: boolean }) => {

    const { data: session } = useSession()
    const [isComplete, setIsComplete] = useState(is_completed)

    return (
        <div>
            <button title="Mark as completed" className={`${isComplete ? "bg-[#9c745f]" : "bg-transparent"} flex translate-y-0.5 shrink-0 aspect-square items-center justify-center text-2xl rounded-full border-1 
            border-[#9a8065] w-4 h-4"`}
                type="button"
                onClick={() => {
                    if (session) {
                        toggleCompletedAction(id, !is_completed)
                    } else {
                        setIsComplete(!isComplete)
                    }
                }}>
                {isComplete ? true : false}
                {isComplete && <span className="text-xs text-[#ffffff]">✓</span>}
            </button>
        </div>
    )
}

export default CompletedButton