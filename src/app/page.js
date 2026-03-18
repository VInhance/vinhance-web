import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Shield, BarChart3, Settings2, Zap } from "lucide-react";

const CHROME_WEBSTORE_URL =
    "https://chromewebstore.google.com/detail/vinhance/kdpkhnlloacadjadmepfnpdliglafaaf";
const CHROME_WEBSTORE_BADGE = "/assets/chrome-web-store-badge.png";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white selection:bg-white/20 overflow-x-hidden">
            <main className="flex-1 w-full flex flex-col items-center">
                <section className="pt-32 md:pt-48 pb-24 px-4 w-full max-w-5xl mx-auto text-center flex flex-col items-center relative z-10">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

                    <h1 className="text-5xl md:text-[7rem] font-bold tracking-tighter leading-[1.05] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-8 pr-2 pl-1 pb-2">
                        Make VTOP
                        <br />
                        useful.
                    </h1>

                    <p className="text-xl md:text-2xl text-neutral-400 font-medium tracking-tight max-w-2xl mx-auto mb-12">
                        The smartest way to track your attendance, analyze
                        marks, and manage your schedule. Your entire campus
                        life, perfectly organized.
                    </p>

                    <div className="flex flex-col items-center gap-4 cursor-pointer">
                        <Link
                            href={CHROME_WEBSTORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-white rounded-full pl-5.5 pr-4 py-0 hover:scale-105 transition-transform md:w-auto"
                        >
                            <Image
                                src={CHROME_WEBSTORE_BADGE}
                                alt="Get VInhance on Chrome Web Store"
                                width={220}
                                height={66}
                                priority
                                className="h-auto w-[200px] md:w-[220px]"
                            />
                        </Link>
                        <p className="text-xs md:text-sm text-neutral-400 font-medium text-center leading-snug max-w-[460px]">
                            Add to Chrome (or Brave, Edge, or any Chromium
                            browser). It's free.
                        </p>
                    </div>
                </section>

                <section className="w-full max-w-6xl mx-auto px-4 -mt-10 mb-32 relative z-20">
                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#0A0A0A] rounded-[2rem] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden flex items-center justify-center group">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none"></div>

                        <Image
                            src="/assets/product/hero.webp"
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
                        <div className="lg:col-span-2 bg-[#111] rounded-[2.5rem] p-8 md:p-10 border border-white/5 relative overflow-hidden group min-h-[380px] flex flex-col justify-between">
                            <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-500/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-indigo-500/20 transition-colors"></div>

                            <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0 relative z-10">
                                <BarChart3 className="w-12 h-12 text-indigo-400" />
                                <div className="rounded-2xl relative w-fit border border-white/5 shadow-2xl shrink-0">
                                    <Image
                                        src="/assets/product/attendance.webp"
                                        alt="Smart Attendance UI"
                                        width={240}
                                        height={160}
                                        className="w-[200px] md:w-[240px] h-auto block rounded-2xl"
                                    />
                                </div>
                            </div>

                            <div className="relative z-10 pt-8">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                                    Smart Attendance.
                                </h3>
                                <p className="text-lg text-neutral-400 font-medium leading-relaxed max-w-2xl">
                                    Never worry about the 75% rule again. We
                                    calculate exactly how many classes you can
                                    skip across Theory and Lab, with real-time
                                    visual alerts and future attendance
                                    projection.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#111] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between border border-white/5 group hover:bg-[#161616] transition-colors relative overflow-hidden min-h-[440px]">
                            <Shield className="w-12 h-12 text-emerald-400 mb-4" />

                            <div className="rounded-2xl overflow-hidden relative w-fit border border-white/5 shadow-2xl shrink-0 my-4 flex items-center justify-center bg-black/20">
                                <Image
                                    src="/assets/product/cgpa.webp"
                                    alt="Privacy Preview"
                                    width={240}
                                    height={160}
                                    className="w-[200px] md:w-[240px] h-auto block rounded-2xl"
                                />
                            </div>

                            <div className="relative z-10 pt-4">
                                <h3 className="text-2xl font-bold tracking-tight mb-3">
                                    Absolute Privacy.
                                </h3>
                                <p className="text-neutral-400 font-medium leading-relaxed">
                                    Your data never leaves your browser. Hide
                                    your CGPA with one click when opening VTOP
                                    in public.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#111] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between border border-white/5 group hover:bg-[#161616] transition-colors relative overflow-hidden min-h-[440px]">
                            <Zap className="w-12 h-12 text-yellow-500 mb-4" />

                            <div className="rounded-2xl overflow-hidden relative w-fit border border-white/5 shadow-2xl shrink-0 my-4 flex items-center justify-center bg-black/20">
                                <Image
                                    src="/assets/product/captcha.webp"
                                    alt="Captcha Preview"
                                    width={240}
                                    height={160}
                                    className="w-[200px] md:w-[240px] h-auto block rounded-2xl"
                                />
                            </div>

                            <div className="relative z-10 pt-4">
                                <h3 className="text-2xl font-bold tracking-tight mb-3">
                                    Quality of Life.
                                </h3>
                                <p className="text-neutral-400 font-medium leading-relaxed">
                                    Auto-solve captchas instantly. Download full
                                    course materials with just one click.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-2 bg-[#111] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between border border-white/5 relative overflow-hidden group min-h-[380px]">
                            <div className="absolute left-0 bottom-0 w-96 h-96 bg-purple-500/10 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2 group-hover:bg-purple-500/20 transition-colors"></div>

                            <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0 relative z-10">
                                <CheckCircle2 className="w-12 h-12 text-purple-400" />
                                <div className="rounded-2xl overflow-hidden relative w-fit border border-white/5 shadow-2xl shrink-0">
                                    <Image
                                        src="/assets/product/marks.webp"
                                        alt="Marks Analysis Preview"
                                        width={240}
                                        height={160}
                                        className="w-[200px] md:w-[240px] h-auto block rounded-2xl"
                                    />
                                </div>
                            </div>

                            <div className="relative z-10 pt-8">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                                    Marks & Grading Analysis.
                                </h3>
                                <p className="text-lg text-neutral-400 font-medium leading-relaxed max-w-2xl">
                                    Instantly see the exact marks needed in FAT
                                    to pass each course. We break down weightage
                                    and what you've lost, all in a clean
                                    overview.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-2 bg-[#111] rounded-[2.5rem] p-8 md:p-10 border border-white/5 relative overflow-hidden group min-h-[380px] flex flex-col justify-between">
                            <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-500/10 blur-[80px] rounded-full translate-x-1/2 translate-y-1/2 group-hover:bg-blue-500/20 transition-colors"></div>

                            <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0 relative z-10">
                                <Settings2 className="w-12 h-12 text-blue-400" />
                                <div className="rounded-2xl overflow-hidden relative w-fit border border-white/5 shadow-2xl shrink-0 bg-black/20 flex items-center justify-center p-2">
                                    <Image
                                        src="/assets/product/calendar.webp"
                                        alt="Calendar Preview"
                                        width={240}
                                        height={160}
                                        className="w-[200px] md:w-[240px] h-auto block rounded-2xl"
                                    />
                                </div>
                            </div>

                            <div className="relative z-10 pt-8">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                                    Smart Calendar.
                                </h3>
                                <p className="text-lg text-neutral-400 font-medium leading-relaxed max-w-2xl">
                                    Experience color-coded schedules and daily
                                    highlight reminders for perfect time
                                    management directly within VTOP.
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/how-to-use"
                            className="bg-white/5 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center items-center border border-white/10 group hover:bg-white/10 transition-all relative overflow-hidden text-center min-h-[440px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent"></div>
                            <div className="bg-white/10 p-6 rounded-full group-hover:scale-110 transition-transform mb-6 relative z-10">
                                <Zap className="w-12 h-12 text-indigo-400" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-white group-hover:translate-x-1 transition-transform">
                                    And much more.
                                </h3>
                                <p className="text-neutral-400 font-medium leading-relaxed">
                                    Check out How to Use.
                                </p>
                            </div>
                        </Link>
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
        </div>
    );
}
