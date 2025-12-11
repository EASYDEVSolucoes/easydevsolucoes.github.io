"use client";

import { useCallback } from "react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const useGoogleTag = () => {
  const gtagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

  const getUserRegion = useCallback(() => {
    if (typeof window === "undefined") return "Brasil";

    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const region = timezone.split("/")[0];
      return region || "Brasil";
    } catch (error) {
      return "Brasil";
    }
  }, []);

  const getUserLanguage = useCallback(() => {
    if (typeof window === "undefined") return "pt-BR";
    return navigator.language || "pt-BR";
  }, []);

  const getUserLocation = useCallback(() => {
    const region = getUserRegion();
    const language = getUserLanguage();
    return { region, language };
  }, [getUserRegion, getUserLanguage]);

  const getUserHour = useCallback(() => {
    if (typeof window === "undefined") return new Date().getHours();
    return new Date().getHours();
  }, []);

  const trackPageView = useCallback(
    (pagePath?: string) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "page_view", {
          page_path: pagePath || window.location.pathname,
          ...getUserLocation(),
          hour: getUserHour(),
        });
      }
    },
    [getUserLocation, getUserHour]
  );

  const trackLead = useCallback(
    (value?: number) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_lead", {
          value: value,
          currency: "BRL",
          ...getUserLocation(),
          hour: getUserHour(),
        });
      }
    },
    [getUserLocation, getUserHour]
  );

  const trackContact = useCallback(
    (method: string) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "contact", {
          method: method,
          ...getUserLocation(),
          hour: getUserHour(),
        });
      }
    },
    [getUserLocation, getUserHour]
  );

  const trackWhatsAppClick = useCallback(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "whatsapp_click", {
        ...getUserLocation(),
        hour: getUserHour(),
      });
    }
  }, [getUserLocation, getUserHour]);

  const trackTelegramClick = useCallback(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "telegram_click", {
        ...getUserLocation(),
        hour: getUserHour(),
      });
    }
  }, [getUserLocation, getUserHour]);

  const trackFormSubmit = useCallback(
    (formName: string) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "form_submit", {
          form_name: formName,
          ...getUserLocation(),
          hour: getUserHour(),
        });
      }
    },
    [getUserLocation, getUserHour]
  );

  const trackScroll = useCallback(
    (section: string) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "scroll", {
          section: section,
          ...getUserLocation(),
          hour: getUserHour(),
        });
      }
    },
    [getUserLocation, getUserHour]
  );

  const trackEvent = useCallback(
    (eventName: string, params?: Record<string, any>) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", eventName, {
          ...params,
          ...getUserLocation(),
          hour: getUserHour(),
        });
      }
    },
    [getUserLocation, getUserHour]
  );

  return {
    trackPageView,
    trackLead,
    trackContact,
    trackWhatsAppClick,
    trackTelegramClick,
    trackFormSubmit,
    trackScroll,
    trackEvent,
  };
};
