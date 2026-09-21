"use client"

import React from "react";
import Image from "next/image";

const Footer = () => {
     const handleBackToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    const socialLinks = [
        {
            name: "EMAIL",
            href: "mailto:siddharthgaikwad8010@gmail.com",
            icon: "/icons/email.png",
            external: false,
            label: "Send me an email",
        },
        {
            name: "GITHUB",
            href: "https://github.com/siddharthgaikwad-git",
            icon: "/icons/github.png",
            external: true,
            label: "Open my GitHub profile",
        },
        {
            name: "LINKEDIN",
            href: "https://www.linkedin.com/in/siddharth-gaikwad-web/",
            icon: "/icons/linkedin.png",
            external: true,
            label: "Open my LinkedIn profile",
        },
    ];

    return (
        <footer className="relative overflow-hidden bg-black text-white">

            {/* =================================================
                AMBIENT BACKGROUND GLOW
            ================================================== */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-87.5
                    w-87.5
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#7749FF]/6
                    blur-[120px]
                "
            />


            {/* =================================================
                MAIN FOOTER CONTENT
            ================================================== */}

            <div
                className="
                    relative
                    flex
                    min-h-[65vh]
                    flex-col
                    items-center
                    justify-center
                    px-6
                    py-20
                    text-center
                    md:px-10
                    lg:px-16
                "
            >

                <div className="mx-auto flex max-w-3xl flex-col items-center">


                    {/* =================================================
                        SMALL LABEL
                    ================================================== */}



                    <div className="mb-6 flex items-center gap-4">
                        <span className="h-px w-10 bg-[#7749FF]" />

                        <span
                            className="
            text-xs
            font-medium
            tracking-[0.3em]
            text-[#8A63FF]
        "
                        >
                            HAVE A PROJECT IN MIND?
                        </span>

                        <span className="h-px w-10 bg-[#7749FF]" />




                    </div>



                    {/* =================================================
                        NAME
                    ================================================== */}

                    <h2
                        className="
                            text-4xl
                            font-bold
                            leading-none
                            tracking-[-0.04em]

                            sm:text-4xl
                            md:text-5xl
                        "
                    >
                        SIDDHARTH GAIKWAD
                    </h2>



                    {/* =================================================
                        TAGLINE
                    ================================================== */}

                    <div
                        className="
                            mt-5
                            flex
                            flex-wrap
                            items-center
                            justify-center
                            gap-x-3
                            gap-y-2
                            text-xs
                            font-medium
                            tracking-[0.2em]

                            sm:text-sm
                        "
                    >

                        <span className="text-[#8A63FF]">
                            BUILD
                        </span>

                        <span
                            aria-hidden="true"
                            className="text-gray-700"
                        >
                            •
                        </span>

                        <span className="text-[#8A63FF]">
                            DESIGN
                        </span>

                        <span
                            aria-hidden="true"
                            className="text-gray-700"
                        >
                            •
                        </span>

                        <span className="text-[#8A63FF]">
                            EXPERIMENT
                        </span>

                    </div>



                    {/* =================================================
                        AVAILABILITY
                    ================================================== */}

                    <div className="mt-8 flex flex-col items-center">

                        <div className="flex items-center gap-3">

                            {/* Status Dot */}

                            <span
                                aria-hidden="true"
                                className="relative flex h-2.5 w-2.5"
                            >

                                <span
                                    className="
                                        absolute
                                        inset-0
                                        rounded-full
                                        bg-emerald-400/40
                                        animate-pulse
                                    "
                                />

                                <span
                                    className="
                                        relative
                                        h-2.5
                                        w-2.5
                                        rounded-full
                                        bg-emerald-400
                                        shadow-[0_0_10px_rgba(52,211,153,0.7)]
                                    "
                                />

                            </span>


                            <span
                                className="
                                    text-xs
                                    font-medium
                                    tracking-[0.15em]
                                    text-gray-300

                                    sm:text-sm
                                "
                            >
                                OPEN TO OPPORTUNITIES
                            </span>

                        </div>


                        <p
                            className="
                                mt-3
                                text-sm
                                text-gray-600
                            "
                        >
                            Turning ideas into something real.
                        </p>

                    </div>



                    {/* =================================================
                        SOCIAL LINKS
                    ================================================== */}

                    <div
                        className="
                            mt-10
                            flex
                            items-center
                            justify-center
                            gap-5
                            sm:gap-6
                        "
                    >

                        {socialLinks.map((social) => (

                            <div
                                key={social.name}
                                className="group relative"
                            >

                                {/* Social Button */}

                                <a
                                    href={social.href}
                                    target={
                                        social.external
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        social.external
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    aria-label={social.label}
                                    className="
                                        relative
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        overflow-hidden
                                        rounded-full
                                        border
                                        border-white/15
                                        bg-black

                                        transition-all
                                        duration-300

                                        hover:border-[#7749FF]
                                        hover:shadow-[0_0_25px_rgba(119,73,255,0.35)]

                                        focus-visible:outline-none
                                        focus-visible:ring-2
                                        focus-visible:ring-[#7749FF]
                                        focus-visible:ring-offset-2
                                        focus-visible:ring-offset-black
                                    "
                                >

                                    {/* Purple Fill */}

                                    <span
                                        aria-hidden="true"
                                        className="
                                            absolute
                                            bottom-0
                                            left-0
                                            h-0
                                            w-full
                                            rounded-full
                                            bg-[#7749FF]

                                            transition-all
                                            duration-300

                                            group-hover:h-full
                                        "
                                    />


                                    {/* Icon */}

                                    <Image
                                        src={social.icon}
                                        alt=""
                                        width={25}
                                        height={25}
                                        className="
                                            relative
                                            z-10
                                            object-contain

                                            transition-transform
                                            duration-300

                                            group-hover:scale-110
                                        "
                                    />

                                </a>


                                {/* =================================================
                                    TOOLTIP
                                ================================================== */}

                                <span
                                    className="
                                        pointer-events-none
                                        absolute
                                        left-1/2
                                        top-17
                                        -translate-x-1/2

                                        whitespace-nowrap

                                        rounded-md
                                        bg-[#7749FF]
                                        px-3
                                        py-1.5

                                        text-xs
                                        font-medium
                                        tracking-wider
                                        text-white

                                        opacity-0

                                        shadow-[0_8px_25px_rgba(119,73,255,0.30)]

                                        transition-all
                                        duration-300

                                        group-hover:top-18
                                        group-hover:opacity-100
                                    "
                                >
                                    {social.name}
                                </span>

                            </div>

                        ))}

                    </div>



                    {/* =================================================
                        EMAIL
                    ================================================== */}

                    <a
                        href="mailto:siddharthgaikwad8010@gmail.com"
                        className="
                            mt-14
                            text-sm
                            text-gray-200

                            transition-colors
                            duration-300

                            hover:text-[#8A63FF]
                        "
                    >
                        siddharthgaikwad8010@gmail.com
                    </a>


                </div>

            </div>



            {/* =================================================
                BOTTOM FOOTER BAR
            ================================================== */}

            <div
                className="
                    relative
                    border-t
                    border-white/10
                    bg-neutral-950
                    px-6
                    py-5

                    md:px-10
                    lg:px-16
                "
            >

                <div
                    className="
                        mx-auto
                        flex
                        max-w-7xl
                        flex-col
                        items-center
                        justify-between
                        gap-3

                        text-center

                        sm:flex-row
                        sm:text-left
                    "
                >

                    {/* Copyright */}

                    <p
                        className="
                            text-[11px]
                            text-gray-300
                        "
                    >
                        © 2026 Siddharth Gaikwad.
                    </p>


                    {/* Designed & Built */}

                    <p
                        className="
                            text-[11px]
                            text-gray-400
                        "
                    >
                        Designed & built by{" "}
                        <span className="text-gray-300">
                            Siddharth Gaikwad
                        </span>
                    </p>


                    {/* Back To Top */}

                    <a
                        href="#home"
                        onClick={handleBackToTop}
                        className="
                        group
                        inline-flex
                        items-center
                        gap-3

                        rounded-full
                        border
                        border-white/10
                        bg-white/2

                        px-4
                        py-2.5

                        text-xs
                        font-medium
                        tracking-[0.2em]
                        text-gray-400

                        transition-all
                        duration-300

                        hover:border-[#7749FF]/50
                        hover:bg-[#7749FF]/6
                        hover:text-white
                        hover:shadow-[0_0_25px_rgba(119,73,255,0.15)]

                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[#7749FF]
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-neutral-950
                    "
                    >

                        <span>
                            BACK TO TOP
                        </span>

                        {/* Arrow Circle */}

                        <span
                            aria-hidden="true"
                            className="
                            flex
                            h-6
                            w-6
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            text-sm
                            text-gray-400

                            transition-all
                            duration-300

                            group-hover:-translate-y-0.5
                            group-hover:border-[#7749FF]/50
                            group-hover:bg-[#7749FF]
                            group-hover:text-white
                        "
                        >
                            ↑
                        </span>

                    </a>

                </div>

            </div>

        </footer>
    );
};

export default Footer;