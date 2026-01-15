"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { smoothScroll } from "@/utils/smoothScroll";

const navItems = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "#services" },
    { name: "Processo", href: "#process" },
    { name: "Sobre", href: "#about" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Parceiros", href: "#partners" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
            e.preventDefault();
            setMobileMenuOpen(false);

            // Link externo ou cross-page para âncora
            if (typeof window !== "undefined" && window.location.pathname !== "/" && href.startsWith("#")) {
                window.location.href = `/${href}`;
                return;
            }

            if (href === "/") {
                if (typeof window !== "undefined" && window.location.pathname !== "/") {
                    window.location.href = "/";
                    return;
                }
                window.scrollTo({ top: 0, behavior: "smooth" });
                return;
            }

            smoothScroll(href);
        },
        []
    );

    return (
        <>
            <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`
            relative flex items-center justify-between 
            px-6 py-3 rounded-full 
            border border-white/40 shadow-xl 
            backdrop-blur-xl bg-white/80 
            transition-all duration-300
            ${scrolled ? "w-[90%] md:w-fit px-8" : "w-[95%] md:w-fit"}
          `}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={(e) => handleClick(e, "/")}
                        className="flex items-center gap-2 mr-8 group"
                    >
                        <div className="relative w-8 h-8">
                            <Image
                                src="/company/logoEasyDev.png"
                                alt="EasyDev Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="font-bold text-gray-900 tracking-tight group-hover:text-primary transition-colors">
                            EasyDev
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleClick(e, item.href)}
                                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-white/50 rounded-full transition-all duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex ml-6">
                        <Link
                            href="#contact"
                            onClick={(e) => handleClick(e, "#contact")}
                            className="bg-primary hover:bg-primary-light text-white text-sm font-bold py-2.5 px-6 rounded-full shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            Fale Conosco
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden ml-4">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-gray-700 hover:text-primary transition-colors"
                            aria-label="Menu"
                        >
                            {mobileMenuOpen ? (
                                <XMarkIcon className="w-6 h-6" />
                            ) : (
                                <Bars3Icon className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </motion.nav>
            </header>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-24 left-4 right-4 z-40 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 md:hidden ring-1 ring-black/5"
                    >
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleClick(e, item.href)}
                                    className="px-4 py-3 text-base font-semibold text-gray-800 hover:bg-primary/10 hover:text-primary rounded-xl transition-all"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 mt-2 border-t border-gray-100">
                                <Link
                                    href="#contact"
                                    onClick={(e) => handleClick(e, "#contact")}
                                    className="block w-full text-center bg-primary text-white font-bold py-3 rounded-xl shadow-lg active:scale-95 transition-transform"
                                >
                                    Iniciar Projeto
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
