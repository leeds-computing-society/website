"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export const Header = () =>
{
    let router = useRouter();
    let [menuOpen, setMenuOpen] = useState<boolean>(false);

    let menuButtonClicked = () =>
    {
        setMenuOpen(!menuOpen);
    };

    let navigationClicked = (route: string) =>
    {
        setMenuOpen(false);
        router.push(route);
    };

    let handleResize = () =>
    {
        setMenuOpen(false);
    };

    useEffect(() =>
    {
        window.addEventListener("resize", handleResize);

        return () =>
        {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="fixed h-14 w-full text-md text-white">
            <div style={{ WebkitBackdropFilter: "blur(48px)", backdropFilter: "blur(48px)" }} className="h-14 bg-brand-primary-500/50 border-b border-white/50">
                <div className="h-full flex justify-center items-center gap-6 max-[48rem]:hidden">
                    <Link href="/" className="link">Home</Link>
                    <Link href="/events" className="link">Events</Link>
                    <Link href="/committee" className="link">Committee</Link>
                    <Link href="/sponsors" className="link">Sponsors</Link>
                    <a href="https://leedshack.com" className="link link-leeds-hack">LeedsHack</a>
                </div>
                <div className="h-full flex justify-start items-center min-[48rem]:hidden">
                    <button onClick={menuButtonClicked} className="p-4 cursor-pointer">
                        <svg className="stroke-white w-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M3 5H21"></path>
                            <path d="M3 12H21"></path>
                            <path d="M3 19H21"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div style={{ WebkitBackdropFilter: "blur(24px)", backdropFilter: "blur(48px)" }} className={`transition-navigation bg-brand-primary-500/50 border-dashed w-full text-md flex flex-col gap-3 items-center overflow-clip border-b border-transparent ${menuOpen ? "h-[13.5rem] border-white/50" : "h-0"}`}>
                <button onClick={() => navigationClicked("/")} className="link mt-6">Home</button>
                <button onClick={() => navigationClicked("/events")} className="link">Events</button>
                <button onClick={() => navigationClicked("/committee")} className="link">Committee</button>
                <button onClick={() => navigationClicked("/sponsors")} className="link">Sponsors</button>
                <button onClick={() => navigationClicked("https://leedshack.com")} className="link link-leeds-hack mb-6">LeedsHack</button>
            </div>
        </div>
    );
};
