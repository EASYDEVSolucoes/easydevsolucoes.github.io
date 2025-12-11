"use client";

import { useCallback, useEffect, useState } from "react";

export const useFacebookPixel = () => {
  const [ReactPixel, setReactPixel] = useState<any>(null);
  const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

  useEffect(() => {
    import("react-facebook-pixel")
      .then((module) => module.default)
      .then((pixel) => {
        setReactPixel(pixel);
        pixel.init(pixelId!, undefined, {
          autoConfig: true,
          debug: false,
        });
        pixel.pageView();
      });
  }, [pixelId]);

  const getUserRegion = useCallback(() => {
    if (typeof window === "undefined") return "Brasil";

    // Try to get region from browser's timezone
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

  const trackPageView = useCallback(() => {
    if (typeof window !== "undefined" && ReactPixel) {
      ReactPixel.pageView();
    }
  }, [ReactPixel]);

  const trackLead = useCallback(
    (value?: number) => {
      if (typeof window !== "undefined" && ReactPixel) {
        ReactPixel.track("Lead", {
          value: value,
          currency: "BRL",
          ...getUserLocation(),
          hour: getUserHour(),
        });
      }
    },
    [ReactPixel, getUserRegion]
  );

  const trackContact = useCallback(
    (method: string) => {
      if (typeof window !== "undefined" && ReactPixel) {
        ReactPixel.track("Contact", {
          method: method,
          ...getUserLocation(),
          hour: getUserHour(),
        });
      }
    },
    [ReactPixel, getUserRegion]
  );

  const trackWhatsAppClick = useCallback(() => {
    if (typeof window !== "undefined" && ReactPixel) {
      ReactPixel.track("LeadSubmitted", {
        ...getUserLocation(),
        hour: getUserHour(),
      });
    }
  }, [ReactPixel, getUserRegion]);

  const trackTelegramClick = useCallback(() => {
    if (typeof window !== "undefined" && ReactPixel) {
      ReactPixel.track("TelegramClick", {
        ...getUserLocation(),
        hour: getUserHour(),
      });
    }
  }, [ReactPixel, getUserRegion]);

  const trackFormSubmit = useCallback(
    (formName: string) => {
      if (typeof window !== "undefined" && ReactPixel) {
        ReactPixel.track("FormSubmit", {
          formName: formName,
          ...getUserLocation(),
          hour: getUserHour(),
        });
      }
    },
    [ReactPixel, getUserRegion]
  );

  const trackScroll = useCallback(
    (section: string) => {
      if (typeof window !== "undefined" && ReactPixel) {
        ReactPixel.track("PageView", {
          section: section,
          ...getUserLocation(),
          hour: getUserHour(),
        });
      }
    },
    [ReactPixel, getUserRegion]
  );

  return {
    trackPageView,
    trackLead,
    trackContact,
    trackWhatsAppClick,
    trackTelegramClick,
    trackFormSubmit,
    trackScroll,
  };
};
