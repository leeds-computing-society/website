import Link from "next/link";

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
    );
};