"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";


export default function Home()
{
    return (
        <div className="flex flex-col grow min-[32rem]:justify-center items-center text-center text-white max-w-5xl mx-auto">
            {/* <div className="h-72 min-[587px]:h-48 min-[933px]:h-24"> */}
            <div className="m-12">


                <TypeAnimation
                    preRenderFirstString={true}
                    omitDeletionAnimation={true}
                    sequence={[
                        "Leeds Computing Society",
                        "",
                        "Leeds Computing Society"
                    ]}
                    wrapper="div"
                    speed={40}
                    cursor={true}
                    className="text-3xl min-[32rem]:text-4xl min-[64rem]:text-5xl"
                />
                <div className="text-md min-[32rem]:text-lg mt-3">
                    Welcome to the website of the University of Leeds Computing Society
                </div>
                <div className="text-md min-[32rem]:text-lg mt-3">
                    We are the official student computing society of the University of Leeds. We work with the School of Computing and local companies to run a range of fun events and socials, so there's something for everyone.
                </div>
            </div>
        </div>

    );
};

// <div className="flex flex-col h-full text-center text-3xl text-white">

// </div>

// <div className="flex flex-col text-center text-white text-3xl">