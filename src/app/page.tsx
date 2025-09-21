"use client";
import { TypeAnimation } from "react-type-animation";
import { Flag } from "@/app/components/flag";
import { useEffect, useState } from "react";
import type { Organization, WithContext, WebSite } from "schema-dts";

const organisation: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Lifton Place",
        addressLocality: "Leeds",
        addressCountry: "GB",
        addressRegion: "England",
        postalCode: "LS2 9JZ"
    },
    contactPoint: {
        "@type": "ContactPoint",
        email: "committee@luucompsoc.co.uk"
    },
    description: "The official student computer science society of the University of Leeds. We work with the School of Computing and industry to run a range of academic events and socials, so there's something for everyone.",
    email: "committee@luucompsoc.co.uk",
    logo: "https://luucompsoc.co.uk/structured-data/organisation.jpg",
    name: "Leeds Computing Society",
    url: "https://luucompsoc.co.uk"
};

let website: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Leeds Computing Society",
    alternateName: ["CompSoc", "LUUCompSoc"],
    url: "https://luucompsoc.co.uk"
};

let structuredData: any[] = [
    organisation,
    website
];

export default function Page()
{
    let [flag, setFlag] = useState<boolean>(false);

    useEffect(() =>
    {
        if (typeof window !== "undefined")
        {
            let flagActive = localStorage.getItem("flag");

            if (flagActive === "true")
            {
                setFlag(true);
            };
        };
    }, []);

    return (
        <div className="flex flex-col grow min-[32rem]:justify-center items-center text-center text-white max-w-5xl mx-auto">
            {
                structuredData.map((object, index) => <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(object).replace(/</g, '\\u003c'),
                    }}
                />)
            }
            <div className="m-12 flex flex-col items-center gap-6">
                <div className="relative w-fit max-[29.13rem]:h-[9rem] max-[32rem]:h-[6rem] max-[33.63rem]:h-[10.5rem] max-[49.88rem]:h-[7rem] max-[66rem]:h-[3.5rem] h-[4.5rem]">
                    {flag && <Flag className="absolute top-[-2rem] left-[-0.75rem] rotate-330 w-12 fill-white"></Flag>}
                    <TypeAnimation
                        preRenderFirstString={true}
                        omitDeletionAnimation={true}
                        sequence={[
                            "",
                            "Leeds Computing Society"
                        ]}
                        wrapper="div"
                        speed={40}
                        cursor={true}
                        className="text-header-sm min-[32rem]:text-header-md min-[66rem]:text-header-lg"
                    />
                </div>
                <div className="text-md min-[32rem]:text-lg">
                    Welcome to the website of the University of Leeds Computing Society.
                </div>
                <div className="text-md min-[32rem]:text-lg">
                    We are the official student computer science society of the University of Leeds. We work with the School of Computing and industry to run a range of academic events and socials, so there's something for everyone.
                </div>
            </div>
        </div>
    );
};