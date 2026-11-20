"use client";

import Link from "next/link";
import { useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({
    weight: '400',
    subsets: ['latin'],
});

const MotivationCard = () => {

    return(
        <div className={`${playfair_display.className} flex flex-col items-center text-center justify-center h-[230px] rounded-sm px-5 py-15 gap-4 bg-[#9c745f] text-white`}>
            <p>What's stopping you?</p>
        </div>
    )
}

export default MotivationCard