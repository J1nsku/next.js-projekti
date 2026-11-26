"use client";

import Link from "next/link";
import { useState } from "react";

const YearProgress = () => {

    const daysPassed =
        (new Date().getTime() -
            new Date(new Date().getFullYear(), 0, 1).getTime()) /
        86_400_000;

    const daysInYear =
        (new Date(new Date().getFullYear() + 1, 0, 1).getTime() -
            new Date(new Date().getFullYear(), 0, 1).getTime()) /
        86_400_000;

    const yearProgress = (daysPassed / daysInYear) * 100;

    const daysPassedInMonth =
        (new Date().getDate());

    const daysInMonth =
        (new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate());

    const monthProgress = (daysPassedInMonth / daysInMonth) * 100;

    const daysPassedInWeek =
        (new Date().getDay() + 6) % 7 + 1;

    const daysInWeek = 7;

    const weekProgress = (daysPassedInWeek / daysInWeek) * 100;

    const millisecondsInDay = 86_400_000;

    const millisecondsPassedToday =
        (new Date().getTime() - (new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()))

    const dayProgress = (millisecondsPassedToday / millisecondsInDay) * 100;

    console.log(daysInMonth)
    console.log(daysPassedInMonth)

    return (
        <div className="rounded-[10px] border border-[#a58d80]/25 bg-white p-5 shadow-[0_2px_6px_rgba(78,52,42,0.035)] ">
            <h1 className="font-display text-[27px] font-bold leading-none text-[#996851]"> Year Progress </h1>

            <div className="my-4 h-px bg-[#8b6c5e]/15"></div>

            <div className="grid grid-cols-[40px_1fr_40px] px-4 py-3 gap-y-3 bg-[#9c745f] text-[#ffffff] items-center gap-x-3">

                <p> Year </p>


                <div className="w-full h-3 rounded-full bg-[#e9ded5] overflow-hidden border border-[#ffffff]">
                    <div style={{ width: yearProgress + "%" }} className="h-full rounded-full bg-[#98745f]"></div>
                </div>

                <p>{yearProgress.toFixed(0) + "%"}</p>

                <p> Month </p>

                <div className="w-full h-3 rounded-full bg-[#e9ded5] overflow-hidden border border-[#ffffff]">
                    <div style={{ width: monthProgress + "%" }} className="h-full w-[55%] rounded-full bg-[#98745f]"></div>
                </div>

                <p>{monthProgress.toFixed(0) + "%"}</p>

                <p>Week</p>

                <div className="w-full h-3 rounded-full bg-[#e9ded5] overflow-hidden border border-[#ffffff]">
                    <div style={{ width: weekProgress + "%" }} className="h-full w-[49%] rounded-full bg-[#98745f]"></div>
                </div>

                <p>{weekProgress.toFixed(0) + "%"}</p>

                <p>Day</p>

                <div className="w-full h-3 rounded-full bg-[#e9ded5] overflow-hidden border border-[#ffffff]">
                    <div style={{ width: dayProgress + "%" }} className="h-full w-[40%] rounded-full bg-[#98745f]"></div>
                </div>

                <p>{dayProgress.toFixed(0) + "%"}</p>

            </div>
        </div>
    )
}

export default YearProgress