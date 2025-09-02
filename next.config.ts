import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    transpilePackages: ["three"],
    turbopack: {
        rules: {
            "*.frag": {
                loaders: ["raw-loader", "glslify", "glslify-loader"],
                as: "*.tsx",
            },
            "*.vert": {
                loaders: ["raw-loader", "glslify", "glslify-loader"],
                as: "*.tsx",
            }
        }
    },
    webpack: (config, { isServer }) =>
    {
        // Add a rule to handle .frag files
        config.module.rules.push({
            test: /\.frag$/, // Match .frag files
            use: 'raw-loader', // Use raw-loader to load them as strings
        });

        // Add a rule to handle .vert files (if you also use vertex shaders)
        config.module.rules.push({
            test: /\.vert$/,
            use: 'raw-loader',
        });

        return config;
    },
    //     webpack: (configuration) =>
    //     {
    //         configuration.module.rules.push({
    // test: /\.frag/,
    //         });


    //         return configuration;
    //     }
};

export default nextConfig;
