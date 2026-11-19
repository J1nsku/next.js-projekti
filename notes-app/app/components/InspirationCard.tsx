"use client";

import Link from "next/link";
import { useState } from "react";
import { Shantell_Sans } from "next/font/google";

const shantell_sans = Shantell_Sans({
    weight: '400',
    subsets: ['latin'],
});


const InspirationCard = () => {

    return (
        <div className={`${shantell_sans.className} flex flex-col items-center text-center justify-center h-[130px] rounded-xl px-5 py-15 gap-4 bg-[#F5F5F2] text-[#9c745f] border-1 border-[#E3DEDC]`}>
            <p>Make room for the life you imagine.</p>
        </div>
    )
}

export default InspirationCard