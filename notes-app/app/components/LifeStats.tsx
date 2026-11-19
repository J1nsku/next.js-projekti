"use client";

import Link from "next/link";
import { useState } from "react";
import type { Goal } from "../services/goals";

const LifeStats = ({ goals }: { goals: Goal[] }) => {
    const goalCompleted = goals.filter((goal) => goal.is_completed === true).length

    const [showStat, setShowStat] = useState(false)


    return (
        <div>
            <div className="flex flex-col border rounded-lg p-4 gap-4">
                <h1 className="font-bold text-lg text-[#9c745f] border-b border-[#000000]"> Life Stats </h1>
                <div className="font-normal">
                    <button onClick={() => setShowStat(!showStat)}>
                    <p>{showStat ? "▼" : "▶"} Goals completed </p>

                        {showStat && goalCompleted}
                    </button>
                    <p>Bucket list done</p>
                </div>
            </div>
        </div>
    )
}

export default LifeStats