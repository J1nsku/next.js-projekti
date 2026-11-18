"use client";

import { toggleCompletedAction } from "./actions/goals";

const CompletedButton = ({ id, is_completed }: { id: number, is_completed: boolean }) => {

    return (
        <div>
            <button className="text-2xl" type="button" onClick={() => toggleCompletedAction(id, !is_completed)}>
                {is_completed ? "●" : "○"}
            </button>
        </div>
    )
}

export default CompletedButton