"use client";
import { ScreenQuad, shaderMaterial } from "@react-three/drei";
import { ShaderMaterial } from "three";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";

import fragmentShader from "../static/background-gradient.frag";
import vertexShader from "../static/background-gradient.vert";

type Uniforms = {
    time: number;
};

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