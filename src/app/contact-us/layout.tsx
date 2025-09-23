import type { Metadata } from "next";
import { defaultMetadata } from "@/app/metadata";

export const metadata: Metadata = {
    ...defaultMetadata,
    title: "Contact Us | Leeds Computing Society",
    description: "For general queries relating to Leeds Computing Society please reach out to us via email."
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>)
{
    return <>{children}</>;
};