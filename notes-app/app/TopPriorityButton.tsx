"use client"

import { toggleTopPriorityAction } from "./actions/goals";

const TopPriorityButton = ({ id, is_top_priority }: { id: number, is_top_priority: boolean }) => {

    return (
        <div>
            <button className="text-2xl" type="button" onClick={() => toggleTopPriorityAction(id, !is_top_priority)}>
                {is_top_priority ? "★" : "☆"}
            </button>
        </div>
    )
}

export default TopPriorityButton