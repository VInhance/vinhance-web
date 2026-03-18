import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

export const metadata = {
    title: "VInhance - Make VTOP useful",
    description:
        "VInhance is a powerful Chrome extension designed to make VTOP more feature-rich for students across all VIT campuses.",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${GeistSans.variable} ${GeistMono.variable}`}
        >
            <body
                className={`${GeistSans.className} antialiased font-sans min-h-screen bg-neutral-950 text-neutral-50 flex flex-col`}
            >
                <Header />
                <div className="flex-1">{children}</div>
                <Footer />
                <ScrollToTop />
                <Analytics />
            </body>
        </html>
    );
}
