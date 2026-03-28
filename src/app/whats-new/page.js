import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function WhatsNew() {
    const updates = [
        {
            version: "v1.0",
            description:
                "A comprehensive tool built specifically for VIT campuses, bringing every essential dashboard directly to your browser.",
            icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
            features: [
                "Refined UI & Font Style",
                "Target & Future Attendance Calculators",
                "Color-coded Attendance & Grade Alerts",
                "CGPA Privacy Toggle for Public Browsing",
                "FAT Passing Marks & Weightage Analysis",
                "OD Tracking with Smart Lab/Theory count",
                "Automated Captcha Solver",
                "Grade-Wise Highlighting in Grade History",
                "Compact & Detailed Attendance Views",
                "Last 3 Attendance Statuses",
                "Last Posted Date Tracking",
                "Attendance Summary",
                "Smart Color-Coded Calendar",
            ],
        },
    ];

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

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
                    What's New.
                </h1>
                <p className="text-neutral-500 font-medium tracking-tight mb-20 text-xl max-w-2xl">
                    Our latest updates, features, and improvements to help you
                    navigate campus life with ease.
                </p>

                <div className="space-y-12">
                    {updates.map((update, idx) => (
                        <section
                            key={idx}
                            className="relative pl-0 md:pl-12 ml-0 md:ml-4 md:border-l border-white/10 pb-12 last:pb-0"
                        >
                            <div className="hidden md:block absolute left-[-9px] top-0 w-[18px] h-[18px] bg-black border-2 border-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>

                            <div className="flex flex-col gap-6 bg-[#111] border border-white/5 p-8 rounded-[2.5rem] hover:bg-[#161616] transition-colors group">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                                            {update.icon}
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-white tracking-tight">
                                                {update.version}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 pr-3.5 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        <span className="text-emerald-400 text-sm font-bold">
                                            Live
                                        </span>
                                    </div>
                                </div>

                                <p className="text-neutral-400 leading-relaxed text-lg font-medium">
                                    {update.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                    {update.features.map((feature, fIdx) => (
                                        <div
                                            key={fIdx}
                                            className="flex items-center gap-3 text-neutral-300"
                                        >
                                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                                            <span className="font-medium">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
}
