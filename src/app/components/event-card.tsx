import Image from "next/image";
import Link from "next/link";

export interface EventCardPropertiesInitial
{
    image?: string | undefined;
    name: string;
    location?: string | undefined;
    when: string;
    end?: string | undefined;
    description: string | string[];
    link?: string | undefined;
    linkText?: string | undefined;
    linkPersists?: boolean | undefined;
    hideTime?: boolean | undefined;
};

export interface EventCardPropertiesWhenKnown
{
    image?: string | undefined;
    name: string;
    location?: string | undefined;
    when: Date;
    end?: Date | undefined;
    description: string | string[];
    link?: string | undefined;
    linkText?: string | undefined;
    linkPersists?: boolean | undefined;
    hideTime?: boolean | undefined;
};

export interface EventCardProperties
{
    image?: string | undefined;
    name: string;
    location?: string | undefined;
    when?: Date | undefined;
    end?: Date | undefined;
    description: string | string[];
    link?: string | undefined;
    linkText?: string | undefined;
    linkPersists?: boolean | undefined;
    hideTime?: boolean | undefined;
};

export const EventCard = (properties: EventCardProperties) =>
{
    let when: string = "TBA";
    let end: string | undefined = undefined;

    if (properties.when !== undefined)
    {
        if (properties.hideTime === true) when = properties.when.toLocaleString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
            timeZone: "Europe/London"
        });

        if (properties.hideTime !== true) when = properties.when.toLocaleString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "Europe/London"
        });

        if (properties.end !== undefined)
        {
            if (properties.when.toDateString() === properties.end.toDateString()) end = properties.end.toLocaleString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                timeZone: "Europe/London"
            });

            if (properties.when.toDateString() !== properties.end.toDateString()) end = properties.end.toLocaleString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                timeZone: "Europe/London"
            });
        };
    };

    return (
        <div className="flex flex-col bg-brand-primary-450/50 border-t border-l border-r border-white/50">
            <div className="flex flex-row bg-brand-primary-400/50 border-b border-white/50 border-dashed">
                {properties.image !== undefined ?
                    <Image className="w-48 h-48 object-cover object-center border-r border-white/50 border-dashed" src={properties.image} alt="Event Logo" width={256} height={256} />
                    :
                    <div className="w-48 h-48 box-content border-r border-white/50 border-dashed">
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
                <div className="py-3 px-6 grow flex flex-col justify-between">
                    <div className="text-xl">{properties.name}</div>
                    <div className="flex flex-row justify-between gap-12 items-end text-md text-white/75">
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
            </div>
            <div className="py-3 px-6 flex flex-col justify-between">
                {
                    typeof properties.description === "string"
                        ?
                        <div className="text-md">{properties.description}</div>
                        :
                        properties.description.map((paragraph, index) => <div key={index} className="text-md not-first:mt-3">{paragraph}</div>)
                }
                {
                    (properties.link !== undefined && properties.linkText !== undefined) &&
                    <Link className="block text-center mt-3 mb-3 px-3 py-2 border transition-button bg-white/10 border-white/50 hover:bg-brand-secondary-500 cursor-pointer" href={properties.link}>{properties.linkText}</Link>
                }
            </div>
        </div>
    );
};