"use client";

import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useCallback, useState, useEffect } from "react";
import { smoothScroll } from "@/utils/smoothScroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "#services" },
    { name: "Sobre", href: "#about" },
    { name: "Missão", href: "#mission" },
    { name: "Parceiros", href: "#partners" },
    { name: "Contato", href: "#contact" },
  ];

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();

      if (href === "/") {
        window.location.href = "/";
        return;
      }

      // Se não estiver na página inicial e o href começar com #, apenas navega para a página inicial
      if (window.location.pathname !== "/" && href.startsWith("#")) {
        window.location.href = `/${href}`;
        return;
      }

      // Se estiver na página inicial, faz o scroll suave
      smoothScroll(href);
      setIsMenuOpen(false);
    },
    []
  );

  // Lidar com o scroll inicial se houver um hash na URL
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        smoothScroll(hash);
      }, 100);
    }
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
          ? "glass py-2 border-b border-white/20 shadow-lg"
          : "bg-transparent py-4"
        }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 group"
              onClick={(e) => handleClick(e, "/")}
            >
              <span className="sr-only">EasyDev</span>
              <Image
                src="/company/logoEasyDev.png"
                alt="EasyDev Logo"
                width={80}
                height={80}
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`text-sm font-bold tracking-wide transition-all duration-200 relative group py-1 ${scrolled ? "text-gray-900" : "text-gray-900" // Always dark/readable on transparent or glass
                  }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="#contact"
              className="btn-primary py-2 px-6 text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
              onClick={(e) => handleClick(e, "#contact")}
            >
              Fale Conosco
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100/50 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl rounded-2xl mt-4 shadow-2xl border border-white/20 ring-1 ring-black/5"
            >
              <div className="space-y-1 px-4 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-base font-bold text-gray-700 hover:bg-primary/5 hover:text-primary transition-all"
                    onClick={(e) => handleClick(e, item.href)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 px-2">
                  <Link
                    href="#contact"
                    className="block w-full text-center btn-primary"
                    onClick={(e) => handleClick(e, "#contact")}
                  >
                    Fale Conosco
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
