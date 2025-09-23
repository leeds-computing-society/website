import type { Metadata } from "next";
import { defaultMetadata } from "@/app/metadata";

export const metadata: Metadata = {
    ...defaultMetadata,
    title: "Committee | Leeds Computing Society",
    description: "Our committee work to ensure the society runs smoothly and that we have a range of events for everyone to enjoy."
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>)
{
    return <>{children}</>;
};