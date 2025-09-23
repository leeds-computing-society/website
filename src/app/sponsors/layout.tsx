import type { Metadata } from "next";
import { defaultMetadata } from "@/app/metadata";

export const metadata: Metadata = {
    ...defaultMetadata,
    title: "Sponsors | Leeds Computing Society",
    description: "We work with a range of sponsors to provide our members with opportunities to network, develop their skills, and connect with industry."
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>)
{
    return <>{children}</>;
};