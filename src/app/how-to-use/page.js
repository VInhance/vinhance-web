import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft,
    Download,
    Eye,
    Layout,
    SlidersHorizontal,
    Settings,
    GraduationCap,
    Calendar,
    DownloadCloud,
    Key,
    Zap,
    Shield,
    Calculator,
    Palette,
} from "lucide-react";

export default function HowToUse() {
    const steps = [
        {
            title: "Installation",
            description:
                "Get started by adding VInhance to your browser. It works seamlessly on Chrome, Brave, Edge, and other Chromium browsers.",
            icon: <Download className="w-8 h-8 text-indigo-400" />,
            action: (
                <Link
                    href="https://chromewebstore.google.com/detail/vinhance/kdpkhnlloacadjadmepfnpdliglafaaf"
                    target="_blank"
                    className="bg-white text-black font-bold px-6 py-2.5 rounded-full hover:scale-105 transition-transform inline-flex items-center gap-2 mt-4"
                >
                    Install from Chrome Web Store
                </Link>
            ),
        },
        {
            title: "Refined Dashboard & Smart Schedule",
            description:
                "Experience VTOP like never before with a clean, modern layout and refined typography. Enjoy a completely overhauled live dashboard schedule widget featuring dynamic time-left tags and intelligent holiday awareness.",
            icon: <Palette className="w-8 h-8 text-purple-400" />,
            image: "/assets/product/home.webp",
        },
        {
            title: "Customization & Auto-Semester",
            description:
                "Use the VInhance popup to toggle universal Dark Mode (Beta) across VTOP and LMS, personalize the portal with your favorite accent colors, and enable zero-click automatic active semester detection.",
            icon: <Settings className="w-8 h-8 text-cyan-400" />,
            image: "/assets/product/popup.webp",
        },
        {
            title: "Log in to VTOP",
            description:
                "Navigate to your campus VTOP portal. VInhance automatically solves and fills the captcha for you instantly.",
            icon: <Zap className="w-8 h-8 text-yellow-500" />,
            image: "/assets/product/captcha.webp",
        },
        {
            title: "Privacy Protection",
            description:
                "Toggle privacy mode to instantly hide your CGPA, grades, and profile details while browsing in public places.",
            icon: <Shield className="w-8 h-8 text-rose-500" />,
            image: "/assets/product/cgpa.webp",
        },
        {
            title: "Smart Attendance",
            description:
                "Access enhanced attendance views with skip potential, future projections, and your last 3 classes status. Includes Compact/Detailed toggle and Last Posted date.",
            icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
            image: "/assets/product/attendance.webp",
        },
        {
            title: "Calendar",
            description:
                "Color-coded events and highlights today's date for quick schedule reference.",
            icon: <Calendar className="w-8 h-8 text-yellow-400" />,
            image: "/assets/product/calendar.webp",
        },
        {
            title: "Smart Grade Highlighting",
            description:
                "Grade History is automatically color-coded with high-contrast themes for N1-N4 and other grades for instant recognition.",
            icon: <GraduationCap className="w-8 h-8 text-emerald-500" />,
            image: "/assets/product/grade-history.webp",
        },
        {
            title: "Marks Analysis",
            description:
                "Analyze course weightage and calculate marks needed in FAT to reach your target grade based on current components.",
            icon: <SlidersHorizontal className="w-8 h-8 text-cyan-400" />,
            image: "/assets/product/marks.webp",
        },
        {
            title: "OD Summary",
            description:
                "Track your Theory vs Lab ODs with smart counting logic and see exactly how many you have used.",
            icon: <Layout className="w-8 h-8 text-pink-400" />,
            image: "/assets/product/od.webp",
        },
        {
            title: "Attendance Insights",
            description:
                "Get a high-level overview of your entire semester's attendance performance and plan your leaves effectively.",
            icon: <Calculator className="w-8 h-8 text-indigo-400" />,
            image: "/assets/product/attendance-summary.webp",
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
                    How to Use.
                </h1>
                <p className="text-neutral-500 font-medium tracking-tight mb-20 text-xl max-w-2xl">
                    Learn how to unlock the full potential of VInhance in just a
                    few simple steps.
                </p>

                <div className="space-y-32">
                    {steps.map((step, idx) => (
                        <section key={idx} className="relative group">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <div className="p-4 bg-white/5 rounded-[50px] border border-white/10 w-fit">
                                        {step.icon}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug">
                                        {step.title}
                                    </h2>
                                    <p className="text-neutral-400 font-medium text-lg leading-relaxed">
                                        {step.description}
                                    </p>
                                    {step.action}
                                </div>
                                {step.image && (
                                    <div className="rounded-[10px] bg-[#111] border border-neutral-800 overflow-hidden shadow-2xl group-hover:scale-[1.01] transition-transform duration-500">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            width={1000}
                                            height={600}
                                            className="w-full h-auto block"
                                        />
                                    </div>
                                )}
                            </div>
                        </section>
                    ))}
                </div>

                <section className="mt-48 p-12 bg-[#111] border border-white/5 rounded-[3rem] text-center space-y-8 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
                    <h2 className="text-4xl font-bold tracking-tight">
                        Need more help?
                    </h2>
                    <p className="text-neutral-400 font-medium text-lg max-w-xl mx-auto">
                        If you encounter any issues or have questions about
                        specific features, feel free to reach out to us on our
                        community channels.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="https://chromewebstore.google.com/detail/kdpkhnlloacadjadmepfnpdliglafaaf/support"
                            target="_blank"
                            className="bg-white/5 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors border border-white/10"
                        >
                            Chrome Web Store Support
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}
