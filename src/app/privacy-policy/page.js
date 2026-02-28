import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
                        <Link href="/privacy-policy" className="text-white">
                            Privacy
                        </Link>
                        <Link
                            href="/terms-of-use"
                            className="hover:text-white transition-colors"
                        >
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
                    Privacy Policy.
                </h1>
                <p className="text-neutral-500 font-medium tracking-tight mb-16 text-lg">
                    Last updated: February 28, 2026
                </p>

                <div className="space-y-16 text-neutral-400 leading-relaxed text-lg font-medium">
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                            1. Introduction
                        </h2>
                        <p>
                            Welcome to VInhance ("we," "our," or "us"). We are
                            committed to protecting your personal information
                            and your right to privacy. This Privacy Policy
                            describes how your information is handled when you
                            use our Chrome extension, VInhance.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                            2. Local Processing of Data
                        </h2>
                        <p>
                            VInhance operates exclusively as a client-side
                            browser extension. All feature calculations,
                            including attendance, marks processing, and CGPA
                            masking, are performed locally within your browser.
                        </p>
                        <div className="mt-8 bg-[#111] border border-white/5 p-8 rounded-[2rem]">
                            <p className="text-neutral-200">
                                <strong>
                                    We do not run any remote servers, nor do we
                                    collect, store, or transmit your VTOP
                                    credentials, attendance records, grades, or
                                    personal information.
                                </strong>
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                            3. Third-Party Services (Google Calendar
                            integration)
                        </h2>
                        <p>
                            If you choose to use the Calendar & Schedule
                            Management sync features, our extension
                            authenticates with your Google account using
                            standard OAuth2 protocols provided by the Chrome
                            Identity API.
                        </p>
                        <ul className="list-disc pl-6 mt-6 space-y-4">
                            <li>
                                We only request permissions necessary to insert
                                events (classes, exams) into your Google
                                Calendar.
                            </li>
                            <li>
                                Authentication tokens remain securely stored
                                within your local browser profile.
                            </li>
                            <li>
                                We do not export or track your calendar events
                                to any external databases.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                            4. Permissions
                        </h2>
                        <p>
                            VInhance requests certain browser permissions to
                            function properly:
                        </p>
                        <ul className="list-disc pl-6 mt-6 space-y-4">
                            <li>
                                <strong className="text-white">
                                    Host Permissions:
                                </strong>{" "}
                                Directed only to VTOP domains (e.g.,
                                vtop.vit.ac.in, vtopcc.vit.ac.in,
                                vtop.vitbhopal.ac.in, vtop.vitap.ac.in) to
                                inject scripts that improve the UI and extract
                                data for local calculators.
                            </li>
                            <li>
                                <strong className="text-white">
                                    Identity:
                                </strong>{" "}
                                Required purely to authenticate you with Google
                                for calendar sync features if you choose to
                                enable them.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                            5. Revisions
                        </h2>
                        <p>
                            We may update this Privacy Policy from time to time
                            in order to reflect changes to our practices or for
                            operational, legal, or regulatory reasons. We
                            encourage you to review this policy periodically.
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
