import Image from "next/image";
import About from "./component/about";
import Skills from "./component/technology";
import Work from "./component/work";
import Journey from "./component/journey";
import Contact from "./component/contact";
import Footer from "./component/footer";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="min-h-screen bg-white dark:bg-black
        text-[#111111] dark:text-white
        transition-colors duration-300 px-6 sm:px-10 md:px-16 lg:px-20 pt-3 flex flex-col "
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-0 px-0 md:px-10 ">

            {/* LEFT — ALL TEXT CONTENT */}
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">

              <p className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide">
                HELLO, I&apos;M
              </p>

              <h1 className="text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] mt-6 sm:mt-8">
                SIDDHARTH
                <br />
                GAIKWAD
              </h1>

              {/* Tags centered on mobile.
                  FIX: lighter purple in dark mode to reach 4.5:1 contrast on black */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 text-[#8A63FF] dark:text-[#8A63FF] font-semibold text-base sm:text-lg md:text-xl mt-8 sm:mt-10">
                <span>BUILD</span>
                <span>DESIGN</span>
                <span>EXPERIMENT</span>
              </div>

              <div className="w-full max-w-xl mt-6 sm:mt-8 flex flex-col items-center lg:items-start">

                {/* FIX: neutral-600 in light mode (neutral-400 was ~2.5:1 on white) */}
                <p
                  className=" max-w-[320px] text-center text-base font-medium leading-relaxed text-neutral-600 dark:text-neutral-400 md:max-w-none md:text-left md:text-lg"
                >
                  Computer Engineering student exploring web development,
                  design and technology by turning ideas into real projects.
                </p>

                {/* Action Buttons centered on mobile */}
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 mt-8 w-full">

                  {/* ================= PRIMARY CTA =================
                      FIX: inverted colors per theme (was white-on-white in light mode),
                      hover:text-white for contrast on the purple sweep,
                      theme-aware focus ring offset */}
                  <a
                    href="#work"
                    className="
                    group
                    relative
                    inline-flex
                    h-11
                    items-center
                    justify-center
                    gap-3
                    overflow-hidden
                    rounded-md
                    px-6

                    bg-black
                    text-white
                    dark:bg-white
                    dark:text-black

                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.14em]

                    transition-all
                    duration-300
                    ease-out

                    hover:-translate-y-0.5
                    hover:text-white
                    hover:shadow-[0_8px_30px_rgba(119,73,255,0.18)]

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#7749FF]
                    focus-visible:ring-offset-4
                    focus-visible:ring-offset-white
                    dark:focus-visible:ring-offset-black
                    "
                  >
                    <span className="relative z-10">EXPLORE MY WORK</span>

                    {/* Arrow */}
                    <span
                      className="
                      relative z-10
                      text-sm
                      leading-none
                      transition-transform
                      duration-300
                      group-hover:translate-y-0.75
                      md:text-base
                      "
                    >
                      ↓
                    </span>

                    {/* Purple hover sweep */}
                    <span
                      className="
                      absolute
                      inset-0
                      -translate-x-full
                      bg-[#7749FF]
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:translate-x-0
                      "
                    />
                  </a>

                  {/* ================= RESUME =================
                      FIX: light-mode colors added (was white text on a white page) */}
                  <a
                    href="/Siddharth-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open resume in a new tab"
                    className="
                    group
                    hidden
                    md:inline-flex
                    h-11
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    px-6

                    border
                    border-black/15
                    dark:border-white/15
                    bg-black/2
                    dark:bg-white/2

                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-black/80
                    dark:text-white/80

                    backdrop-blur-sm

                    transition-all
                    duration-300
                    ease-out

                    hover:-translate-y-0.5
                    hover:border-[#7749FF]/60
                    hover:bg-[#7749FF]/8
                    hover:text-black
                    dark:hover:text-white
                    hover:shadow-[0_8px_30px_rgba(119,73,255,0.12)]

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#7749FF]
                    focus-visible:ring-offset-4
                    focus-visible:ring-offset-white
                    dark:focus-visible:ring-offset-black
                    "
                  >
                    <span>RESUME</span>

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.8}
                      aria-hidden="true"
                      className="
                      opacity-70
                      transition-all
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                      "
                    />
                  </a>

                </div>

              </div>

            </div>

            {/* RIGHT — IMAGE */}
            <div className="flex justify-center lg:justify-end items-end w-full">

              <div className="relative w-72 sm:w-105 lg:w-120 xl:w-140 xl:translate-x-24">

                {/* Purple Glow */}
                <div
                  className="
                  absolute
                  left-1/2
                  top-[30%]
                  -translate-x-1/2
                  -translate-y-1/2
                  w-[70%]
                  h-[55%]
                  rounded-full
                  bg-[#7749FF]
                  opacity-40
                  blur-[100px]
                  pointer-events-none
                  "
                />

                {/* Person Image
                    FIX: added `sizes` so Next serves an appropriately sized file.
                    Widths match w-72 / sm:w-105 / lg:w-120 / xl:w-140 */}
                <Image
                  src="/siddharth.webp"
                  alt="Siddharth Gaikwad"
                  width={1024}
                  height={1536}
                  sizes="(min-width: 1280px) 560px, (min-width: 1024px) 480px, (min-width: 640px) 420px, 288px"
                  priority
                  fetchPriority="high"
                  className="relative z-10 w-full h-auto max-h-125 lg:max-h-155 object-contain mx-auto"
                />
                {/* Bottom Fade
                    FIX: fades to white in light mode instead of black */}
                <div
                  className="
                  absolute
                  z-30
                  inset-x-0
                  bottom-0
                  h-36 sm:h-60
                  bg-linear-to-t
                  from-white
                  dark:from-black
                  to-transparent
                  pointer-events-none
                  "
                />

              </div>

            </div>

          </div>
        </div>

      </section>
      <About />
      <Skills />
      <Work />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}