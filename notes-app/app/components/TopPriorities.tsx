"use client";

import Link from "next/link";
import { useState } from "react";
import type { Goal } from "../services/goals";

const TopPriorities = ({ goals }: { goals: Goal[] }) => {

    return (
        <div className="flex flex-col border rounded-lg p-4 gap-4">
            <h1 className="font-bold text-lg text-[#9c745f] border-b border-[#000000]"> Top Priorities This Year </h1>
            <p className="self-start px-4 py-1 w-fit mb-4 text-2sm bg-[#DED9D7] rounded-xl"> Top Priorities </p>
            <div>
                {goals.map(goal => (
                    <div key={goal.id}>
                        {goal.content}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TopPriorities