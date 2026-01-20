"use client";

import { useEffect } from "react";

export default function DomainRedirect() {
    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            (window.location.hostname === "easydevsolucoes.github.io" ||
                window.location.hostname.endsWith(".github.io"))
        ) {
            const newUrl = `https://easydevsolucoes.com.br${window.location.pathname}${window.location.search}${window.location.hash}`;
            window.location.replace(newUrl);
        }
    }, []);

    return null;
}
