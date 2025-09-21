import "@/app/globals.css";
import type { Metadata, Viewport } from "next";
import { MouseHighlight } from "@/app/components/mouse-highlight";
import { Header } from "@/app/components/header";
import { JetBrains_Mono } from "next/font/google";
import { Footer } from "@/app/components/footer";
import { Background } from "@/app/components/background";
import { defaultMetadata } from "@/app/metadata";

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    ...defaultMetadata
};

export const viewport: Viewport = {
    themeColor: "#00074d"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>)
{
    return (
        <html lang="en">
            <head>
            </head>
            <body className={jetBrainsMono.className + " absolute h-full w-full m-0 p-0 bg-brand-primary-500"}>
                <div className="absolute w-full flex flex-col overflow-hidden">
                    <Background></Background>
                    <MouseHighlight></MouseHighlight>
                    <Header></Header>
                    <div className="min-h-[100vh] flex flex-col">
                        <div className="pt-14 grow flex flex-col">
                            {children}
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </body>
        </html>
    );
};