import React from "react";
import Image from "next/image";

const Technology = () => {
  return (
    <section
      id="technologies"
      className="min-h-screen bg-black text-white px-10 md:px-16 pt-4 pb-10 flex flex-col"
    >
      {/* Section Header */}
      <div className="mb-5">
        <h2 className="text-[#7749FF] text-2xl font-semibold">
          TECHNOLOGIES
        </h2>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-2 max-w-md">
          The technologies, tools and platforms
          <br />
          I use to build and bring ideas to life.
        </p>
      </div>

      {/* Technology Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Frontend Card */}
        <div className="border border-gray-600 rounded-md p-3">

          {/* Card Header */}
          <div className="flex items-center gap-3 text-[#7749FF] mb-3">
            <Image
              src="/code.svg"
              alt="Frontend"
              width={28}
              height={28}
              className="object-contain p-1 bg-[#7749FF] rounded-md"
            />

            <h3 className="text-base md:text-lg">
              01 — FRONTEND
            </h3>
          </div>

          {/* Technology Pills */}
          <div className="flex flex-wrap gap-3">

            <div className="border border-gray-500 rounded-3xl flex items-center px-4 py-2 gap-2">
              <Image
                src="/html.svg"
                alt="HTML"
                width={20}
                height={20}
                className="object-contain"
              />
              <span>HTML</span>
            </div>

            <div className="border border-gray-500 rounded-3xl flex items-center px-4 py-2 gap-2">
              <Image
                src="/css.png"
                alt="CSS"
                width={20}
                height={20}
                className="object-contain"
              />
              <span>CSS</span>
            </div>

            <div className="border border-gray-500 rounded-3xl flex items-center px-4 py-2 gap-2">
              <Image
                src="/javascript.png"
                alt="JavaScript"
                width={20}
                height={20}
                className="object-contain"
              />
              <span>JAVASCRIPT</span>
            </div>

            <div className="border border-gray-500 rounded-3xl flex items-center px-4 py-2 gap-2">
              <Image
                src="/react.png"
                alt="React"
                width={20}
                height={20}
                className="object-contain"
              />
              <span>REACT</span>
            </div>

            <div className="border border-gray-500 rounded-3xl flex items-center px-4 py-2 gap-2">
              <Image
                src="/nextjs.svg"
                alt="Next.js"
                width={20}
                height={20}
                className="object-contain border border-gray-500 rounded-full p-1"
              />
              <span>NEXT.JS</span>
            </div>

            <div className="border border-gray-500 rounded-3xl flex items-center px-4 py-2 gap-2">
              <Image
                src="/tailwindcss.png"
                alt="Tailwind CSS"
                width={20}
                height={20}
                className="object-contain"
              />
              <span>TAILWIND CSS</span>
            </div>

          </div>
        </div>


        {/* Backend Card */}
        <div className="border border-gray-600 rounded-md p-3">

          {/* Card Header */}
          <div className="flex items-center gap-3 text-[#7749FF] mb-3">
            <Image
              src="/backend-img.png"
              alt="Backend"
              width={28}
              height={28}
              className="object-contain p-1 bg-[#7749FF] rounded-md"
            />

            <h3 className="text-base md:text-lg">
              02 — BACKEND
            </h3>
          </div>

          {/* Technology Pills */}
          <div className="flex flex-wrap gap-3">

            <div className="border border-gray-500 rounded-3xl flex items-center px-4 py-2 gap-2">
              <Image
                src="/node-js.png"
                alt="Node.js"
                width={20}
                height={20}
                className="object-contain"
              />
              <span>NODE.JS</span>
            </div>

            <div className="border border-gray-500 rounded-3xl flex items-center px-4 py-2 gap-2">
              <Image
                src="/expressjs.png"
                alt="Express.js"
                width={20}
                height={20}
                className="object-contain border border-gray-500 rounded-full p-1"
              />
              <span>EXPRESS.JS</span>
            </div>

          </div>
        </div>


        {/* Database Card */}
        <div className="border border-gray-600 rounded-md p-3">

          {/* Card Header */}
          <div className="flex items-center gap-3 text-[#7749FF] mb-3">
            <Image
              src="/database.png"
              alt="Database"
              width={28}
              height={28}
              className="object-contain p-1 bg-[#7749FF] rounded-md"
            />

            <h3 className="text-base md:text-lg">
              03 — DATABASE
            </h3>
          </div>

          {/* Technology Pills */}
          <div className="flex flex-wrap gap-3">

            <div className="border border-gray-500 rounded-3xl flex items-center px-4 py-2 gap-2">
              <Image
                src="/mongodb.png"
                alt="MongoDB"
                width={20}
                height={20}
                className="object-contain"
              />
              <span>MONGODB</span>
            </div>

            <div className="border border-gray-500 rounded-3xl flex items-center px-4 py-2 gap-2">
              <Image
                src="/mongoose.png"
                alt="Mongoose"
                width={20}
                height={20}
                className="object-contain"
              />
              <span>MONGOOSE</span>
            </div>

          </div>
        </div>


        {/* Tools Card */}
        <div className="border border-gray-600 rounded-md p-3">

          {/* Card Header */}
          <div className="flex items-center gap-3 text-[#7749FF] mb-3">
            <Image
              src="/tools.png"
              alt="Tools"
              width={28}
              height={28}
              className="object-contain p-1 bg-[#7749FF] rounded-md"
            />

            <h3 className="text-base md:text-lg">
              04 — TOOLS
            </h3>
          </div>

          {/* Technology Pills */}
          <div className="flex flex-wrap gap-3">

            <div className="border border-gray-500 rounded-3xl flex items-center px-4 py-2 gap-2">
              <Image
                src="/git.png"
                alt="Git"
                width={20}
                height={20}
                className="object-contain"
              />
              <span>GIT</span>
            </div>

            <div className="border border-gray-500 rounded-3xl flex items-center px-4 py-2 gap-2">
              <Image
                src="/github.png"
                alt="GitHub"
                width={20}
                height={20}
                className="object-contain"
              />
              <span>GITHUB</span>
            </div>

            <div className="border border-gray-500 rounded-3xl flex items-center px-4 py-2 gap-2">
              <Image
                src="/vs-code.png"
                alt="VS Code"
                width={20}
                height={20}
                className="object-contain"
              />
              <span>VS CODE</span>
            </div>

            <div className="border border-gray-500 rounded-3xl flex items-center px-4 py-2 gap-2">
              <Image
                src="/figma.png"
                alt="Figma"
                width={20}
                height={20}
                className="object-contain"
              />
              <span>FIGMA</span>
            </div>

            <div className="border border-gray-500 rounded-3xl flex items-center px-4 py-2 gap-2">
              <Image
                src="/postman.png"
                alt="Postman"
                width={20}
                height={20}
                className="object-contain"
              />
              <span>POSTMAN</span>
            </div>

            <div className="border border-gray-500 rounded-3xl flex items-center px-4 py-2 gap-2">
              <Image
                src="/canva.png"
                alt="Canva"
                width={20}
                height={20}
                className="object-contain"
              />
              <span>CANVA</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Technology;