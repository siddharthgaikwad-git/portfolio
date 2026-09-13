import React from "react";
import {
    Rocket,
    Code2,
    Layers3,
    Target,
    ArrowRight,
    BarChart3,
    BriefcaseBusiness,
    GraduationCap,
    Sparkles,
    CircleArrowOutUpRight,
} from "lucide-react";

const Journey = () => {
    const journey = [
        {
            year: "2024",
            icon: Rocket,
            title: "First step",
            description:
                "Started exploring development, opened a code editor for the first time, and built my first HTML page.",
        },
        {
            year: "2025",
            icon: Code2,
            title: "Building Mode",
            description:
                "Started building web projects and experimenting with CSS, JavaScript, and different technologies through hands-on projects.",
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
                "Keep building, learning, and experimenting. More projects, more skills, more ideas.",
        },
    ];

    const status = [
        {
            icon: BarChart3,
            title: <span className="text-[#7749FF] font-bold flex items-center gap-2 animate-pulse">
                   STATUS
                  </span>,

            value: "",
        },
        {
            icon: BriefcaseBusiness,
            title: "BUILDING",
            value: "My Portfolio",
        },
        {
            icon: GraduationCap,
            title: "LEARNING",
            value: "Next.js · Backend",
        },
        {
            icon: Sparkles,
            title: "EXPLORING",
            value: "UI/UX · Web Animations",
        },
        {
            icon: CircleArrowOutUpRight,
            title: "NEXT",
            value: "More projects",
        },
    ];

    return (
        <section
            id="journey"
            className="min-h-screen bg-black text-white px-6 md:px-10 lg:px-16 pb-10 pt-20 py-10"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

                {/* ================= LEFT : JOURNEY ================= */}
                <div className="lg:col-span-8">

                    {/* Section Heading */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3">
                            <p className="text-[#7749FF] text-xs font-semibold tracking-wider mb-1">
                                TIMELINE
                            </p>

                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mt-1">
                            MY <span className="text-[#7749FF]">JOURNEY</span>
                        </h2>

                        <p className="text-gray-500 text-sm mt-2">
                            From curiosity to code — building, learning, and growing one
                            project at a time.
                        </p>
                    </div>


                    {/* Timeline */}
                    <div className="relative">

                        {/* Vertical Line */}
                        <div className="absolute left-2.5 top-2 bottom-2 w-px bg-gray-800" />

                        <div className="space-y-2">

                            {journey.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.year}
                                        className="relative flex items-center gap-3"
                                    >

                                        {/* Timeline Dot */}

                                        <div className="relative z-10 w-5 flex justify-center">
                                            <span className="w-2 h-2 rounded-full bg-[#7749FF] shadow-[0_0_10px_#7749FF]" />
                                        </div>



                                        {/* Year */}
                                        <div className="w-16 md:w-20 shrink-0">
                                            <div className="border border-white/10 bg-white/3 rounded-lg px-2 py-3 text-center">
                                                <span className="text-[10px] md:text-xs text-[#7749FF] font-semibold">
                                                    {item.year}
                                                </span>
                                            </div>
                                        </div>


                                        {/* Journey Card */}
                                        <div className="flex-1 min-w-0">
                                            <div className="border border-white/5 bg-white/3 hover:border-[#7749FF]/40 transition-colors rounded-lg px-3 py-2.5 flex items-center gap-3">

                                                {/* Icon */}
                                                <div className="w-8 h-8 shrink-0 rounded-full bg-[#7749FF]/10 border border-[#7749FF]/20 flex items-center justify-center">
                                                    <Icon
                                                        size={15}
                                                        className="text-[#7749FF]"
                                                    />
                                                </div>


                                                {/* Content */}
                                                <div className="min-w-0">
                                                    <h3 className="text-xs md:text-[16px] font-semibold text-white">
                                                        {item.title}
                                                    </h3>

                                                    <p className="text-[12px] md:text-[14px] leading-tight text-gray-300">
                                                        {item.description}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>


                {/* ================= RIGHT : STATUS ================= */}
                <div className="lg:col-span-4 md:col-span-3 flex lg:justify-end lg:mt-32.5">

                    <div className="w-full max-w-sm rounded-xl border border-[#7749FF] bg-linear-to-br from-[#7749FF]/10 via-black to-[#7749FF]/5 p-4 shadow-[0_0_30px_rgba(119,73,255,0.15)]">

                        {status.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div key={item.title}>

                                    <div className="flex items-center gap-3 py-2.5">

                                        {/* Icon */}
                                        <div className="w-8 h-8 shrink-0 rounded-lg bg-[#7749FF]/10 border border-[#7749FF]/30 flex items-center justify-center">
                                            <Icon
                                                size={15}
                                                className="text-[#7749FF]"
                                            />
                                        </div>


                                        {/* Text */}
                                        <div>
                                            <p className="text-xs font-bold text-gray-200">
                                                {item.title}
                                            </p>

                                            {item.value && (
                                                <p className="text-sm text-gray-300 mt-0.5">
                                                    {item.value}
                                                </p>
                                            )}
                                        </div>

                                    </div>

                                    {/* Divider */}
                                    {index !== status.length - 1 && (
                                        <div className="ml-11 border-b border-white/5" />
                                    )}

                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Journey;