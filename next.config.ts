import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    transpilePackages: ["three"],
    turbopack: {
        rules: {
            "*.frag": {
                loaders: ["raw-loader", "glslify", "glslify-loader"],
                as: "*.js",
            },
            "*.vert": {
                loaders: ["raw-loader", "glslify", "glslify-loader"],
                as: "*.js",
            }
        }
    }
};

export default nextConfig;
