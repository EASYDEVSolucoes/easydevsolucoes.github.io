"use client";

import { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

const BackToTop = () => {
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
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 p-3 bg-white/10 backdrop-blur-md border border-primary/20 text-primary rounded-xl shadow-xl hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 group"
                    aria-label="Voltar ao topo"
                >
                    <ArrowUpIcon className="h-6 w-6" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
