"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-[100] p-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white transform transition-all duration-300 hover:bg-white/10 hover:scale-110 active:scale-95 shadow-2xl ${
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-4 h-4" />
        </button>
    );
}
