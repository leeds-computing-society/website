import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap
{
    return [
        {
            url: "https://luucompsoc.co.uk",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1
        },
        {
            url: "https://luucompsoc.co.uk/events",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9
        },
        {
            url: "https://luucompsoc.co.uk/committee",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: "https://luucompsoc.co.uk/sponsors",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: "https://luucompsoc.co.uk/leedshack",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8
        }
    ];
};