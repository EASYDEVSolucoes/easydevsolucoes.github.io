"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useGoogleTag } from "@/hooks/useGoogleTag";

export default function GoogleTag() {
  const { trackPageView } = useGoogleTag();
  const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (typeof window !== "undefined") {
      trackPageView();
    }
  }, [trackPageView]);

  if (!gtmId && !gaId) {
    return null;
  }

  return (
    <>
      {/* Google Tag Manager */}
      {gtmId && (
        <>
          <Script
            id="google-tag-manager"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </>
      )}

      {/* Google Analytics 4 */}
      {gaId && (
        <>
          <Script
            id="google-analytics"
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script
            id="google-analytics-config"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `,
            }}
          />
        </>
      )}
    </>
  );
}
