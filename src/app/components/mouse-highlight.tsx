"use client";
import React, { useState, useEffect } from "react";

export const MouseHighlight = () =>
{
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() =>
    {
        const handleMouseMove = (event: MouseEvent) =>
        {
            setMousePosition({
                x: event.pageX,
                y: event.pageY
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () =>
        {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="absolute w-[10vh] h-[10vh] top-0 left-0 translate-[-50%] rounded-full blur-mouse bg-brand-secondary-500/50 -z-10" style={{ top: `${mousePosition.y}px`, left: `${mousePosition.x}px` }}>
        </div>
    );
};