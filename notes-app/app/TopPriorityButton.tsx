"use client"

import { toggleTopPriorityAction } from "./actions/goals";

const TopPriorityButton = ({ id, is_top_priority }: { id: number, is_top_priority: boolean }) => {

    return (
        <div>
            <button title="Top Priority" className="flex text-2xl text-[#9a8065] items-center justify-center" type="button" onClick={() => toggleTopPriorityAction(id, !is_top_priority)}>
                {is_top_priority ? "★" : "☆"}
            </button>
        </div>
    )
}

export default TopPriorityButton