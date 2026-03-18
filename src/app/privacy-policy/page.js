import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 pb-20 overflow-x-hidden">
            <main className="container mx-auto max-w-4xl pt-32 md:pt-48 px-4 md:px-0">
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
                    Last updated: March 19, 2026
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
                            2. Data Security & Local Processing
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
                                    We do not run any remote servers. Your VTOP
                                    credentials, attendance records, grades, and
                                    personal information are never transmitted
                                    to us or any third-party services.
                                </strong>
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                            3. Permissions
                        </h2>
                        <p>
                            VInhance requests limited permissions to ensure a
                            seamless experience on VTOP portals:
                        </p>
                        <ul className="list-disc pl-6 mt-6 space-y-4">
                            <li>
                                <strong className="text-white">
                                    Host Permissions (VTOP Domains):
                                </strong>{" "}
                                Allows the extension to read and modify content
                                on official VIT domains to extract your
                                timetable and grades for local display.
                            </li>
                            <li>
                                <strong className="text-white">
                                    WebRequest:
                                </strong>{" "}
                                Used to intercept network requests for the
                                automated captcha solver and session management
                                within VTOP.
                            </li>
                            <li>
                                <strong className="text-white">
                                    Downloads:
                                </strong>{" "}
                                Required to automatically rename and organize
                                your downloaded course materials and assignment
                                files.
                            </li>
                            <li>
                                <strong className="text-white">Storage:</strong>{" "}
                                Used exclusively to save your local preferences,
                                such as your privacy toggle state and dashboard
                                settings.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                            4. Revisions
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
        </div>
    );
}
