"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type HeaderItemType = "default" | "leedshack-2025" | "leedshack-2026";

const HeaderItemTypeMap: { [key in HeaderItemType]: string; } = {
    "default": "link",
    "leedshack-2025": "link link-leeds-hack-2025",
    "leedshack-2026": "link link-leeds-hack-2026"
};

interface HeaderItem
{
    text: string;
    link: string;
    type: HeaderItemType;
};

const headerItems: HeaderItem[] = [
    {
        text: "Home",
        link: "/",
        type: "default"
    },
    {
        text: "Events",
        link: "/events",
        type: "default"

    },
    {
        text: "Committee",
        link: "/committee",
        type: "default"
    },
    {
        text: "Sponsors",
        link: "/sponsors",
        type: "default"
    },
    {
        text: "LeedsHack",
        link: "https://leedshack.com",
        type: "leedshack-2026"
    }
];

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
        <div className="fixed h-14 w-full text-md z-50 text-white">
            <div style={{ WebkitBackdropFilter: "blur(48px)", backdropFilter: "blur(48px)" }} className="h-14 bg-brand-primary-500/50 border-b border-white/50">
                <div className="h-full flex justify-center items-center gap-6 max-[48rem]:hidden">
                    {headerItems.map((item, index) => <Link key={index} href={item.link} className={HeaderItemTypeMap[item.type]}>{item.text}</Link>)}
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
            <div style={{ WebkitBackdropFilter: "blur(24px)", backdropFilter: "blur(48px)" }} className={`transition-navigation bg-brand-primary-500/50 border-dashed w-full text-md overflow-clip border-b border-transparent flex flex-col gap-3 items-center ${menuOpen ? "h-[13.5rem] border-white/50" : "h-0"}`}>
                {headerItems.map((item, index) => <button key={index} onClick={() => navigationClicked(item.link)} className={HeaderItemTypeMap[item.type] + " first:mt-6 last:mb-6"}>{item.text}</button>)}
            </div>
        </div>
    );
};
