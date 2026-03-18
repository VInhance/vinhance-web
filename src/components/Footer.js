import Link from "next/link";
import Image from "next/image";

const CHROME_WEBSTORE_URL =
    "https://chromewebstore.google.com/detail/vinhance/kdpkhnlloacadjadmepfnpdliglafaaf";

export default function Footer() {
    return (
        <footer className="w-full max-w-6xl mx-auto py-16 px-6 items-center justify-between gap-8 mt-5">
            <div className="flex flex-col md:flex-row items-start justify-between w-full mb-10 gap-10 md:gap-0">
                <div className="flex items-center gap-3">
                    <div className="relative w-16 h-16 rounded-[14px] overflow-hidden shadow-sm border border-white/10">
                        <Image
                            src="/logo_main.jpeg"
                            alt="VInhance Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:flex md:flex-row gap-x-8 gap-y-10 md:gap-20 text-left w-full md:w-auto mt-2 md:mt-0">
                    <div className="flex flex-col gap-4 md:gap-5 text-sm font-medium text-neutral-500">
                        <Link
                            href={CHROME_WEBSTORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            Chrome Web Store
                        </Link>
                    </div>
                    <div className="md:hidden flex flex-col gap-4 md:gap-5 text-sm font-medium text-neutral-500"></div>

                    <div className="flex flex-col gap-4 md:gap-5 text-sm font-medium text-neutral-500">
                        <Link
                            href="/whats-new"
                            className="hover:text-white transition-colors"
                        >
                            What's New
                        </Link>
                        <Link
                            href="/how-to-use"
                            className="hover:text-white transition-colors"
                        >
                            How to Use
                        </Link>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-5 text-sm font-medium text-neutral-500">
                        <Link
                            href="/privacy-policy"
                            className="hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms-of-use"
                            className="hover:text-white transition-colors"
                        >
                            Terms of Use
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row w-full justify-between items-center md:items-start mt-12 pt-8 border-t border-white/10 gap-10 md:gap-0">
                <div className="text-neutral-500 text-sm font-medium text-center md:text-left w-full md:w-auto mt-3">
                    Not affiliated with VIT.
                </div>

                <div className="flex flex-col items-center md:items-end gap-2 md:gap-1 w-full md:w-auto">
                    <div className="hidden md:flex flex-wrap justify-end items-center gap-2 text-lg font-medium text-neutral-400">
                        <span>Made with love in Prayagraj,</span>
                        <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/10 mx-1 shadow-lg bg-white/5 -rotate-6 hover:rotate-0 transition-transform duration-300">
                            <Image
                                src="/assets/footer/prayagraj.jpg"
                                alt="Prayagraj Map"
                                fill
                                className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-3 w-3 z-10">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A84FF] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0A84FF] border-[1.5px] border-white shadow-sm"></span>
                            </div>
                        </div>
                        <span>Lucknow</span>
                        <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/10 mx-1 shadow-lg bg-white/5 rotate-6 hover:rotate-0 transition-transform duration-300">
                            <Image
                                src="/assets/footer/lucknow.jpg"
                                alt="Lucknow Map"
                                fill
                                className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-3 w-3 z-10">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A84FF] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0A84FF] border-[1.5px] border-white shadow-sm"></span>
                            </div>
                        </div>
                        <span>and Raiganj,</span>
                        <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/10 mx-1 shadow-lg bg-white/5 -rotate-6 hover:rotate-0 transition-transform duration-300">
                            <Image
                                src="/assets/footer/raiganj.jpg"
                                alt="Raiganj Map"
                                fill
                                className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-3 w-3 z-10">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A84FF] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0A84FF] border-[1.5px] border-white shadow-sm"></span>
                            </div>
                        </div>
                    </div>

                    <div className="flex md:hidden flex-col items-center gap-5 w-full">
                        <div className="flex items-center justify-center -space-x-2">
                            <div className="relative w-16 h-16 rounded-[14px] overflow-hidden border-[2px] border-black shadow-lg bg-white/5 z-10 -rotate-3 hover:z-30 hover:rotate-0 transition-transform">
                                <Image
                                    src="/assets/footer/prayagraj.jpg"
                                    alt="Prayagraj Map"
                                    fill
                                    className="object-cover opacity-90"
                                />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-3 w-3 z-10">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A84FF] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0A84FF] border-[1.5px] border-white shadow-sm"></span>
                                </div>
                            </div>
                            <div className="relative w-16 h-16 rounded-[14px] overflow-hidden border-[2px] border-black shadow-lg bg-white/5 z-20 hover:z-30 transition-transform">
                                <Image
                                    src="/assets/footer/lucknow.jpg"
                                    alt="Lucknow Map"
                                    fill
                                    className="object-cover opacity-90"
                                />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-3 w-3 z-10">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A84FF] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0A84FF] border-[1.5px] border-white shadow-sm"></span>
                                </div>
                            </div>
                            <div className="relative w-16 h-16 rounded-[14px] overflow-hidden border-[2px] border-black shadow-lg bg-white/5 z-10 rotate-3 hover:z-30 hover:rotate-0 transition-transform">
                                <Image
                                    src="/assets/footer/raiganj.jpg"
                                    alt="Raiganj Map"
                                    fill
                                    className="object-cover opacity-90"
                                />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-3 w-3 z-10">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A84FF] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0A84FF] border-[1.5px] border-white shadow-sm"></span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center font-medium text-neutral-400 text-base leading-snug">
                            Made with love in Prayagraj, Lucknow and Raiganj,
                        </div>
                    </div>

                    <span className="text-sm font-medium text-neutral-500 text-center md:text-right md:mr-2 mt-1">
                        for Chennai, Bhopal, Vellore, and AP.
                    </span>
                </div>
            </div>
        </footer>
    );
}
