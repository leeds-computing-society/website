import type { Metadata } from "next";
import { defaultMetadata } from "@/app/metadata";

export const metadata: Metadata = {
    ...defaultMetadata,
    title: "Committee | Leeds Computing Society"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>)
{
    return <>{children}</>;
};