"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () =>
{
    return (
        <div style={{ WebkitBackdropFilter: "blur(48px)", backdropFilter: "blur(48px)" }} className="h-14 w-full fixed bg-brand-primary-250/25 border-b border-white/50 flex justify-center items-center gap-6 text-md text-white">
            <Link href="/" className="link">Home</Link>
            <Link href="/" className="link">Events</Link>
            <Link href="/committee" className="link">Committee</Link>
            <Link href="/sponsors" className="link">Sponsors</Link>
            <a href="https://leedshack.com" className="link">LeedsHack</a>
        </div>
        // <>
        //     {
        //         (navigator.userAgent.includes("Safari")) ?
        //             <div className="h-14 w-full fixed bg-white/50 border-b border-b-white/10 flex justify-center items-center gap-6 text-md text-white decoration-2 decoration-brand-secondary-500">
        //                 <Link href="/" className="cursor-pointer hover:underline transition-all">Home</Link>
        //                 <Link href="/" className="cursor-pointer hover:underline transition-all">Events</Link>
        //                 <Link href="/committee" className="cursor-pointer hover:underline transition-all">Committee</Link>
        //                 <Link href="/sponsors" className="cursor-pointer hover:underline transition-all">Sponsors</Link>
        //                 <a href="https://leedshack.com" className="cursor-pointer hover:underline transition-all">LeedsHack</a>
        //             </div>
        //             :
        //             <div className="h-14 w-full fixed bg-white/10 backdrop-blur-3xl border-b border-b-white/10 flex justify-center items-center gap-6 text-md text-white decoration-2 decoration-brand-secondary-500">
        //                 <Link href="/" className="cursor-pointer hover:underline transition-all">Home</Link>
        //                 <Link href="/" className="cursor-pointer hover:underline transition-all">Events</Link>
        //                 <Link href="/committee" className="cursor-pointer hover:underline transition-all">Committee</Link>
        //                 <Link href="/sponsors" className="cursor-pointer hover:underline transition-all">Sponsors</Link>
        //                 <a href="https://leedshack.com" className="cursor-pointer hover:underline transition-all">LeedsHack</a>
        //             </div>
        //     }
        // </>
    );
};
//backdrop-blur-3xl