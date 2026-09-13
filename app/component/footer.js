import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-black text-white">

            {/* Main Footer Content */}
            <div className="min-h-[75vh] px-6 md:px-10 lg:px-16 flex flex-col items-center justify-center text-center">

                {/* Name */}
                <h2 className="text-3xl md:text-4xl font-bold">
                    SIDDHARTH GAIKWAD
                </h2>

                {/* Tagline */}
                <p className="text-[#7749FF] flex gap-5 text-base md:text-lg mt-4">
                    <span>BUILD</span>  <span>DESIGN</span>   <span>EXPERIMENT</span>
                </p>




                {/* Availability */}
                <div className="flex items-center gap-2 mt-6">
                    {/* Dot with ripple ping effect */}
                    <span className="relative flex size-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                    </span>

                    {/* Text */}
                    <span className="text-sm md:text-base text-gray-200 uppercase tracking-wide">
                        OPEN TO OPPORTUNITIES
                    </span>
                </div>


                {/* Social Links */}
                <div className="flex flex-wrap items-center justify-center gap-3 mt-8 ">

                    {/* Email */}
                    <a
                        href="mailto:siddharthgaikwad8010@gmail.com"
                        className="border border-gray-500 px-3 py-2 flex items-center gap-2 text-sm hover:border-white rounded-lg transition-colors"
                    >
                        <Image
                            src="/email.png"
                            alt="Email"
                            width={18}
                            height={18}
                            className="object-contain"
                        />

                        EMAIL
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/siddharthgaikwad-git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-500 px-3 py-2 flex items-center gap-2 text-sm hover:border-white rounded-lg transition-colors"
                    >
                        <Image
                            src="/github.png"
                            alt="GitHub"
                            width={18}
                            height={18}
                            className="object-contain"
                        />

                        GITHUB
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/siddharth-gaikwad-web/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-500 px-3 py-2 flex items-center gap-2 text-sm hover:border-white rounded-lg transition-colors"
                    >
                        <Image
                            src="/linkedin.png"
                            alt="LinkedIn"
                            width={18}
                            height={18}
                            className="object-contain"
                        />

                        LinkedIn
                    </a>

                </div>

            </div>


            {/* Footer */}
            <div className="bg-neutral-900 border-gray-500 border-t py-4 px-4 text-center text-sm text-gray-300">

                <p>
                    © 2026 Siddharth Gaikwad.
                </p>

                <p className="mt-1">
                    Designed & built by Siddharth Gaikwad
                </p>

            </div>

        </footer>
    );
};

export default Footer;