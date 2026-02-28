import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function TermsOfUse() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 pb-20 overflow-x-hidden">
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                <header className="flex items-center justify-between px-4 md:px-6 py-3 bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-full w-full max-w-3xl shadow-2xl">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-8 h-8 rounded-[5px] overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-shadow">
                            <Image
                                src="/logo_main.jpeg"
                                alt="VInhance Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="font-semibold text-lg tracking-tight">
                            VInhance
                        </span>
                    </Link>

                    <nav className="flex items-center gap-4 md:gap-8 text-sm font-medium text-neutral-400">
                        <Link
                            href="/privacy-policy"
                            className="hover:text-white transition-colors"
                        >
                            Privacy
                        </Link>
                        <Link href="/terms-of-use" className="text-white">
                            Terms
                        </Link>
                    </nav>
                </header>
            </div>

            <main className="container mx-auto max-w-3xl pt-48 px-4">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 font-medium bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 w-fit"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                    Terms of Use.
                </h1>
                <p className="text-neutral-500 font-medium tracking-tight mb-16 text-lg">
                    Last updated: February 28, 2026
                </p>

                <div className="space-y-16 text-neutral-400 leading-relaxed text-lg font-medium">
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                            1. Agreement to Terms
                        </h2>
                        <p>
                            By installing and using the VInhance browser
                            extension, you agree to be bound by these Terms of
                            Use. If you disagree with any part of these terms,
                            you do not have permission to access or use the
                            extension.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                            2. Non-Affiliation Disclaimer
                        </h2>
                        <p>
                            VInhance is an independent project created by
                            students, for students.
                        </p>
                        <div className="mt-8 bg-[#111] border border-white/5 p-8 rounded-[2rem]">
                            <p className="text-neutral-200">
                                <strong>
                                    This extension is NOT officially affiliated
                                    with, endorsed by, or connected to VIT or
                                    any of its campuses.
                                </strong>{" "}
                                All product and company names are the registered
                                trademarks of their original owners.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                            3. Use Constraints
                        </h2>
                        <p>
                            The tools, calculators, and syncing functions
                            provided by VInhance are designed perfectly as
                            informational aids. However, they rely strictly on
                            the DOM structure and data provided by the official
                            VTOP portal.
                        </p>
                        <ul className="list-disc pl-6 mt-6 space-y-4">
                            <li>
                                Calculations (like attendance 75% thresholds and
                                passing marks) are estimations provided "AS-IS".
                            </li>
                            <li>
                                You agree to verify mission-critical information
                                directly on the official VTOP interface without
                                the extension enabled.
                            </li>
                            <li>
                                We are not responsible for any academic or
                                administrative consequences resulting from
                                decisions made based on data processed by the
                                extension.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                            4. No Warranties
                        </h2>
                        <p>
                            VInhance is provided on an "as is" and "as
                            available" basis without any warranties of any kind.
                            We do not warrant that the extension will be
                            uninterrupted, error-free, or entirely secure. Since
                            VTOP portals change periodically, we cannot
                            guarantee that all features will work consistently
                            after portal updates.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                            5. Governing Law
                        </h2>
                        <p>
                            These Terms shall be governed and construed in
                            accordance with standard open project conventions.
                            By using this extension, you recognize that the
                            developers hold no liability for system outages,
                            bans, or data misinterpretations resulting from the
                            usage of third-party modifications to your browsing
                            session.
                        </p>
                    </section>
                </div>
            </main>

            <footer className="w-full max-w-3xl mx-auto py-16 px-6 border-t border-white/10 mt-32 flex justify-between items-center text-neutral-500 text-sm font-medium">
                <p>Not affiliated with VIT.</p>
                <Link href="/" className="hover:text-white transition-colors">
                    Return home
                </Link>
            </footer>
        </div>
    );
}
