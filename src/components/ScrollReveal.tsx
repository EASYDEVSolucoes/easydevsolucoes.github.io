"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
}

const ScrollReveal = ({
    children,
    width = "fit-content",
    delay = 0,
    className = "",
}: ScrollRevealProps & { className?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} style={{ position: "relative", width }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
                className={className} // Apply className to inner motion div as well if needed for height, but distinct from wrapper? actually wrapper dictates layout space.
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
