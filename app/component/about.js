


const About = () => {


    return (
        <section
            id="about"
            className="min-h-screen bg-black text-white px-10 md:px-16 pt-20 flex flex-col"
        >

            {/* Section Label */}
            <h2 className="text-[#7749FF] text-2xl font-semibold">
                ABOUT ME
            </h2>


            {/* Main Content */}
            <div className="py-5 grid grid-cols-1">

                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl font-bold">
                    I'M A COMPUTER ENGINEERING STUDENT WHO
                    LIKES TO BUILD.
                </h2>


                {/* Paragraph */}
                <p className="pt-7 max-w-2xl text-lg md:text-xl text-gray-300">
                    I'm Siddharth — currently exploring web development,
                    design and different technologies by turning ideas into
                    projects.
                </p>


                {/* Learning Statement */}
                <div className="pt-6">
                    <span className="text-[#7749FF] font-bold text-2xl">
                        —{" "}
                    </span>

                    <span className="text-lg md:text-xl italic">
                        I learn by building, breaking things,
                        and trying again.
                    </span>
                </div>


                {/* Bottom Statement */}
                <div className="mt-8">
                    <p className="underline text-xl font-bold text-gray-300">
                        I LIKE TURNING IDEAS INTO REAL THINGS
                    </p>
                </div>

            </div>


            {/* ================= TEXT ANIMATION ================= */}

            <div className="flex items-center justify-center pt-10">
                <p className="text-base md:text-2xl font-bold tracking-wide text-gray-100">
                    I CONSTANTLY TRY TO{" "}

                    <span className="words">
                        <span className="word">ADAPT</span>
                        <span className="word">GROW</span>
                        <span className="word">BUILD</span>
                        <span className="word">IMPROVE</span>
                        <span className="word">ADAPT</span>
                    </span>
                </p>
            </div>

        </section>
    );
};

export default About;