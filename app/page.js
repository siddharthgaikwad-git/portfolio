import Image from "next/image";
import About from "./component/about";
import Technology from "./component/technology";
import Work from "./component/work";
import Journey from "./component/journey";
import Contact from "./component/contact";
import Footer from "./component/footer";

export default function Home() {
  return (
    <main >
      <section
        id="home"
        className="min-h-screen  bg-white dark:bg-black
        text-[#111111] dark:text-white
        transition-colors duration-300 px-10 md:px-16  pt-4 flex flex-col"
      >
        {/* Top Header */}
        <div className="">
          <p className="text-2xl md:text-3xl font-bold uppercase">
            HELLO, I'M
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 px-0 md:px-10 mt-8 md:mt-10">

          {/* Left Column */}
          <div className="lg:col-span-7">
            <h1 className="text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95]">
              SIDDHARTH
              <br />
              GAIKWAD
            </h1>

            <div className="flex flex-wrap gap-8 text-[#7749FF] font-semibold text-base sm:text-lg md:text-xl mt-10 sm:mt-15 mb-3">
              <span>BUILD</span>
              <span>DESIGN</span>
              <span>EXPERIMENT</span>
            </div>
          </div>


          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col items-start md:items-end sm:mt-auto">

            {/* Profile Image */}
            <figure>
              <Image
                src="/siddharth.jpg"
                alt="Siddharth Gaikwad"
                width={290}
                height={300}
                style={{ width: "85%", height: "auto" }}
                className="object-cover rounded-lg shadow-[0_0_35px_#7749FF]"
                priority
              />
            </figure>


            {/* Description + Buttons */}
            <div className="w-full max-w-xl mt-3 lg:mt-[8vh]">

              <p className="text-base md:text-lg text-neutral-200 font-semibold leading-relaxed">
                Computer Engineering student exploring web development,
                design and technology by turning ideas into real projects.
              </p>

              <div className="flex items-center gap-5 mt-6">

                <a
                  href="#work"
                  className="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-neutral-200 transition-colors flex items-center gap-2"
                >
                  EXPLORE MY WORK
                  <span>↓</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-black border border-neutral-700 text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:border-white transition-colors flex items-center gap-2"
                >
                  RESUME
                  <span>↗</span>
                </a>

              </div>

            </div>

          </div>

        </div>


      </section>
      <About />
      <Technology />
      <Work />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}