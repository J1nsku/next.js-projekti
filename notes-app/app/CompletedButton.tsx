"use client";

import { toggleCompletedAction } from "./actions/goals";

const CompletedButton = ({ id, is_completed }: { id: number, is_completed: boolean }) => {

    return (
        <div>
            <button className={`${is_completed ? "bg-[#9a8065]" : "bg-transparent"} flex shrink-0 aspect-square items-center justify-center text-2xl rounded-full border-2 
            border-[#9a8065] w-6 h-6"`}
                type="button"
                onClick={() => toggleCompletedAction(id, !is_completed)}>
                {is_completed ? true : false}
                {is_completed && <span className="text-xs text-[#ffffff]">✓</span>}
            </button>
        </div>
    )
}

export default CompletedButton