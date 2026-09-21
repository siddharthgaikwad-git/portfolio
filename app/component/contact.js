"use client";

import React, { useState } from "react";
import Image from "next/image";

const Contact = () => {
  // Form submission status: "idle" | "sending" | "sent" | "error"
  const [status, setStatus] = useState("idle");

  // Sends the form data to our API route (/api/contact)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    // Collect all named inputs (name, email, message, website) into a plain object
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Treat any non-2xx response as a failure
      if (!res.ok) throw new Error("Request failed");

      // Clear the form only after the email was actually sent
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="
        relative min-h-screen
        overflow-hidden
        bg-black
        text-white
        px-6
        py-20
        md:px-10
        lg:px-16
        lg:pt-24
        lg:pb-16
      "
    >

      {/* =================================================
          BACKGROUND GLOW
      ================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-40
          h-96
          w-96
          rounded-full
          bg-[#7749FF]/10
          blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-[#7749FF]/8
          blur-[140px]
        "
      />


      {/* =================================================
          MAIN CONTAINER
      ================================================== */}

      <div className="relative mx-auto max-w-7xl">


        {/* =================================================
            HEADER
        ================================================== */}

        <div className="mb-4">

          {/* Contact Label */}

          <div className="flex items-center gap-4">

            <p
              className="
                text-sm font-semibold
                tracking-[0.35em]
                text-[#8A63FF]
              "
            >
              CONTACT
            </p>

          </div>


          {/* Main Heading */}

          <h2
            className="
              mt-5
              max-w-4xl
              text-2xl
              font-bold
              leading-[0.95]
              tracking-[-0.04em]

              sm:text-3xl
              md:text-4xl
            "
          >
            LET'S BUILD SOMETHING

          </h2>


          {/* Description */}

          <p
            className="
              mt-4
              max-w-xl
              text-base
              leading-7
              text-gray-400
              sm:text-lg
            "
          >
            Have an idea, project, or just want to say hello?
            <br className="hidden sm:block" />
            I'd love to hear from you.
          </p>

        </div>



        {/* =================================================
            MAIN CONTENT
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-12

            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-20
          "
        >


          {/* =================================================
              MESSAGE FORM
          ================================================== */}

          <div
            className="
              relative
              rounded-2xl
              border
              border-[#7749FF]/50
              bg-white/1.5
              p-5

              sm:p-7
              md:p-8

              shadow-[0_20px_70px_rgba(119,73,255,0.10)]
            "
          >

            {/* Subtle Gradient */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-2xl
                bg-linear-to-br
                from-[#7749FF]/4
                via-transparent
                to-transparent
              "
            />


            <div className="relative">


              {/* =================================================
                  FORM HEADER
              ================================================== */}

              <div
                className="
                  mb-6
                  flex
                  items-center
                  justify-between
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#7749FF]/10
                      ring-1
                      ring-[#7749FF]/30
                    "
                  >

                    <Image
                      src="/icons/send.png"
                      alt="send"
                      width={19}
                      height={19}
                    />

                  </div>


                  <h3
                    className="
                      text-sm
                      font-semibold
                      tracking-[0.16em]
                      sm:text-base
                    "
                  >
                    SEND ME A MESSAGE
                  </h3>

                </div>


                <span
                  className="
                    hidden
                    text-xs
                    text-gray-400
                    sm:block
                  "
                >
                  Let's talk.
                </span>

              </div>



              {/* =================================================
                  FORM
              ================================================== */}

              <form
                onSubmit={handleSubmit}
                onChange={() => {
                  // When the user edits the form again, clear the previous sent/error state
                  if (status === "sent" || status === "error") setStatus("idle");
                }}
                className="space-y-4"
              >

                {/* Honeypot field: hidden from real users, bots tend to fill it.
                    The API route silently ignores any submission where this has a value. */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />


                {/* NAME */}

                <div>

                  <label
                    htmlFor="contact-name"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-gray-300
                    "
                  >
                    Name
                  </label>


                  <div className="group relative">

                    <Image
                      src="/icons/person.png"
                      alt="person"
                      width={20}
                      height={20}
                      className="
                        absolute
                        left-4
                        top-1/2
                        z-10
                        -translate-y-1/2
                        opacity-60
                        transition-opacity
                        duration-300
                        group-focus-within:opacity-100
                      "
                    />


                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      required
                      className="
                        w-full
                        rounded-xl
                        border
                        border-white/10
                        bg-black/40
                        py-4
                        pl-12
                        pr-4
                        text-base
                        text-white
                        outline-none

                        placeholder:text-gray-400

                        transition-all
                        duration-300

                        hover:border-white/20

                        focus:border-[#7749FF]/70
                        focus:bg-[#7749FF]/25
                        focus:ring-4
                        focus:ring-[#7749FF]/10
                      "
                    />

                  </div>

                </div>



                {/* EMAIL */}

                <div>

                  <label
                    htmlFor="contact-email"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-gray-300
                    "
                  >
                    Email
                  </label>


                  <div className="group relative">

                    <Image
                      src="/icons/email.png"
                      alt="email"
                      width={20}
                      height={20}
                      className="
                        absolute
                        left-4
                        top-1/2
                        z-10
                        -translate-y-1/2
                        opacity-60
                        transition-opacity
                        duration-300
                        group-focus-within:opacity-100
                      "
                    />


                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="your@email.com"
                      required
                      className="
                        w-full
                        rounded-xl
                        border
                        border-white/10
                        bg-black/40
                        py-4
                        pl-12
                        pr-4
                        text-base
                        text-white
                        outline-none

                        placeholder:text-gray-400

                        transition-all
                        duration-300

                        hover:border-white/20

                        focus:border-[#7749FF]/70
                        focus:bg-[#7749FF]/2.5
                        focus:ring-4
                        focus:ring-[#7749FF]/10
                      "
                    />

                  </div>

                </div>



                {/* MESSAGE */}

                <div>

                  <label
                    htmlFor="contact-message"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-gray-300
                    "
                  >
                    Message
                  </label>


                  <div className="group relative">

                    <Image
                      src="/icons/pencil.png"
                      alt="pencile"
                      width={20}
                      height={20}
                      className="
                        absolute
                        left-4
                        top-5
                        z-10
                        opacity-60
                        transition-opacity
                        duration-300
                        group-focus-within:opacity-100
                      "
                    />


                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Tell me about your project, idea or just say hi..."
                      required
                      className="
                        w-full
                        resize-none
                        rounded-xl
                        border
                        border-white/10
                        bg-black/40
                        py-4
                        pl-12
                        pr-4
                        text-base
                        leading-6
                        text-white
                        outline-none

                        placeholder:text-gray-400

                        transition-all
                        duration-300

                        hover:border-white/20

                        focus:border-[#7749FF]/70
                        focus:bg-[#7749FF]/2.5
                        focus:ring-4
                        focus:ring-[#7749FF]/10

                        [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:bg-transparent
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-white/20
                        hover:[&::-webkit-scrollbar-thumb]:bg-[#7749FF]/70
                      "
                    />

                  </div>

                </div>



                {/* =================================================
                    SEND BUTTON
                ================================================== */}

                <div className="pt-2">

                  {/* Disabled while sending to prevent double submissions */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-xl
                      bg-[#7749FF]
                      px-6
                      py-4
                      text-sm
                      font-semibold
                      tracking-[0.14em]
                      text-white

                      shadow-[0_10px_30px_rgba(119,73,255,0.20)]

                      transition-all
                      duration-300

                      hover:-translate-y-0.5
                      hover:bg-[#8358ff]
                      hover:shadow-[0_15px_40px_rgba(119,73,255,0.30)]

                      active:translate-y-0

                      focus:outline-none
                      focus:ring-4
                      focus:ring-[#7749FF]/30

                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >

                    <Image
                      src="/icons/send.png"
                      alt="send"
                      width={19}
                      height={19}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />

                    {/* Button label follows the submission status, so feedback is visible without scrolling */}
                    {status === "sending"
                      ? "SENDING..."
                      : status === "sent"
                        ? "SENT ✓"
                        : status === "error"
                          ? "TRY AGAIN"
                          : "SEND MESSAGE"}

                    <span
                      aria-hidden="true"
                      className="
                        text-lg
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>

                  </button>

                </div>


                {/* Status message (success / error), announced to screen readers */}
                <div aria-live="polite">

                  {status === "sent" && (
                    <p className="text-sm text-emerald-400">
                      Message sent! I'll get back to you soon.
                    </p>
                  )}

                  {status === "error" && (
                    <p className="text-sm text-red-400">
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}

                </div>

              </form>

            </div>

          </div>



          {/* =================================================
              CONNECT WITH ME
          ================================================== */}

          <div className="flex flex-col lg:pl-2">


            {/* =================================================
                OR
            ================================================== */}

            <div className="mb-5 flex items-center gap-4">

              <span
                className="
                  text-base
                  font-semibold
                  tracking-[0.4em]
                  text-gray-400
                "
              >
                OR
              </span>

            </div>



            {/* =================================================
                HEADING
            ================================================== */}

            <h3
              className="
                text-3xl
                font-bold
                tracking-[-0.02em]

                sm:text-4xl
              "
            >
              CONNECT{" "}

              <span className="text-[#8A63FF]">
                WITH ME
              </span>
            </h3>


            <p
              className="
                mt-4
                max-w-lg
                text-base
                leading-6
                text-gray-400

                sm:text-base
              "
            >
              Find me on these platforms.
              I'm always open to new ideas,
              collaborations, and interesting tech conversations.
            </p>



            {/* =================================================
                SOCIAL ICONS
            ================================================== */}

            <div className="mt-10 flex items-center justify-center gap-6 lg:justify-start">

              {/* =================================================
                  EMAIL
              ================================================== */}

              <div className="group relative">

                <a
                  href="mailto:siddharthgaikwad8010@gmail.com"
                  aria-label="Email Siddharth Gaikwad"
                  className="
                    relative
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border
                    border-white/30
                    bg-black
                    transition-all
                    duration-300

                    hover:border-[#7749FF]
                    hover:shadow-[0_0_30px_rgba(119,73,255,0.40)]
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


                  {/* Email Image */}

                  <Image
                    src="/icons/email.png"
                    alt="email"
                    width={28}
                    height={28}
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


                {/* Tooltip */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-18
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-md
                    bg-[#7749FF]
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-white
                    opacity-0
                    shadow-[0_8px_25px_rgba(119,73,255,0.30)]
                    transition-all
                    duration-300
                    group-hover:top-19
                    group-hover:opacity-100
                  "
                >
                  Email
                </span>

              </div>



              {/* =================================================
                  GITHUB
              ================================================== */}

              <div className="group relative">

                <a
                  href="https://github.com/siddharthgaikwad-git"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Siddharth Gaikwad's GitHub profile"
                  className="
                    relative
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border
                    border-white/30
                    bg-black
                    transition-all
                    duration-300

                    hover:border-[#7749FF]
                    hover:shadow-[0_0_30px_rgba(119,73,255,0.40)]
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


                  {/* GitHub Image */}

                  <Image
                    src="/icons/github.png"
                    alt="github"
                    width={29}
                    height={29}
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


                {/* Tooltip */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-18
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-md
                    bg-[#7749FF]
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-white
                    opacity-0
                    shadow-[0_8px_25px_rgba(119,73,255,0.30)]
                    transition-all
                    duration-300
                    group-hover:top-19
                    group-hover:opacity-100
                  "
                >
                  GitHub
                </span>

              </div>



              {/* =================================================
                  LINKEDIN
              ================================================== */}

              <div className="group relative">

                <a
                  href="https://www.linkedin.com/in/siddharth-gaikwad-web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Siddharth Gaikwad's LinkedIn profile"
                  className="
                    relative
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border
                    border-white/30
                    bg-black
                    transition-all
                    duration-300

                    hover:border-[#7749FF]
                    hover:shadow-[0_0_30px_rgba(119,73,255,0.40)]
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


                  {/* LinkedIn Image */}

                  <Image
                    src="/icons/linkedin.png"
                    alt="linkedin"
                    width={29}
                    height={29}
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


                {/* Tooltip */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-18
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-md
                    bg-[#7749FF]
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-white
                    opacity-0
                    shadow-[0_8px_25px_rgba(119,73,255,0.30)]
                    transition-all
                    duration-300

                    group-hover:top-19
                    group-hover:opacity-100
                  "
                >
                  LinkedIn
                </span>

              </div>

            </div>



            {/* =================================================
                EMAIL ADDRESS
            ================================================== */}

            <div className="mt-14 text-center lg:text-left">

              <p
                className="
                  text-xs
                  font-medium
                  tracking-[0.3em]
                  text-gray-400
                "
              >
                PREFER EMAIL?
              </p>


              <a
                href="mailto:siddharthgaikwad8010@gmail.com"
                className="
                  mt-2
                  inline-block
                  text-sm
                  text-gray-400
                  transition-colors
                  duration-300
                  hover:text-[#8A63FF]
                "
              >
                siddharthgaikwad8010@gmail.com
              </a>

            </div>



            {/* =================================================
                             STATUS
                ================================================== */}

            <div
              className="
              mt-10
              flex
              items-center
              justify-center
              gap-3
              border-t
              border-white/10
              pt-6
              text-center
              sm:justify-start
              sm:text-left
              "
            >
              <div>
                <p
                  className="
                  text-xs
                  font-medium
                  tracking-[0.25em]
                  text-gray-400
                  "
                >
                  LET'S CONNECT
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Turn ideas into something real.
                </p>
              </div>
            </div>
          </div>

        </div>


      </div>

    </section>
  );
};

export default Contact;