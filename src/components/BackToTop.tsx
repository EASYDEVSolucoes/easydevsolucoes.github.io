"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

/** Botão de voltar ao topo. Fica logo acima do botão de WhatsApp. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className="fixed bottom-24 right-8 z-40 rounded-full border border-gray-200 bg-white p-3 text-gray-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50"
    >
      <ArrowUpIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
