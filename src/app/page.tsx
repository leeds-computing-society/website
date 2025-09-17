"use client";
import { TypeAnimation } from "react-type-animation";
// import { Flag } from "@/app/components/flag";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

export default function Page()
{
    // let searchParams = useSearchParams();
    // let [flag, setFlag] = useState<boolean>(false);

    // useEffect(() =>
    // {
    //     if (searchParams.get("flag") === "true") return setFlag(true);
    //     setFlag(false);
    // }, [searchParams]);

    return (
        <div className="flex flex-col grow min-[32rem]:justify-center items-center text-center text-white max-w-5xl mx-auto">
            <h1 className="hidden">Home</h1>
            <div className="m-12 flex flex-col items-center gap-6">
                <div className="relative w-fit max-[29.13rem]:h-[9rem] max-[32rem]:h-[6rem] max-[33.63rem]:h-[10.5rem] max-[49.88rem]:h-[7rem] max-[66rem]:h-[3.5rem] h-[4.5rem]">
                    {/* {flag && <Flag className="absolute top-[-2rem] left-[-0.75rem] rotate-330 w-12 fill-white"></Flag>} */}
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
                    We are the official student computing society of the University of Leeds. We work with the School of Computing and local companies to run a range of fun events and socials, so there's something for everyone.
                </div>
            </div>
        </div>
    );
};