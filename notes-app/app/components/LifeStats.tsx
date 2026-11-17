"use client";

import Link from "next/link";
import { useState } from "react";

const LifeStats = () => {

    return (
        <div>
            <div className="flex flex-col border rounded-lg p-4 gap-4">
                <h1 className="font-bold text-lg text-[#9c745f] border-b border-[#000000]"> Life Stats </h1>
                <div className="font-normal">
                    <p>Goals completed</p>
                    <p>Bucket list done</p>
                </div>
            </div>
        </div>
    )
}

export default LifeStats