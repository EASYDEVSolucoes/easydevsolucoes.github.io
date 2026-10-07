"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { offers } from "@/data/offers";

const serviceLinks = offers.map((offer) => ({ name: offer.name, href: `/${offer.slug}/` }));

const pageLinks = [
  { name: "Preços", href: "/precos/" },
  { name: "Sobre", href: "/sobre/" },
];

export default function Navbar() {
  const pathname = usePathname() ?? "/";
  // Cada menu guarda a página em que foi aberto. Ao trocar de página o valor
  // deixa de bater com a rota atual e o menu fecha sozinho, sem efeito colateral.
  const [mobileOpenAt, setMobileOpenAt] = useState<string | null>(null);
  const [servicesOpenAt, setServicesOpenAt] = useState<string | null>(null);
  const mobileOpen = mobileOpenAt === pathname;
  const servicesOpen = servicesOpenAt === pathname;
  const setMobileOpen = (open: boolean) => setMobileOpenAt(open ? pathname : null);
  const setServicesOpen = (open: boolean) => setServicesOpenAt(open ? pathname : null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Fecha o menu de serviços com Esc ou clique fora
  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpenAt(null);
    };
    const onClick = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) setServicesOpenAt(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [servicesOpen]);

  const isCurrent = (href: string) => pathname === href || pathname === href.slice(0, -1);
  const inServices = serviceLinks.some((link) => isCurrent(link.href));

  const linkClass = (active: boolean) =>
    `px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 hover:bg-gray-100 ${
      active ? "text-primary-text" : "text-gray-900"
    }`;

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:top-6">
      <nav
        aria-label="Principal"
        className="relative flex w-full items-center justify-between gap-2 rounded-full border border-white/40 bg-white/80 px-4 py-2.5 shadow-xl backdrop-blur-xl sm:px-6 md:w-fit md:gap-6"
      >
        <Link href="/" className="flex items-center gap-2 rounded-full pr-2" aria-label="EasyDev, página inicial">
          <Image
            src="/company/easydev-logo-96.webp"
            alt=""
            width={32}
            height={32}
            priority
            className="h-8 w-8 object-contain"
          />
          <span className="font-bold tracking-tight text-gray-900">EasyDev</span>
        </Link>

        {/* Navegação de computador */}
        <div className="hidden items-center gap-1 md:flex">
          <div ref={servicesRef} className="relative">
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="menu-servicos"
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`${linkClass(inServices)} inline-flex items-center gap-1`}
            >
              Serviços
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {servicesOpen && (
              <div
                id="menu-servicos"
                className="absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 rounded-2xl border border-gray-100 bg-white p-2 shadow-xl"
              >
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isCurrent(link.href) ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-50 ${
                      isCurrent(link.href) ? "text-primary-text" : "text-gray-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {pageLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              className={linkClass(isCurrent(link.href))}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <Link href="/diagnostico/" className="btn-primary btn-sm whitespace-nowrap !px-4 !shadow-md sm:!px-6">
            <span>
              Diagnóstico<span className="hidden min-[400px]:inline"> gratuito</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="menu-celular"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            className="rounded-full p-2 text-gray-900 hover:bg-gray-100 md:hidden"
          >
            {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Navegação de celular */}
        {mobileOpen && (
          <div
            id="menu-celular"
            className="absolute inset-x-0 top-full mt-3 rounded-3xl border border-gray-100 bg-white p-4 shadow-2xl md:hidden"
          >
            <p className="px-4 pb-1 pt-2 text-xs font-bold uppercase tracking-wider text-gray-600">Serviços</p>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                className="block rounded-xl px-4 py-3 font-semibold text-gray-900 hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-2 border-t border-gray-100 pt-2">
              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                  className="block rounded-xl px-4 py-3 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
