"use client";

import Link from "next/link";
import { useState } from "react";
import type { Goal } from "../services/goals";
import type { Bucket } from "../services/buckets";
import NewGoalButton from "./NewGoalButton";

const TopPriorities = ({ goals, buckets }: { goals: Goal[], buckets: Bucket[] }) => {

    return (
        <div className="rounded-[10px] border border-[#a58d80]/25 bg-white p-5 shadow-[0_2px_6px_rgba(78,52,42,0.035)] ">
            <h1 className="font-display text-[27px] font-bold leading-none text-[#996851]"> Top Priorities This Year </h1>

            <div className="my-4 h-px bg-[#8b6c5e]/15"></div>

            <div className="flex flex-row justify-between items-center gap-4">
                <p className="self-start px-4 py-1 w-fit mb-4 text-2sm bg-[#DED9D7] rounded-xl"> Top Priorities </p>
                <NewGoalButton buckets={buckets} />
            </div>
            <div>
                {goals.map(goal => (
                    <div className="flex w-full justify-between" key={goal.id}>
                        <span>{goal.content}</span>
                        <span>{goal.target_date !== null && new Date(goal.target_date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        })}
                        </span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TopPriorities