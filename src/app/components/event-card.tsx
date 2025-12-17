"use client";
import Image from "next/image";
import Link from "next/link";
import { type RowComponentProps } from "react-window";

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
        <div className="flex flex-col bg-brand-primary-450/50 border-t min-[48rem]:border-l min-[48rem]:border-r not-last:border-b border-white/50 not-last:mb-6">
            <div className="flex flex-row bg-brand-primary-400/75 border-b border-white/50 border-dashed">

                <div className="py-3 px-6 grow flex flex-col justify-between gap-3 min-[48rem]:gap-1.5">
                    <div className="text-xl">{properties.name}</div>
                    <div className="flex flex-row justify-between gap-12 items-end text-sm min-[48rem]:text-md text-white/75">
                        {
                            properties.location !== undefined ?
                                <div>{properties.location}</div>
                                :
                                <div>TBA</div>
                        }
                        <div className="flex flex-row flex-wrap justify-end text-end">
                            <div className="text-nowrap">{when}</div>
                            {end !== undefined && <div className="text-nowrap">&nbsp;- {end}</div>}
                        </div>
                    </div>
                </div>
            </div>
            {properties.image === undefined ||
                <Image className="w-full h-32  min-[48rem]:h-64 object-cover object-center border-b border-white/50 border-dashed" src={properties.image} alt="Event Logo" width={1148} height={256} />

            }
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