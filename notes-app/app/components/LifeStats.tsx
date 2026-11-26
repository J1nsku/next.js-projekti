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
            <div className="rounded-[10px] border border-[#a58d80]/25 bg-white p-5 shadow-[0_2px_6px_rgba(78,52,42,0.035)]">
                <h1 className="font-display text-[27px] font-bold leading-none text-[#996851]"> Life Stats </h1>
                
                <div className="my-4 h-px bg-[#8b6c5e]/15"></div>

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