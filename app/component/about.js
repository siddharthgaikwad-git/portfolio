import Image from "next/image";

const About = () => {
    return (
        <section
            id="about"
            className="relative min-h-screen overflow-hidden bg-[#050507] text-white px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-10">
            <div className="mx-auto w-full max-w-7xl">


                {/* ================= SECTION HEADER ================= */}
                <div className="flex items-center gap-4 ">

                    <span className="text-sm font-semibold tracking-[0.18em]  text-[#8A63FF]">
                        ABOUT ME
                    </span>
                </div>


                {/* ================= MAIN AREA ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-10 items-center">

                    {/* ================= LEFT CONTENT ================= */}
                    <div className="max-w-4xl">

                        {/* Main Heading */}
                        <h2 className="text-[42px] sm:text-[52px] md:text-[60px] lg:text-[62px] xl:text-[68px] leading-[0.98] font-bold tracking-[-0.04em]">
                            Computer Engineering
                            <br />

                            Student Who Likes to


                            <span className="text-[#8A63FF]">
                                Build.
                            </span>
                        </h2>


                        {/* Description */}
                        <p className="mt-8 max-w-2xl text-base md:text-lg leading-8 text-gray-400">
                            I'm Siddharth — currently exploring{" "}
                            <span className="text-white">
                                web development
                            </span>
                            ,{" "}
                            <span className="text-white">
                                design
                            </span>
                            , and different technologies by turning ideas into
                            real projects.
                        </p>


                        {/* Quote */}
                        <div className="mt-7 flex gap-5 max-w-xl">
                            <div className="w-0.5 bg-[#8A63FF] shrink-0"></div>

                            <p className="text-base md:text-lg italic leading-7 text-gray-200">
                                I learn by building, breaking things, and
                                <br className="hidden sm:block" />
                                trying again.
                            </p>
                        </div>


                        {/* CTA */}
                        <div className="mt-8">
                            <a
                                href="#work"
                                className="group inline-flex items-center gap-4 rounded-full border border-white/10 px-6 py-3 text-sm md:text-base font-semibold transition-all duration-300 hover:border-[#7749FF]/50 hover:bg-[#7749FF]/10"
                            >
                                See what I've built

                                <span className="text-[#8A63FF] transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        </div>

                    </div>


                    {/* ================= RIGHT ID CARD ================= */}
                    <div className="relative flex justify-center lg:justify-end mt-10  ">

                        {/* Purple Glow */}
                        <div
                            aria-hidden="true"
                            className="
                        
                            absolute
                            top-1/2
                            left-1/2
                            -translate-x-1/2
                            -translate-y-1/2
                            w-70
                            h-95
                            rounded-full
                            bg-[#7749FF]/20
                            blur-[90px]
                            pointer-events-none

                            
                            "
                        />

                        {/* ================= CARD WRAPPER ================= */}
                        <div className="relative w-75 sm:w-[320px]">

                            {/* Floating Top Element */}

                            <div
                                aria-hidden="true"
                                className="
                                absolute
                                -top-16
                                left-1/2
                                -translate-x-1/2
                                z-20
                                "
                            >
                                <div
                                    className="
                                    relative
                                    h-16
                                    w-9
                                    rounded-md
                                    border
                                    border-white/10
                                    bg-[#0d0d12]
                                    "
                                >
                                    <div
                                        className="
                                    absolute
                                    -bottom-1
                                    left-1/2
                                    -translate-x-1/2
                                    flex
                                    h-7
                                    w-7
                                    items-center
                                    justify-center
                                    rounded-md
                                    border
                                    border-[#7749FF]/50
                                    bg-[#12101b]
                                    shadow-[0_0_20px_rgba(119,73,255,0.35)]
                                    "
                                    >
                                        <div className="h-3 w-3 rotate-45 border border-[#8A63FF]" />
                                    </div>
                                </div>
                            </div>


                            {/* ================= CARD ================= */}
                            <div
                                className="
                                relative
                                z-10
                                w-full
                                min-h-110
                                rounded-[22px]
                                border
                                border-[#7749FF]/40
                                bg-[#0b0b0f]
                                p-5
                                shadow-[0_0_60px_rgba(119,73,255,0.18),inset_0_0_0px_rgba(119,73,255,0)]
                                transition-all
                                duration-500
                                hover:border-[#7749FF]/70
                                hover:shadow-[0_0_80px_rgba(119,73,255,0.35),inset_0_0_50px_rgba(119,73,255,0.2)]
                                "
                            >

                                {/* ================= PHOTO AREA ================= */}
                                <div
                                    aria-hidden="true"
                                    className="
                                    mt-2
                                    h-50
                                    rounded-xl
                                    bg-[radial-gradient(circle_at_50%_25%,rgba(119,73,255,0.14),transparent_50%)]
                                    flex
                                    items-center
                                    justify-center
                                    "
                                >

                                    <div className="mt-2 h-50 overflow-hidden rounded-xl border border-white/10">
                                        <Image
                                            src="/me.webp"
                                            alt="Siddharth Gaikwad"
                                            width={600}
                                            height={450}
                                            sizes="300px"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                </div>


                                {/* ================= CARD DETAILS ================= */}
                                <div className="mt-4 flex flex-col items-center">

                                    {/* Name */}
                                    <h3
                                        className="
                                        text-center
                                        text-xl
                                        font-medium
                                        tracking-tight
                                        text-violet-400
                                        "
                                    >
                                        SIDDHARTH GAIKWAD
                                    </h3>


                                    {/* Role */}
                                    <p
                                        className="
                                        mt-1
                                        text-center
                                        text-xs
                                        tracking-wide
                                        text-white
                                        "
                                    >
                                        COMPUTER ENGINEERING STUDENT
                                    </p>


                                    {/* ================= INFO GRID ================= */}
                                    <div className="mt-5 grid w-full grid-cols-2 gap-x-8 gap-y-4">

                                        {/* Focus */}
                                        <div className="text-center">
                                            <p className="text-xs text-gray-400">
                                                FOCUS
                                            </p>

                                            <p className="text-sm font-semibold text-white">
                                                Web Dev
                                            </p>
                                        </div>

                                        {/* Approach */}
                                        <div className="text-center">
                                            <p className="text-xs text-gray-400">
                                                APPROACH
                                            </p>

                                            <p className="text-sm font-semibold text-white">
                                                Build & Learn
                                            </p>
                                        </div>

                                        {/* Based In */}
                                        <div className="text-center">
                                            <p className="text-xs text-gray-400">
                                                BASED IN
                                            </p>

                                            <p className="text-sm font-semibold text-white">
                                                India
                                            </p>
                                        </div>

                                        {/* Currently */}
                                        <div className="text-center">
                                            <p className="text-xs text-gray-400">
                                                CURRENTLY
                                            </p>

                                            <p className="text-sm font-semibold text-white">
                                                Exploring
                                            </p>
                                        </div>

                                    </div>


                                    {/* ================= STATUS ================= */}
                                    <div
                                        className="
                                        mt-5
                                        flex
                                        w-full
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/2
                                        px-2.5
                                        py-1.5
                                        "
                                    >

                                        {/* Dot with ripple ping effect */}
                                        <span
                                            className="relative flex size-2 shrink-0"
                                            aria-hidden="true">
                                            <span
                                                className="
                                                absolute
                                                inline-flex
                                                h-full
                                                w-full
                                                animate-ping
                                                rounded-full
                                                bg-green-400
                                                opacity-75
                                                "
                                            />

                                            <span
                                                className="
                                                relative
                                                inline-flex
                                                size-2
                                                rounded-full
                                                bg-green-500
                                                "
                                            />
                                        </span>


                                        {/* Status Text */}
                                        <span
                                            className="
                                            text-[11px]
                                            tracking-wide
                                            text-gray-200
                                            uppercase
                                            leading-tight
                                            text-center
                                            "
                                        >
                                            Open to Projects & Collaboration
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= BOTTOM WORD ANIMATION ================= */}
                <div className="mt-14 lg:mt-8 flex justify-center">

                    <p className="flex items-center justify-center gap-1.5 whitespace-nowrap text-xs min-[380px]:text-sm sm:text-base md:text-lg font-bold leading-7 tracking-wide text-gray-200">

                        <span>I CONSTANTLY TRY TO</span>

                        <span className="relative inline-flex h-7 overflow-hidden">

                            <span className="words flex flex-col text-[#8A63FF]">

                                <span className="word h-7">ADAPT</span>
                                <span className="word h-7">GROW</span>
                                <span className="word h-7">BUILD</span>
                                <span className="word h-7">IMPROVE</span>
                                <span className="word h-7">ADAPT</span>

                            </span>

                        </span>

                    </p>

                </div>
            </div>

        </section>
    );
};

export default About;