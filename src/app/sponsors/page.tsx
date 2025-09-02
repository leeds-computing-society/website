import { TPPLogo } from "../components/tpp-logo";

export default function Sponsors()
{
    return (
        <div className="flex flex-row justify-center grow text-white">
            <div className="flex flex-col mx-6 min-[64rem]:mx-12 min-[80rem]:mx-48 grow max-w-[96rem] border-l border-r border-dashed border-white/50">
                <div className="py-3 px-6 min-[96rem]:px-48 mt-12 text-3xl border-t border-b border-white/50 bg-brand-primary-450/50">
                    Our sponsors
                </div>
                <div className="py-6 px-6 min-[96rem]:px-48 text-md">
                    <div> We work with a range of sponsors to provide our members with opportunities to network, develop their skills, and connect with industry. If you are interested in sponsoring us, please get in touch via <a href="mailto:committee@luucompsoc.co.uk?subject=Sponsorship%20Interest%20-%20%5BYOUR%20NAME%20HERE%5D" className="text-link underline">committee@luucompsoc.co.uk</a>.</div>
                </div>
                <div className="flex flex-row items-center py-6 px-6 min-[96rem]:px-48 border-t border-b border-white/50 bg-linear-120 from-[#0874B6]/50 to-[#25346A]/50">
                    <TPPLogo className="fill-white h-12"></TPPLogo>
                </div>
                <div className="py-6 px-6 min-[96rem]:px-48 mb-12 border-b border-white/50">
                    <div className="text-md">TPP is a world-leader in digital health; from apps enabling patients to manage their own care to comprehensive hospital solutions, TPP has been delivering technology that connects everyone in healthcare delivery for over twenty years.</div>
                </div>
            </div>
        </div>
    );
};