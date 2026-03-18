import Link from "next/link";
import Image from "next/image";

const CHROME_WEBSTORE_URL =
    "https://chromewebstore.google.com/detail/vinhance/kdpkhnlloacadjadmepfnpdliglafaaf";
const CHROME_WEBSTORE_BADGE = "/assets/chrome-web-store-badge.png";

export default function Header() {
    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-fit md:w-full mx-auto">
            <header className="flex items-center justify-between px-3 pr-6 md:pr-2.5 pl-6 h-[60px] bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-full w-full max-w-4xl shadow-2xl">
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

                <Link
                    href={CHROME_WEBSTORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex items-center justify-center bg-white rounded-full px-2 pr-1 py-1 hover:scale-105 transition-transform"
                >
                    <Image
                        src={CHROME_WEBSTORE_BADGE}
                        alt="Get VInhance on Chrome Web Store"
                        width={112}
                        height={34}
                        className="h-auto w-[112px]"
                    />
                </Link>
            </header>
        </div>
    );
}
