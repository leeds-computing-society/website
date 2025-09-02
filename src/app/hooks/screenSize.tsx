"use client";
import { useEffect, useState } from "react";

export const useScreenSize = () =>
{
    let [screenSize, setScreenSize] = useState({
        width: 0,
        height: 0
    });

    useEffect(() =>
    {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight
        });

        let handleResize = () =>
        {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener("resize", handleResize);

        return () =>
        {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return screenSize;
};
