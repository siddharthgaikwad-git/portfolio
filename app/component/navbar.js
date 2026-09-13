import React from "react";
import Image from "next/image";


const Navbar = () => {
    return (
        <nav className="h-16 px-6 md:px-12 flex items-center justify-between bg-black text-white sticky top-0 shadow-md z-50">

            {/* Logo */}
            <a
                href="#home"
                className="text-md font-bold tracking-tight hover:text-[#7749FF] transition-colors "
            >
                S.GAIKWAD
            </a>

            {/* Navigation */}
            <ul className="flex items-center gap-8">
                <li className="hidden sm:block">
                    <a
                        href="#work"
                        className="text-sm font-semibold hover:text-[#7749FF] transition-colors "
                    >
                        WORK
                    </a>
                </li>

                <li className="hidden sm:block">
                    <a
                        href="#journey"
                        className="text-sm font-semibold hover:text-[#7749FF] transition-colors"
                    >
                        JOURNEY
                    </a>
                </li>

                <li className="hidden sm:block">
                    <a
                        href="#about"
                        className="text-sm font-semibold hover:text-[#7749FF] transition-colors"
                    >
                        ABOUT
                    </a>
                </li>

                <li className="hidden sm:block">
                    <a
                        href="#contact"
                        className="text-sm font-semibold hover:text-[#7749FF] transition-colors"
                    >
                        CONTACT
                    </a>
                </li>

                {/* Resume */}
                <li className="block">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-black border border-neutral-700
                         text-white text-sm font-bold uppercase tracking-wider rounded-sm
                         hover:border-white transition-colors flex items-center gap-2" >
                        RESUME
                        <span>↗</span>
                    </a>
                </li>
               
            </ul>
        </nav>
    );
};

export default Navbar;