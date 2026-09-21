"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
    Rocket,
    Code2,
    Layers3,
    Target,
    ArrowRight,
} from "lucide-react";

/* =========================================================
   STATIC DATA — moved outside the component so it isn't
   re-created (and re-diffed) on every render.
========================================================= */

const JOURNEY = [
    {
        year: "2024",
        icon: Rocket,
        title: "First Step",
        description:
            "Started exploring development, opened a code editor for the first time, and built my first HTML page.",
    },
    {
        year: "2025",
        icon: Code2,
        title: "Building Mode",
        description:
            "Started building web projects and experimenting with CSS, JavaScript, and different technologies.",
    },
    {
        year: "2026",
        icon: Layers3,
        title: "Going Deeper",
        description:
            "Exploring React, Node.js, Tailwind CSS, and Next.js while building more complex applications.",
    },
    {
        year: "NOW",
        icon: Target,
        title: "Building & Learning",
        description:
            "Building my own portfolio and improving with every project. Every build teaches something new.",
    },
    {
        year: "NEXT",
        icon: ArrowRight,
        title: "Keep Going",
        description:
            "Keep building, learning, and experimenting. More projects, more skills, and more ideas.",
        status: "future",
    },
];

const NOW_INDEX = JOURNEY.findIndex((item) => item.year === "NOW");

/* =========================================================
   Small hook: track prefers-reduced-motion so pulses /
   transitions can be disabled for people who've asked for
   that at the OS level.
========================================================= */

function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduced(mq.matches);
        const handler = (e) => setReduced(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    return reduced;
}

