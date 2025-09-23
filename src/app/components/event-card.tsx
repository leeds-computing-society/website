// "use client";
import Image from "next/image";
// import { useRouter } from "next/navigation";

export interface EventCardPropertiesInitial
{
    image?: string | undefined;
    name: string;
    location?: string | undefined;
    when: string;
    end?: string | undefined;
    description: string;
    link?: string | undefined;
    linkText?: string | undefined;
    hideTime?: boolean | undefined;
};

export interface EventCardPropertiesWhenKnown
{
    image?: string | undefined;
    name: string;
    location?: string | undefined;
    when: Date;
    end?: Date | undefined;
    description: string;
    link?: string | undefined;
    linkText?: string | undefined;
    hideTime?: boolean | undefined;
};

export interface EventCardProperties
{
    image?: string | undefined;
    name: string;
    location?: string | undefined;
    when?: Date | undefined;
    end?: Date | undefined;
    description: string;
    link?: string | undefined;
    linkText?: string | undefined;
    hideTime?: boolean | undefined;
};

export const EventCard = (properties: EventCardProperties) =>
{
    // let router = useRouter();

    let when: string = "TBA";
    let end: string | undefined = undefined;

    if (properties.when !== undefined)
    {
        if (properties.hideTime === true) when = properties.when.toLocaleString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });

        if (properties.hideTime !== true) when = properties.when.toLocaleString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });

        if (properties.end !== undefined)
        {
            if (properties.when.toDateString() === properties.end.toDateString()) end = properties.end.toLocaleString("en-GB", {
                hour: "2-digit",
                minute: "2-digit"
            });

            if (properties.when.toDateString() !== properties.end.toDateString()) end = properties.end.toLocaleString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            });
        };
    };

    // let buttonClicked = (link: string | undefined) =>
    // {
    //     if (link === undefined) return;
    //     router.push(link);
    // };

    return (
        <div className="flex flex-col min-[48rem]:flex-row bg-brand-primary-450/50 border-t min-[48rem]:border-l min-[48rem]:border-r border-white/50">
            <div className="bg-brand-primary-400/50 max-[48rem]:border-b min-[48rem]:border-r border-white/50 border-dashed">
                {properties.image !== undefined ?
                    <div className="w-48 h-full box-content max-[48rem]:h-48 max-[48rem]:border-r border-white/50 border-dashed overflow-hidden">
                        <Image className="object-cover object-center h-full w-full" src={properties.image} alt="Event Logo" width={256} height={256} />
                    </div>
                    :
                    <div className="w-48 box-content max-[48rem]:h-48 max-[48rem]:border-r border-white/50 border-dashed">
                        <svg viewBox="0 0 192 192" strokeWidth="1" className="stroke-white/50">
                            <line
                                x1="0"
                                y1="192"
                                x2="192"
                                y2="0"
                            />
                        </svg>
                    </div>
                }
            </div>
            <div className="py-3 px-6 flex flex-col justify-between">
                <div>
                    <div className="text-lg">{properties.name}</div>
                    <div className="text-md mt-3">{properties.description}</div>
                    {/* {properties.link !== undefined && properties.linkText !== undefined && <button onClick={() => buttonClicked(properties.link)} className="border border-white/50 bg-brand-secondary-450/75 hover:bg-brand-secondary-500 active:bg-brand-secondary-600 transition-button px-3 py-1.5 mt-3 cursor-pointer">{properties.linkText}</button>} */}
                </div>
                <div className="flex flex-row justify-between gap-12 items-end text-md mt-3 text-white/75">
                    {
                        properties.location !== undefined ?
                            <div>{properties.location}</div>
                            :
                            <div>TBA</div>
                    }
                    <div className="flex flex-row flex-wrap justify-end">
                        <div className="text-nowrap">{when}</div>
                        {end !== undefined && <div className="text-nowrap">&nbsp;- {end}</div>}
                    </div>
                </div>
            </div>
        </div >
    );
};