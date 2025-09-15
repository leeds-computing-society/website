import "./globals.css";
import type { Metadata } from "next";
import { MouseHighlight } from "./components/mouse-highlight";
import { Header } from "./components/header";
import { JetBrains_Mono } from "next/font/google";
import { Footer } from "./components/footer";
import { Background } from "./components/background";

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: "Leeds Computing Society",
    description: "The official student computing society of the University of Leeds. We work with the School of Computing and local companies to run a range of fun events and socials, providing plenty of activities for everyone.",
    twitter: {
        title: "Leeds Computing Society | Leeds University Union",
        description: "The official student computing society of the University of Leeds. We work with the School of Computing and local companies to run a range of fun events and socials, providing plenty of activities for everyone."
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>)
{
    return (
        <html lang="en" >
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