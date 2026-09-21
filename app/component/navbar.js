"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
    { label: "HOME", href: "#home", id: "home" },
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "SKILLS", href: "#skills", id: "skills" },
    { label: "WORK", href: "#work", id: "work" },
    { label: "JOURNEY", href: "#journey", id: "journey" },
    { label: "CONTACT", href: "#contact", id: "contact" },
];

// How long (ms) the observer is ignored after a click, so a smooth scroll
// passing through intermediate sections doesn't make the highlight flicker.
const CLICK_LOCK_MS = 900;

const MENU_ID = "mobile-navigation";

const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7749FF] focus-visible:ring-offset-4 focus-visible:ring-offset-black";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Don't show any highlight until the real position is known. This stops
    // the underline from flashing on HOME first after a refresh.
    const shownSection = isReady ? activeSection : null;

    const lockUntil = useRef(0);
    const menuButtonRef = useRef(null);

    const closeMenu = useCallback(() => setMenuOpen(false), []);

    const handleNavClick = (e, id) => {
        // The sticky navbar takes 76px in the page flow, so the #home anchor
        // would land 76px below the real top. Scroll to 0 explicitly instead.
        if (id === "home") {
            e.preventDefault();
            const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;
            window.scrollTo({
                top: 0,
                behavior: reduceMotion ? "auto" : "smooth",
            });

            // Remove the old #hash (e.g. #about) so the URL becomes plain "/"
            window.history.replaceState(
                null,
                "",
                window.location.pathname + window.location.search
            );
        }

        lockUntil.current = Date.now() + CLICK_LOCK_MS;
        setActiveSection(id);
        setMenuOpen(false);
    };

    /* ---------------------------------------------------------------
       Active section tracking
       A "reading line" at 40% of the viewport height: whichever section
       crosses it is active. The observer only tells us WHEN to re-check;
       the answer always comes from the real scroll position, so a page
       refresh (where the browser restores the scroll position) is correct.
    --------------------------------------------------------------- */
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const syncActiveSection = () => {
            if (Date.now() < lockUntil.current) return;

            const readingLine = window.innerHeight * 0.4;

            for (const section of sections) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= readingLine && rect.bottom > readingLine) {
                    setActiveSection(section.id);
                    return;
                }
            }
        };

        const observer = new IntersectionObserver(syncActiveSection, {
            root: null,
            threshold: 0,
            rootMargin: "-40% 0px -55% 0px",
        });

        sections.forEach((section) => observer.observe(section));

        // Work out the real position on load, then reveal the highlight once
        // the browser has had time to restore the scroll position.
        syncActiveSection();

        let revealTimer;
        const reveal = () => {
            syncActiveSection();
            revealTimer = setTimeout(() => {
                syncActiveSection();
                setIsReady(true);
            }, 120);
        };

        if (document.readyState === "complete") {
            reveal();
        } else {
            window.addEventListener("load", reveal, { once: true });
        }

        return () => {
            observer.disconnect();
            window.removeEventListener("load", reveal);
            clearTimeout(revealTimer);
        };
    }, []);

    /* ---------------------------------------------------------------
       Mobile menu behavior: Escape closes it (and returns focus to the
       button), and it closes automatically if the viewport grows to md+.
    --------------------------------------------------------------- */
    useEffect(() => {
        if (!menuOpen) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") {
                setMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        };

        const mq = window.matchMedia("(min-width: 768px)");
        const onChange = (e) => {
            if (e.matches) setMenuOpen(false);
        };

        document.addEventListener("keydown", onKeyDown);
        mq.addEventListener("change", onChange);

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            mq.removeEventListener("change", onChange);
        };
    }, [menuOpen]);

    return (
        <nav
            aria-label="Primary"
            className="
                sticky
                top-0
                z-50
                w-full
                border-b
                border-white/6
                bg-black/85
                backdrop-blur-xl
            "
        >
            <div
                className="
                    relative
                    mx-auto
                    flex
                    h-19
                    max-w-360
                    items-center
                    px-6
                    md:px-10
                    lg:px-12
                "
            >
                {/* LEFT — LOGO */}
                <a
                    href="#home"
                    aria-label="S.GAIKWAD - Home"
                    onClick={(e) => handleNavClick(e, "home")}
                    className={`
                        text-[15px]
                        font-semibold
                        tracking-[-0.02em]
                        text-white
                        transition-opacity
                        duration-300
                        motion-reduce:transition-none
                        hover:opacity-70
                        ${focusRing}
                    `}
                >
                    S.GAIKWAD
                </a>

                {/* CENTER — DESKTOP NAVIGATION */}
                <ul
                    className="
                        absolute
                        left-1/2
                        hidden
                        -translate-x-1/2
                        items-center
                        gap-8
                        md:flex
                    "
                >
                    {NAV_LINKS.map((item) => {
                        const isActive = shownSection === item.id;

                        return (
                            <li key={item.id}>
                                <a
                                    href={item.href}
                                    aria-current={isActive ? "location" : undefined}
                                    onClick={(e) => handleNavClick(e, item.id)}
                                    className={`
                                        group
                                        relative
                                        block
                                        text-[12px]
                                        font-medium
                                        tracking-[0.04em]
                                        transition-all
                                        duration-300
                                        motion-reduce:transition-none
                                        ${focusRing}
                                        ${isActive
                                            ? `
                                                    text-white
                                                    drop-shadow-[0_0_6px_rgba(119,73,255,0.45)]
                                                    after:absolute
                                                    after:-bottom-2
                                                    after:left-0
                                                    after:h-[1.5px]
                                                    after:w-full
                                                    after:bg-[#7749FF]
                                                `
                                            : `
                                                    text-zinc-400
                                                    hover:text-white
                                                    hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]
                                                `
                                        }
                                    `}
                                >
                                    {item.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* RIGHT — RESUME (desktop) */}
                <a
                    href="/Siddharth-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open resume in a new tab"
                    className={`
                        group
                        ml-auto
                        hidden
                        h-10
                        items-center
                        gap-2
                        rounded-lg
                        border
                        border-white/30
                        bg-transparent
                        px-5
                        text-[12px]
                        font-semibold
                        tracking-[0.08em]
                        text-white
                        transition-all
                        duration-300
                        motion-reduce:transition-none
                        hover:border-[#7749FF]/70
                        hover:bg-[#7749FF]/10
                        md:flex
                        ${focusRing}
                    `}
                >
                    <span>RESUME</span>

                    <ArrowUpRight
                        size={14}
                        strokeWidth={1.8}
                        aria-hidden="true"
                        className="
                            transition-transform
                            duration-300
                            motion-reduce:transition-none
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                        "
                    />
                </a>

                {/* MOBILE MENU BUTTON */}
                <button
                    ref={menuButtonRef}
                    type="button"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls={MENU_ID}
                    onClick={() => setMenuOpen((open) => !open)}
                    className="
                        ml-auto
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-white/10
                        text-zinc-300
                        transition-all
                        duration-300
                        motion-reduce:transition-none
                        hover:border-[#7749FF]/50
                        hover:bg-[#7749FF]/10
                        hover:text-white
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[#7749FF]
                        md:hidden
                    "
                >
                    {menuOpen ? (
                        <X size={19} strokeWidth={1.8} aria-hidden="true" />
                    ) : (
                        <Menu size={19} strokeWidth={1.8} aria-hidden="true" />
                    )}
                </button>
            </div>

            {/* MOBILE PANEL
                Stays in the DOM so it can fade; `invisible` removes it from
                the tab order and accessibility tree while closed. */}
            <div
                id={MENU_ID}
                className={`
                    absolute
                    inset-x-0
                    top-full
                    border-b
                    border-white/6
                    bg-black/95
                    backdrop-blur-xl
                    transition-all
                    duration-200
                    motion-reduce:transition-none
                    md:hidden
                    ${menuOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }
                `}
            >
                <ul className="mx-auto flex max-w-360 flex-col px-6 py-3">
                    {NAV_LINKS.map((item) => {
                        const isActive = shownSection === item.id;

                        return (
                            <li key={item.id}>
                                <a
                                    href={item.href}
                                    aria-current={isActive ? "location" : undefined}
                                    onClick={(e) => handleNavClick(e, item.id)}
                                    className={`
                                        block
                                        border-l-2
                                        py-3
                                        pl-4
                                        text-[13px]
                                        font-medium
                                        tracking-[0.04em]
                                        transition-colors
                                        duration-200
                                        motion-reduce:transition-none
                                        ${focusRing}
                                        ${isActive
                                            ? "border-[#7749FF] text-white"
                                            : "border-transparent text-zinc-400 hover:text-white"
                                        }
                                    `}
                                >
                                    {item.label}
                                </a>
                            </li>
                        );
                    })}

                    <li className="mt-2 border-t border-white/6 pt-4 pb-2">
                        <a
                            href="/Siddharth-Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open resume in a new tab"
                            onClick={closeMenu}
                            className={`
                                inline-flex
                                h-10
                                items-center
                                gap-2
                                rounded-lg
                                border
                                border-white/10
                                px-5
                                text-[12px]
                                font-semibold
                                tracking-[0.08em]
                                text-white
                                transition-all
                                duration-300
                                motion-reduce:transition-none
                                hover:border-[#7749FF]/70
                                hover:bg-[#7749FF]/10
                                ${focusRing}
                            `}
                        >
                            <span>RESUME</span>
                            <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;