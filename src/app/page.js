import Link from "next/link";
import Image from "next/image";
import {
    Download,
    CheckCircle2,
    Shield,
    BarChart3,
    Settings2,
} from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white selection:bg-white/20 overflow-x-hidden">
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                <header className="flex items-center justify-between px-3 pr-6 md:pr-3 pl-6 py-3 bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-full md:w-full max-w-3xl shadow-2xl">
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

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
                        <Link
                            href="#features"
                            className="hover:text-white transition-colors"
                        >
                            Features
                        </Link>
                        <Link
                            href="/privacy-policy"
                            className="hover:text-white transition-colors"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms-of-use"
                            className="hover:text-white transition-colors"
                        >
                            Terms
                        </Link>
                    </nav>

                    <button
                        disabled
                        className="hidden md:block bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors cursor-not-allowed"
                    >
                        Soon!
                    </button>
                </header>
            </div>

            <main className="flex-1 w-full flex flex-col items-center">
                <section className="pt-48 pb-24 px-4 w-full max-w-5xl mx-auto text-center flex flex-col items-center relative z-10">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

                    <h1 className="text-6xl md:text-[7rem] font-bold tracking-tighter leading-[1.05] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-8 pr-2 pl-1 pb-2">
                        Make VTOP
                        <br />
                        useful.
                    </h1>

                    <p className="text-xl md:text-2xl text-neutral-400 font-medium tracking-tight max-w-2xl mx-auto mb-12">
                        The smartest way to track your attendance, analyze
                        marks, and manage your schedule. Your entire campus
                        life, perfectly organized.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <button
                            disabled
                            className="flex items-center justify-center gap-2 md:gap-3 bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-bold hover:scale-105 transition-transform cursor-not-allowed w-full md:w-auto"
                        >
                            <span>Soon!</span>
                        </button>
                    </div>
                </section>

                <section className="w-full max-w-6xl mx-auto px-4 -mt-10 mb-32 relative z-20">
                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#0A0A0A] rounded-[2rem] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden flex items-center justify-center group">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none"></div>

                        <Image
                            src="/assets/product/hero.jpg"
                            alt="VInhance Interface Preview"
                            fill
                            className="object-cover object-top opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                        />

                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
                            <h3 className="text-lg sm:text-2xl md:text-4xl font-semibold tracking-tight text-white/90 bg-black/40 px-6 md:px-8 py-3 md:py-4 rounded-[2rem] md:rounded-full backdrop-blur-md border border-white/10 shadow-2xl text-center leading-snug">
                                Experience the magic directly in VTOP.
                            </h3>
                        </div>
                    </div>
                </section>

                <section
                    id="features"
                    className="w-full max-w-6xl mx-auto px-4 py-24"
                >
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Everything you need.
                        </h2>
                        <p className="text-xl text-neutral-400 font-medium">
                            Built to handle the chaos, so you don't have to.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
                        <div className="lg:col-span-2 bg-[#111] rounded-[2rem] p-10 flex flex-col justify-between border border-white/5 relative overflow-hidden group">
                            <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-500/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-indigo-500/20 transition-colors"></div>

                            <div className="flex flex-col md:flex-row justify-between items-start mb-16 relative z-10 w-full min-h-[160px] gap-8 md:gap-0">
                                <BarChart3 className="w-12 h-12 text-indigo-400 shrink-0" />

                                <div className="w-full max-w-[280px] md:w-[280px] h-48 md:h-[220px] self-center md:self-auto rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl mt-4 md:mt-0 shrink-0">
                                    <Image
                                        src="/assets/product/attendance.png"
                                        alt="Smart Attendance UI"
                                        fill
                                        className="object-cover object-top scale-105 group-hover:scale-[1.15] transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-3 tracking-tight">
                                    Smart Attendance.
                                </h3>
                                <p className="text-lg text-neutral-400 font-medium leading-relaxed">
                                    Never worry about the 75% rule again. We
                                    calculate exactly how many classes you can
                                    skip across Theory and Lab, with real-time
                                    visual alerts and future attendance
                                    projection.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#111] rounded-[2rem] p-10 flex flex-col justify-between border border-white/5 group hover:bg-[#161616] transition-colors relative overflow-hidden">
                            <Shield className="w-12 h-12 text-emerald-400 mb-8" />

                            <div className="w-full h-32 mt-4 mb-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
                                <Image
                                    src="/assets/product/cgpa.png"
                                    alt="Hidden Grades Preview"
                                    fill
                                    className="object-cover object-center scale-105 group-hover:scale-[1.15] transition-transform duration-500"
                                />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-2 tracking-tight">
                                    Absolute Privacy.
                                </h3>
                                <p className="text-neutral-400 font-medium">
                                    Your data never leaves your browser. Hide
                                    your CGPA with one click when opening VTOP
                                    in public.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#111] rounded-[2rem] p-10 flex flex-col justify-between border border-white/5 group hover:bg-[#161616] transition-colors relative overflow-hidden">
                            <Settings2 className="w-12 h-12 text-blue-400 mb-8" />

                            <div className="w-full h-32 mt-4 mb-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
                                <Image
                                    src="/assets/product/captcha.png"
                                    alt="Quality of Life Feature"
                                    fill
                                    className="object-cover object-center scale-105 group-hover:scale-[1.15] transition-transform duration-500"
                                />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-2 tracking-tight">
                                    Quality of Life.
                                </h3>
                                <p className="text-neutral-400 font-medium">
                                    Auto-solve captchas instantly. Download full
                                    course materials with just one click.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-2 bg-[#111] rounded-[2rem] p-10 flex flex-col justify-between border border-white/5 relative overflow-hidden group">
                            <div className="absolute left-0 bottom-0 w-96 h-96 bg-purple-500/10 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2 group-hover:bg-purple-500/20 transition-colors"></div>

                            <div className="flex flex-col md:flex-row justify-between items-start mb-16 relative z-10 w-full min-h-[160px] gap-8 md:gap-0">
                                <CheckCircle2 className="w-12 h-12 text-purple-400 shrink-0" />

                                <div className="w-full max-w-[280px] md:w-[280px] h-48 md:h-[220px] self-center md:self-auto rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl mt-4 md:mt-0 shrink-0">
                                    <Image
                                        src="/assets/product/marks.png"
                                        alt="Grades and Weightage Analysis"
                                        fill
                                        className="object-cover object-top scale-105 group-hover:scale-[1.15] transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-3 tracking-tight">
                                    Marks & Grading Analysis.
                                </h3>
                                <p className="text-lg text-neutral-400 font-medium leading-relaxed">
                                    Instantly see the exact marks needed in FAT
                                    to pass each course. We break down
                                    weightage, show what you've scored versus
                                    what you've lost, and wrap it in a clean
                                    semester overview.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 text-center w-full">
                        <h3 className="text-3xl font-bold tracking-tight text-neutral-500">
                            And much more.
                        </h3>
                    </div>
                </section>

                <section className="w-full py-40 px-4 bg-[#0A0A0A] border-t border-b border-white/5 flex flex-col items-center justify-center text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-4xl">
                        Engineered exclusively for VIT, running beautifully{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-600">
                            in your browser.
                        </span>
                    </h2>
                </section>
            </main>

            <footer className="w-full max-w-6xl mx-auto py-16 px-6 items-center justify-between gap-8">
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
                                href="/"
                                className="hover:text-white transition-colors"
                            >
                                Chrome Web Store
                                <br />
                                (Soon!)
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
                                Made with love in Prayagraj, Lucknow and
                                Raiganj,
                            </div>
                        </div>

                        <span className="text-sm font-medium text-neutral-500 text-center md:text-right md:mr-2 mt-1">
                            for Chennai, Bhopal, Vellore, and AP.
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
