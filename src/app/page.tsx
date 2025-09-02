"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Home()
{
    return (
        <div className="flex flex-col justify-center text-center grow text-white max-w-5xl mx-auto">
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
                className="text-5xl"
            />
            <div className="text-lg mt-3">
                Welcome to the website of the University of Leeds Computing Society
            </div>
            <div className="text-lg mt-3">
                We are the official student computing society of the University of Leeds. We work with the School of Computing and local companies to run a range of fun events and socials, so there's something for everyone.
            </div>
        </div>

    );
};

// <div className="flex flex-col h-full text-center text-3xl text-white">

// </div>

// <div className="flex flex-col text-center text-white text-3xl">