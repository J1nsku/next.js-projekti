"use client";

import Link from "next/link";
import { useState } from "react";

const YearProgress = () => {

    return (
        <div className="flex flex-col border border-[#D9D9D9] rounded-lg p-4 gap-4">
            <h1 className="font-bold text-lg text-[#9c745f] border-b border-[#D9D9D9]"> Year Progress </h1>
            <div className="bg-[#9c745f] text-[#ffffff]">
                <p>Year:</p>
                <p>Month:</p>
                <p>Week:</p>
                <p>Day:</p>
            </div>
        </div>
    )
}

export default YearProgress