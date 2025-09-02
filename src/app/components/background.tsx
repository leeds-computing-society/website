"use client";
import { Canvas } from "@react-three/fiber";
import { BackgroundGradient } from "./background-gradient";

export const Background = () =>
{
    return (
        // <Canvas className="!fixed inset-0 -z-10" gl={{
        //     alpha: false,
        //     antialias: false,
        //     powerPreference: "high-performance"
        // }}>
        //     <BackgroundGradient></BackgroundGradient>
        // </Canvas>
        <div className="absolute w-full h-full -z-10">
            <Canvas className="w-full h-full"
                gl={{
                    alpha: true,
                    antialias: false,
                    powerPreference: "high-performance"
                }}>
                <BackgroundGradient></BackgroundGradient>
            </Canvas>
        </div>
    );
};