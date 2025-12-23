"use client";

import { useEffect } from "react";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

const sections = [
  { id: "services", threshold: 0.5 },
  { id: "about", threshold: 0.5 },
  { id: "testimonials", threshold: 0.5 },
  { id: "contact", threshold: 0.5 },
];

export default function ScrollTracker() {
  const { trackScroll } = useFacebookPixel();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackScroll(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [trackScroll]);

  return null;
}
