import Link from "next/link";

export default function Page()
{
    return (
        <div className="flex flex-row justify-center grow text-white">
            <div className="flex flex-col mx-6 min-[64rem]:mx-12 min-[80rem]:mx-48 grow max-w-[96rem] border-l border-r border-dashed border-white/50">
                <div className="py-3 px-6 min-[96rem]:px-48 mt-12 text-3xl border-t border-b border-white/50 bg-brand-primary-450/50">General Queries</div>
                <div className="py-6 px-6 min-[96rem]:px-48 text-md flex flex-col gap-3">
                    <div>For general queries relating to Leeds Computing Society please reach out to us via email. We will try our best to respond as quickly as possible.</div>
                    <Link className="w-fit px-3 py-2 border transition-button border-white/50 hover:bg-brand-secondary-500" href="mailto:committee@luucompsoc.co.uk">committee@luucompsoc.co.uk</Link>
                </div>
                <div className="py-3 px-6 min-[96rem]:px-48 text-3xl border-t border-b border-white/50 bg-brand-primary-450/50">Incident Report</div>
                <div className="py-6 px-6 min-[96rem]:px-48 text-md mb-12 flex flex-col gap-3 border-b border-white/50">
                    <div>Leeds Computing Society is committed to making sure that every member feels safe, welcome, and respected. If something happens that goes against these values, we want to know about it. Please use the form below to report behaviour that has made you, or someone else, feel uncomfortable or unsafe in our spaces.</div>
                    <Link className="w-fit px-3 py-2 border transition-button border-white/50 hover:bg-brand-secondary-500" href="https://docs.google.com/forms/d/e/1FAIpQLSfx90E8cE8p3we0-Tiz4A4Js7XKIr0RG-lbU_Yn5NmP87s-ww/viewform?usp=dialog">Incident Report Form</Link>
                </div>
            </div>
        </div>
    );
};