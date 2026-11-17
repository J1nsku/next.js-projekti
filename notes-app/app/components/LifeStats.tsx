"use client";

import Link from "next/link";
import { useState } from "react";

const LifeStats = () => {

    return (
        <div>
            <div className="font-bold text-lg text-[#9c745f]
            border border-[#bdbdbd] rounded-lg bg-[#ffffff] border-b border-[#000000]"> Life Stats
                <div className="font-normal">
                    <p>Goals completed</p>
                    <p>Bucket list done</p>
                </div>
            </div>
        </div>
    )
}

export default LifeStats