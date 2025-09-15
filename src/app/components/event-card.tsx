"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface EventCardProperties
{
    image?: string | null | undefined;
    name: string;
    location: string;
    when?: Date | null | undefined;
    description: string;
    link?: string | null | undefined;
    linkText?: string | null | undefined;
};

export const EventCard = (properties: EventCardProperties) =>
{
    let router = useRouter();

    let buttonClicked = (link: string | null | undefined) =>
    {
        if (link == null) return;
        router.push(link);
    };

    return (
        <div className="flex flex-col min-[48rem]:flex-row bg-brand-primary-450/50 border-t min-[48rem]:border-l min-[48rem]:border-r border-white/50">
            <div className="bg-brand-primary-400/50 max-[48rem]:border-b min-[48rem]:border-r border-white/50 border-dashed">
                {properties.image != null ?
                    <div className="w-48 max-[48rem]:h-48 border-b border-white/50 border-dashed">
                        <Image src={properties.image} alt="Event Logo" width={192} height={192} />
                    </div>
                    :
                    <svg viewBox="0 0 192 192" strokeWidth="1" className="stroke-white/50 max-[48rem]:h-48 w-48 h-full">
                        <line
                            x1="0"
                            y1="192"
                            x2="192"
                            y2="0"
                        />
                    </svg>
                }
            </div>
            <div className="py-3 px-6 flex flex-col justify-between">
                <div> <div className="text-lg">{properties.name}</div>
                    <div className="text-md mt-3">{properties.description}</div>
                    {properties.link != null && properties.linkText != null && <button onClick={() => buttonClicked(properties.link)} className="border border-white/50 bg-brand-secondary-450/75 hover:bg-brand-secondary-500 active:bg-brand-secondary-600 transition-button px-3 py-1.5 mt-3 cursor-pointer">{properties.linkText}</button>}
                </div>
                <div className="flex flex-row justify-between gap-24 items-end text-md mt-3 text-white/75">
                    <div>{properties.location}</div>
                    {
                        properties.when != null ?
                            <div className="text-nowrap">{properties.when.toLocaleString("en-GB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit"
                            })}</div>
                            :
                            <div className="text-nowrap">TBA</div>
                    }
                </div>
            </div>
        </div >
    );
};