const Journey = () => {
    const sectionRef = useRef(null);
    const [started, setStarted] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    /* =========================================================
       START ANIMATION ONCE WHEN JOURNEY SECTION ENTERS VIEW
    ========================================================= */

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    /* =========================================================
       DYNAMIC LINE FILL

       Instead of a hardcoded 60% / 76%, measure where the
       "NOW" dot actually sits relative to its line container
       and use that. Recomputes on resize / content reflow
       (e.g. if a description wraps differently), so it never
       drifts out of alignment with the dot it's meant to hit.
    ========================================================= */

    const desktopContainerRef = useRef(null);
    const desktopPointRefs = useRef([]);
    const [desktopFill, setDesktopFill] = useState(0);

    const mobileContainerRef = useRef(null);
    const mobilePointRefs = useRef([]);
    const [mobileFill, setMobileFill] = useState(0);

    useLayoutEffect(() => {
        const measure = () => {
            const dContainer = desktopContainerRef.current;
            const dPoint = desktopPointRefs.current[NOW_INDEX];
            if (dContainer && dPoint) {
                const cRect = dContainer.getBoundingClientRect();
                const pRect = dPoint.getBoundingClientRect();
                const centerX = pRect.left + pRect.width / 2 - cRect.left;
                setDesktopFill(Math.min((centerX / cRect.width) * 100 + 4, 100));
            }

            const mContainer = mobileContainerRef.current;
            const mPoint = mobilePointRefs.current[NOW_INDEX];
            if (mContainer && mPoint) {
                const cRect = mContainer.getBoundingClientRect();
                const pRect = mPoint.getBoundingClientRect();
                const centerY = pRect.top + pRect.height / 2 - cRect.top;
                setMobileFill((centerY / cRect.height) * 100);
            }
        };

        measure();

        const ro = new ResizeObserver(measure);
        if (desktopContainerRef.current) ro.observe(desktopContainerRef.current);
        if (mobileContainerRef.current) ro.observe(mobileContainerRef.current);
        window.addEventListener("resize", measure);

        return () => {
            ro.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, []);

    const lineDuration = prefersReducedMotion ? "duration-0" : "duration-[1400ms]";
    const dotDuration = prefersReducedMotion ? "duration-0" : "duration-500";
    const dotDelay = (index) =>
        prefersReducedMotion || !(index < NOW_INDEX + 1)
            ? "0ms"
            : `${index * 250 + 150}ms`;

    return (
        <section
            id="journey"
            ref={sectionRef}
            aria-labelledby="journey-heading"
            className="relative min-h-screen overflow-hidden bg-black px-6 py-24 text-white md:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">

                {/* =====================================================
                    HEADER
                ====================================================== */}

                <div className="mb-20 max-w-2xl">

                    <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-[#8A63FF]">
                        TIMELINE
                    </p>

                    <h2
                        id="journey-heading"
                        className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                    >
                        MY{" "}
                        <span className="text-[#8A63FF]">
                            JOURNEY
                        </span>
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
                        From curiosity to code — building, learning,
                        and growing one project at a time.
                    </p>

                </div>


                {/* =====================================================
                    DESKTOP TIMELINE
                ====================================================== */}

                <div className="hidden lg:block">

                    <div className="relative" ref={desktopContainerRef}>

                        {/* -------------------------------------------------
                            BASE LINE
                        -------------------------------------------------- */}

                        <div
                            className="
                                absolute
                                left-[10%]
                                right-[10%]
                                top-6.75
                                h-px
                                bg-white/10
                            "
                        />

                        {/* -------------------------------------------------
                            PURPLE ANIMATED LINE

                            Width is measured (see useLayoutEffect above)
                            so it always ends exactly at the "NOW" dot,
                            regardless of item count or column width.
                        -------------------------------------------------- */}

                        <div
                            className={`
                                absolute
                                left-0
                                top-6.75
                                h-px
                                bg-[#7749FF]
                                shadow-[0_0_10px_rgba(119,73,255,0.65)]
                                transition-[width]
                                ${lineDuration}
                                ease-out
                            `}
                            style={{
                                width: started ? `${desktopFill}%` : "0%",
                            }}
                        />


                        {/* -------------------------------------------------
                            ITEMS
                        -------------------------------------------------- */}

                        <ol className="grid grid-cols-5 gap-6">

                            {JOURNEY.map((item, index) => {

                                const Icon = item.icon;

                                const isReached = started && index < NOW_INDEX + 1;

                                return (
                                    <li
                                        key={item.year}
                                        className="relative flex flex-col items-center text-center"
                                        aria-current={item.year === "NOW" ? "step" : undefined}
                                    >

                                        {/* =================================================
                                            TIMELINE POINT
                                        ================================================== */}

                                        <div className="relative z-10 flex h-13.75 items-center justify-center">

                                            {/* NOW PULSE */}

                                            {item.year === "NOW" &&
                                                started &&
                                                !prefersReducedMotion && (
                                                    <span
                                                        aria-hidden="true"
                                                        className="
                                                            absolute
                                                            h-9
                                                            w-9
                                                            rounded-full
                                                            bg-[#7749FF]/10
                                                            animate-ping
                                                        "
                                                        style={{
                                                            animationDuration:
                                                                "2.2s",
                                                        }}
                                                    />
                                                )}

                                            {/* POINT */}

                                            <span
                                                aria-hidden="true"
                                                ref={(el) => (desktopPointRefs.current[index] = el)}
                                                className={`
                                                    relative
                                                    h-3.5
                                                    w-3.5
                                                    rounded-full
                                                    border-2
                                                    border-black
                                                    transition-all
                                                    ${dotDuration}

                                                    ${item.status ===
                                                        "future"
                                                        ? "bg-[#222]"
                                                        : isReached
                                                            ? "bg-[#7749FF] shadow-[0_0_12px_rgba(119,73,255,0.8)]"
                                                            : "bg-[#222]"
                                                    }
                                                `}
                                                style={{
                                                    transitionDelay: dotDelay(index),
                                                }}
                                            />

                                        </div>


                                        {/* =================================================
                                            JOURNEY CARD
                                        ================================================== */}

                                        <div
                                            className={`
                                                mt-5
                                                w-full
                                                max-w-57.5
                                                min-h-62.5
                                                rounded-2xl
                                                border
                                                p-5
                                                text-left
                                                transition-all
                                                duration-500

                                                ${item.year === "NOW"
                                                    ? started
                                                        ? "border-[#7749FF]/40 bg-[#7749FF]/6 shadow-[0_15px_40px_rgba(119,73,255,0.08)]"
                                                        : "border-white/8 bg-white/2"
                                                    : item.status === "future"
                                                        ? "border-white/6 bg-white/1.5"
                                                        : "border-white/8 bg-white/2.5"
                                                }
                                            `}
                                        >

                                            {/* TOP */}

                                            <div className="flex items-center justify-between">

                                                <span
                                                    className={`
                                                        text-xs
                                                        font-semibold
                                                        tracking-[0.18em]

                                                        ${item.year === "NOW"
                                                            ? started
                                                                ? "text-[#8A63FF]"
                                                                : "text-white/60"
                                                            : item.status === "future"
                                                                ? "text-white/60"
                                                                : "text-white/60"
                                                        }
                                                    `}
                                                >
                                                    {item.year}
                                                </span>


                                                {/* ICON */}

                                                <div
                                                    className={`
                                                        flex
                                                        h-8
                                                        w-8
                                                        items-center
                                                        justify-center
                                                        rounded-lg
                                                        border

                                                        ${item.year === "NOW"
                                                            ? started
                                                                ? "border-[#7749FF]/30 bg-[#7749FF]/10"
                                                                : "border-white/8 bg-white/3"
                                                            : "border-white/8 bg-white/3"
                                                        }
                                                    `}
                                                >

                                                    <Icon
                                                        size={15}
                                                        strokeWidth={1.5}
                                                        aria-hidden="true"
                                                        className={
                                                            item.year === "NOW"
                                                                ? started
                                                                    ? "text-[#8A63FF]"
                                                                    : "text-white/80"
                                                                : item.status ===
                                                                    "future"
                                                                    ? "text-white/60"
                                                                    : "text-white/80"
                                                        }
                                                    />

                                                </div>

                                            </div>


                                            {/* TITLE */}

                                            <h3
                                                className={`
                                                    mt-7
                                                    text-[17px]
                                                    font-semibold
                                                    tracking-tight

                                                    ${item.status ===
                                                        "future"
                                                        ? "text-white/80"
                                                        : "text-white"
                                                    }
                                                `}
                                            >
                                                {item.title}
                                            </h3>


                                            {/* DESCRIPTION */}

                                            <p
                                                className={`
                                                    mt-3
                                                    text-[13px]
                                                    leading-[1.7]
                                                    ${item.status === "future"
                                                        ? "text-white/60"
                                                        : "text-white/50"
                                                    }
    `}
                                            >
                                                {item.description}
                                            </p>




                                        </div>

                                    </li>
                                );
                            })}

                        </ol>

                    </div>

                </div>


                {/* =====================================================
                    MOBILE TIMELINE
                ====================================================== */}

                <div className="lg:hidden">

                    <div className="relative ml-3 pl-8" ref={mobileContainerRef}>



                        {/* ---------------------------------------------
                            MOBILE PURPLE LINE

                            Height is measured (see useLayoutEffect above)
                            instead of a hardcoded 76%, so it always ends
                            exactly at the "NOW" dot even if a card's
                            description wraps to a different number of
                            lines and shifts everything below it.
                        ---------------------------------------------- */}

                        <div
                            className={`
                                absolute
                                left-0
                                top-0
                                w-px
                                bg-[#7749FF]
                                shadow-[0_0_10px_rgba(119,73,255,0.6)]
                                transition-[height]
                                ${lineDuration}
                                ease-out
                            `}
                            style={{
                                height: started ? `${mobileFill}%` : "0%",
                            }}
                        />


                        <ol className="space-y-12">

                            {JOURNEY.map((item, index) => {

                                const Icon = item.icon;

                                const isReached = started && index < NOW_INDEX + 1;

                                return (
                                    <li
                                        key={item.year}
                                        className="relative"
                                        aria-current={item.year === "NOW" ? "step" : undefined}
                                    >

                                        {/* =================================================
                                            POINT
                                        ================================================== */}

                                        {item.year === "NOW" &&
                                            started &&
                                            !prefersReducedMotion && (
                                                <span
                                                    aria-hidden="true"
                                                    className="
                                                        absolute
                                                        -left-10.75
                                                        top-0.5
                                                        h-6
                                                        w-6
                                                        rounded-full
                                                        bg-[#7749FF]/10
                                                        animate-ping
                                                    "
                                                    style={{
                                                        animationDuration:
                                                            "2.2s",
                                                    }}
                                                />
                                            )}


                                        <span
                                            aria-hidden="true"
                                            ref={(el) => (mobilePointRefs.current[index] = el)}
                                            className={`
                                                absolute
                                                -left-9.75
                                                top-1
                                                h-3.5
                                                w-3.5
                                                rounded-full
                                                border-2
                                                border-black
                                                transition-all
                                                ${dotDuration}

                                                ${item.status ===
                                                    "future"
                                                    ? "bg-[#222]"
                                                    : item.year ===
                                                        "NOW"
                                                        ? started
                                                            ? "bg-[#7749FF] shadow-[0_0_12px_rgba(119,73,255,0.8)]"
                                                            : "bg-[#222]"
                                                        : isReached
                                                            ? "bg-[#7749FF] shadow-[0_0_10px_rgba(119,73,255,0.6)]"
                                                            : "bg-[#222]"
                                                }
                                            `}
                                            style={{
                                                transitionDelay: dotDelay(index),
                                            }}
                                        />


                                        {/* =================================================
                                            JOURNEY CARD
                                        ================================================== */}

                                        <div
                                            className={`
                                                w-full
                                                rounded-2xl
                                                border
                                                p-5
                                                transition-all
                                                duration-500

                                                ${item.year === "NOW"
                                                    ? started
                                                        ? "border-[#7749FF]/40 bg-[#7749FF]/6"
                                                        : "border-white/8 bg-white/2"
                                                    : item.status === "future"
                                                        ? "border-white/6 bg-white/1.5"
                                                        : "border-white/8 bg-white/2.5"
                                                }
                                            `}
                                        >

                                            {/* TOP */}

                                            <div className="flex items-center justify-between">

                                                <span
                                                    className={`
                                                        text-xs
                                                        font-semibold
                                                        tracking-[0.18em]

                                                        ${item.year ===
                                                            "NOW"
                                                            ? started
                                                                ? "text-[#8A63FF]"
                                                                : "text-white/60"
                                                            : item.status ===
                                                                "future"
                                                                ? "text-white/60"
                                                                : "text-white/45"
                                                        }
                                                    `}
                                                >
                                                    {item.year}
                                                </span>


                                                <div
                                                    className={`
                                                        flex
                                                        h-8
                                                        w-8
                                                        items-center
                                                        justify-center
                                                        rounded-lg
                                                        border

                                                        ${item.year ===
                                                            "NOW"
                                                            ? started
                                                                ? "border-[#7749FF]/30 bg-[#7749FF]/10"
                                                                : "border-white/8 bg-white/3"
                                                            : "border-white/8 bg-white/3"
                                                        }
                                                    `}
                                                >

                                                    <Icon
                                                        size={15}
                                                        strokeWidth={1.5}
                                                        aria-hidden="true"
                                                        className={
                                                            item.year ===
                                                                "NOW"
                                                                ? started
                                                                    ? "text-[#8A63FF]"
                                                                    : "text-white/80"
                                                                : item.status ===
                                                                    "future"
                                                                    ? "text-white/60"
                                                                    : "text-white/80"
                                                        }
                                                    />

                                                </div>

                                            </div>


                                            {/* TITLE */}

                                            <h3
                                                className={`
                                                    mt-6
                                                    text-[17px]
                                                    font-semibold
                                                    tracking-tight

                                                    ${item.status ===
                                                        "future"
                                                        ? "text-white/80"
                                                        : "text-white"
                                                    }
                                                `}
                                            >
                                                {item.title}
                                            </h3>


                                            {/* DESCRIPTION */}

                                            <p
                                                className={`
                                                    mt-3
                                                    text-[13px]
                                                    leading-[1.7]
                                                    ${item.status === "future"
                                                        ? "text-white/60"
                                                        : "text-white/50"
                                                    }
    `}
                                            >
                                                {item.description}
                                            </p>


                                        </div>

                                    </li>
                                );
                            })}

                        </ol>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Journey;