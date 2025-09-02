"use client";
import { useGSAP } from "@gsap/react";
import { ScreenQuad, shaderMaterial } from "@react-three/drei";
import gsap from "gsap";
import { ShaderMaterial, Vector3 } from "three";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import fragmentShader from "../static/background-gradient.frag";
import vertexShader from "../static/background-gradient.vert";

// gsap.registerPlugin(useGSAP, ScrollTrigger);

type Uniforms = {
    time: number;
};

// let colourPalette: any = { value: [new Vector3(0, 7 / 255, 77 / 255), new Vector3(36 / 255, 135 / 255, 163 / 255)] };

// console.log(colourPalette);

let initialUniforms: Uniforms = {
    time: 0,
};

export const BackgroundGradientMaterial = shaderMaterial(initialUniforms, vertexShader, fragmentShader);

extend({ BackgroundGradientMaterial });

declare module "@react-three/fiber" {
    interface ThreeElements
    {
        backgroundGradientMaterial: any;
    }
};

export const BackgroundGradient = () =>
{
    const gradientShader = useRef<ShaderMaterial & Partial<Uniforms>>(null);

    useFrame(({ clock }) =>
    {
        if (!gradientShader.current) return;
        console.log(clock.elapsedTime);
        gradientShader.current.time = clock.elapsedTime * 0.1;
    });

    return (
        <ScreenQuad>
            <backgroundGradientMaterial
                key={BackgroundGradientMaterial.key}
                ref={gradientShader}
                time={0}
            />
        </ScreenQuad>
    );
};