import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 md:px-10 lg:px-16 py-16"
    >
      {/* ================= HEADER ================= */}
      <div className="mb-4">
        <p className="text-[#7749FF] text-lg font-light">
          CONTACT
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
          LET'S BUILD
          SOMETHING.
        </h2>

        <p className="text-gray-400 text-base md:text-lg mt-1">
          Have an idea, project, or just want to say hello?
        </p>
      </div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 max-w-5xl mx-auto">


        {/* ================= MESSAGE FORM ================= */}
        <div className="border border-[#7749FF] rounded-xl p-2 md:p-5 
                shadow-[0_0_20px_4px_#7749FF]">

          {/* Form Heading */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#7749FF] animate-pulse  shadow-[0_0_10px_#7749FF]" />

            <h3 className="text-xl md:text-lg font-medium tracking-wide">
              MESSAGE ME
            </h3>
          </div>


          {/* Name */}
          <div className="mb-3">
            <label className="block text-sm text-gray-300 mb-2">
              Name
            </label>

            <div className="relative">
              <Image
                src="/person.png"
                alt=""
                width={20}
                height={20}
                className="absolute left-5 top-1/2 -translate-y-1/2"
              />

              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border border-gray-700 rounded-lg py-4 pl-14 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-[#7749FF] transition-colors"
              />
            </div>
          </div>


          {/* Email */}
          <div className="mb-3">
            <label className="block text-sm text-gray-300 mb-2">
              Email
            </label>

            <div className="relative">
              <Image
                src="/email.png"
                alt=""
                width={20}
                height={20}
                className="absolute left-5 top-1/2 -translate-y-1/2"
              />

              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent border border-gray-700 rounded-lg py-4 pl-14 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-[#7749FF] transition-colors"
              />
            </div>
          </div>


          {/* Message */}
          <div className="mb-3">
            <label className="block text-sm text-gray-300 mb-2">
              Message
            </label>

            <div className="relative">
              <Image
                src="/pencil.png"
                alt=""
                width={20}
                height={20}
                className="absolute left-5 top-5"
              />

              <textarea
                rows="3"
                placeholder="Write your message..."
                className="w-full bg-transparent border border-gray-700 rounded-lg py-4 pl-14 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-[#7749FF] transition-colors resize-none"
              />
            </div>
          </div>


          {/* Send Button */}
          <button
            type="submit"
            className="w-full border border-gray-700  rounded-lg py-4 flex items-center justify-center gap-3 text-sm font-semibold tracking-widest hover:bg-[#7749FF] transition-colors"
          >
            <Image
              src="/send.png"
              alt=""
              width={20}
              height={20}
            />

            SEND MESSAGE
          </button>

        </div>


        {/* ================= CONNECT WITH ME ================= */}
        <div className="flex flex-col justify-center">

          <h3 className="text-xl md:text-2xl font-medium tracking-widest mb-12">
            CONNECT WITH ME
          </h3>


          {/* Email */}
          <a
            href="mailto:siddharthgaikwad8010@gmail.com"
            target="_blank"
            className="border border-gray-800 rounded-xl p-5 flex items-center justify-between hover:border-[#7749FF] transition-colors mb-5"
          >
            <div className="flex items-center gap-5">

              <Image
                src="/email.png"
                alt="email"
                width={30}
                height={30}
              />

              <div>
                <p className="text-base font-semibold">
                  Email
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  siddharthgaikwad8010@gmail.com
                </p>
              </div>

            </div>

            <span className="text-2xl text-gray-300">
              ↗
            </span>
          </a>


          {/* GitHub */}
          <a
            href="https://github.com/siddharthgaikwad-git"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-800 rounded-xl p-5 flex items-center justify-between hover:border-[#7749FF] transition-colors mb-5"
          >
            <div className="flex items-center gap-5">

              <Image
                src="/github.png"
                alt="GitHub"
                width={30}
                height={30}
                className="object-contain"
              />

              <div>
                <p className="text-base font-semibold">
                  GitHub
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  github.com/siddharthgaikwad-git
                </p>
              </div>

            </div>

            <span className="text-2xl text-gray-300">
              ↗
            </span>
          </a>


          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/siddharth-gaikwad-web/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-800 rounded-xl p-5 flex items-center justify-between hover:border-[#7749FF] transition-colors"
          >
            <div className="flex items-center gap-5">

              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={30}
                height={30}
              />

              <div>
                <p className="text-base font-semibold">
                  LinkedIn
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  linkedin.com/in/siddharth-gaikwad-web
                </p>
              </div>

            </div>

            <span className="text-2xl text-gray-300">
              ↗
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;