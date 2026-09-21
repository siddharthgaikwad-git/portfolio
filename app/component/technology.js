import React from "react";
import Image from "next/image";

const technologies = [
  {
    number: "01",
    title: "Frontend",
    description: "Building clean and responsive user interfaces.",
    icon: "/icons/code.svg",
    items: [
      { name: "HTML", image: "/icons/html.svg" },
      { name: "CSS", image: "/icons/css.png" },
      { name: "JavaScript", image: "/icons/javascript.png" },
      { name: "React", image: "/icons/react.png" },
      { name: "Next.js", image: "/icons/nextjs.svg" },
      { name: "Tailwind CSS", image: "/icons/tailwindcss.png" },
    ],
  },
  {
    number: "02",
    title: "Backend",
    description: "Working with server-side logic and APIs.",
    icon: "/icons/backend-img.png",
    items: [
      { name: "Node.js", image: "/icons/node-js.png" },
      { name: "Express.js", image: "/icons/expressjs.png" },
    ],
  },
  {
    number: "03",
    title: "Database",
    description: "Storing and managing application data.",
    icon: "/icons/database.png",
    items: [
      { name: "MongoDB", image: "/icons/mongodb.png" },
      { name: "Mongoose", image: "/icons/mongoose.png" },
    ],
  },
  {
    number: "04",
    title: "Tools",
    description: "Tools I use to design, develop and ship projects.",
    icon: "/icons/tools.png",
    items: [
      { name: "Git", image: "/icons/git.png" },
      { name: "GitHub", image: "/icons/github.png" },
      { name: "VS Code", image: "/icons/vs-code.png" },
      { name: "Figma", image: "/icons/figma.png" },
      { name: "Postman", image: "/icons/postman.png" },
      { name: "Canva", image: "/icons/canva.png" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-black px-6 py-20 text-white md:px-12 lg:px-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-100 w-100 -translate-x-1/2 rounded-full bg-[#7749FF]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <div className="mb-5 flex items-center gap-4">

              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#8c62fe]">
                Skills & Expertise
              </span>
            </div>

            <h2 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-6xl lg:text-6xl">
              The tools I use
              <br />
              to <span className="text-[#8A63FF]">build.</span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-sm leading-7 text-gray-300 md:text-base">
              A mix of technologies, tools and skills I use to turn ideas into real projects.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-gray-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_12px_#4ade80]" />
              Always exploring something new
            </div>
          </div>
        </div>

        {/* ================= TECHNOLOGY GRID ================= */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {technologies.map((category) => (
            <div
              key={category.number}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/2.5 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#7749FF]/50 hover:bg-white/4.5 hover:shadow-[0_20px_70px_rgba(119,73,255,0.12)]"
            >

              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-10 w-15 rounded-full bg-[#7749FF]/10 blur-[70px] opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* ================= CARD HEADER ================= */}
              <div className="relative flex items-start justify-between">

                <div className="flex items-start gap-4">

                  {/* Category Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#7749FF]/30 bg-[#7749FF]/10 transition-all duration-500 group-hover:border-[#7749FF]/70 group-hover:bg-[#7749FF]/20 group-hover:shadow-[0_0_25px_rgba(119,73,255,0.25)]">
                    <Image
                      src={category.icon}
                      alt={category.title}
                      width={23}
                      height={23}
                      className="h-6 w-auto object-contain"
                    />
                  </div>

                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-xs text-gray-300">
                        {category.number}
                      </span>

                      <h3 className="text-xl font-medium capitalize tracking-tight">
                        {category.title}
                      </h3>
                    </div>

                    <p className="max-w-xs text-sm leading-6 text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= TECHNOLOGIES ================= */}
              {/* Replace the grid with flex-wrap and w-fit */}
              <div className="relative flex flex-wrap gap-2.5 pt-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="group/item inline-flex w-fit items-center gap-2.5 rounded-xl border border-white/8 bg-black/30 px-3.5 py-2 transition-all duration-300 hover:border-[#7749FF]/40 hover:bg-[#7749FF]/6"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={18}
                        height={18}
                        className="h-4.5 w-auto object-contain"
                      />
                    </div>

                    <span className="whitespace-nowrap text-base font-medium text-gray-300 transition-colors duration-300 group-hover/item:text-white">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;