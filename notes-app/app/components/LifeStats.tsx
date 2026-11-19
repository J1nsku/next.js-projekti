"use client";

import Link from "next/link";
import { useState } from "react";
import type { Goal } from "../services/goals";

const LifeStats = ({ goals }: { goals: Goal[] }) => {
    const goalCompleted = goals.filter((goal) => goal.is_completed === true).length

    const [showStat, setShowStat] = useState(false)
    const [showBucketStat, setBucketStat] = useState(false)


    return (
        <div>
            <div className="flex flex-col border rounded-lg p-4 gap-4">
                <h1 className="font-bold m-0 text-lg text-[#9c745f] border-b border-[#D9D9D9]"> Life Stats </h1>
                <div className="pl-0 font-normal text-left">
                    <button className="w-full text-left mb-2"
                    onClick={() => setShowStat(!showStat)}>
                        <p>{showStat ? <span className="pl-0 text-3xl">▸</span> : <span className="text-sm">▼</span>} Goals completed </p>

                        <p className="text-[#91847C]">{showStat ? <span> </span> : <span> {goalCompleted} of {goals.length} dreams made real </span>} </p>
                    </button>

                    <button className="w-full text-left"
                    onClick={() => setBucketStat(!showBucketStat)}>
                    <p>{showBucketStat ? <span className="pl-0 text-3xl">▸</span> : <span className="text-sm">▼</span>} Bucket list done</p>

                    <p className="text-[#91847C]">{showBucketStat ? <span> </span> : <span> {goalCompleted / goals.length * 100}% complete </span>}</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LifeStats