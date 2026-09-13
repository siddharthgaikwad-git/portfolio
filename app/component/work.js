import React from 'react'
import Image from 'next/image'

const Work = () => {
    return (
        <section
            id="work"
            className="min-h-screen bg-black text-white px-10 md:px-16 pt-20 pb-20 flex flex-col"
        >


            <h2 className="text-[#7749FF] text-2xl font-semibold">
                SELECTED WORK
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">

                <div className=" border border-gray-600 rounded-md p-3">
                    <figure className='flex items-center justify-center'>
                        <Image
                            src="/get_a_me_chai.png"
                            alt="get me a chai"
                            width={450}
                            height={350}
                            className="object-cover border border-gray-500"
                            priority
                        />
                    </figure>
                    <div className='px-10 mt-1'>
                        <span className='text-[#7749FF]'>01</span>
                        <h2 className='font-bold text-lg'>GET ME A CHAI</h2>

                        <p className='mt-2 text-base text-gray-100 '>Support your favorite creators through a
                            simple and interactive platform. Creators can
                            showcase their profiles and receive support
                            from their audience through an easy-to-use
                            interface.</p>
                        <span className='flex mt-5 text-gray-200 '> ● Next.js ● Tailwind ● MongoDB</span>
                        <div className="flex  gap-5 mt-6">

                            <a
                                href="https://get-me-a-chai-sigma.vercel.app/"
                                target="_blank"
                                className="px-6 py-3 bg-black border border-neutral-700 text-white text-xs 
                                font-bold uppercase tracking-wider rounded-sm hover:border-white transition-colors
                                 flex items-center gap-2"
                            >LIVE DEMO
                                <span>↗</span>
                            </a>

                            <a
                                href="https://github.com/siddharthgaikwad-git/get-me-a-chai.git"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-black border border-neutral-700 text-white text-xs
                                 font-bold uppercase tracking-wider rounded-sm hover:border-white transition-colors
                                  flex items-center gap-2"
                            >
                                GITHUB
                                <span>↗</span>
                            </a>

                        </div>

                    </div>
                </div>


                <div className="border border-gray-600 rounded-md p-3 mt-20 sm:mt-0">


                    <figure className='flex items-center justify-center'>
                        <Image
                            src="/password.png"
                            alt="passop"
                            width={450}
                            height={350}
                            className="object-cover border border-gray-500"
                            priority
                        />
                    </figure>
                    <div className='px-10 mt-1'>
                        <span className='text-[#7749FF]'>02</span>
                        <h2 className='font-bold text-lg'>PASSWORD MANAGER</h2>

                        <p className='mt-2 text-base text-gray-100 '>
                            Keep your passwords organized. Save, edit, delete, and access your
                            credentials through a clean and easy-to-use
                            interface designed for simple password
                            management.</p>
                        <span className='flex mt-5 text-gray-200 '> ● Next.js ● Tailwind ● MongoDB</span>
                        <div className="flex  gap-5 mt-6">

                            <a
                                href="https://passop-password-manager.siddharthgaikwad.workers.dev"
                                target="_blank"
                                className="px-6 py-3 bg-black border border-neutral-700 text-white text-xs
                                 font-bold uppercase tracking-wider rounded-sm hover:border-white transition-colors
                                  flex items-center gap-2"
                            >LIVE DEMO
                                <span>↗</span>
                            </a>

                            <a
                                href="https://github.com/siddharthgaikwad-git/Password-Manager.git"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-black border border-neutral-700 text-white text-xs 
                                font-bold uppercase tracking-wider rounded-sm hover:border-white transition-colors 
                                flex items-center gap-2"
                            >
                                GITHUB
                                <span>↗</span>
                            </a>

                        </div>

                    </div>


                </div>

            </div>

            {/* 3 project side by side */}
            <div className='mt-[15vh]'></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className=" border border-gray-600 rounded-md p-3">
                    <figure className='flex items-center justify-center '>
                        <Image
                            src="/todo.jpeg"
                            alt="todo"
                            width={450}
                            height={350}
                            className="object-cover border border-gray-500"
                            priority
                        />
                    </figure>
                    <div className='px-5 sm:px-10 mt-1'>
                        <span className='text-[#7749FF]'>03</span>
                        <h2 className='font-bold text-lg'>TODO LIST</h2>

                        <p className='mt-2 text-base text-gray-100'>Stay organized with a simple
                            task management. Lets
                            you add, manage, and remove
                            your daily tasks through a
                            simple interface.</p>
                        <span className='flex mt-5 text-gray-200 '> ● React ● Tailwind CSS </span>
                        <div className="flex gap-6 mt-6">

                            <a
                                href="https://todo.siddharthgaikwad.workers.dev"
                                target="_blank"
                                className="px-3 py-3 bg-black border border-neutral-700 text-white text-xs
                                 font-bold uppercase tracking-wider rounded-sm hover:border-white transition-colors
                                  flex items-center gap-2"
                            >LIVE DEMO
                                <span>↗</span>
                            </a>

                            <a
                                href="https://github.com/siddharthgaikwad-git/Todo.git"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-3 bg-black border border-neutral-700 text-white text-xs font-bold
                                 uppercase tracking-wider rounded-sm hover:border-white transition-colors flex items-center
                                  gap-2"
                            >
                                GITHUB
                                <span>↗</span>
                            </a>

                        </div>

                    </div>
                </div>


                <div className="border border-gray-600 rounded-md p-3">


                    <figure className='flex items-center justify-center'>
                        <Image
                            src="/xclone.png"
                            alt="x clone"
                            width={450}
                            height={350}
                            className="h-47 object-cover border border-gray-500"
                            priority
                        />
                    </figure>
                    <div className='px-5 sm:px-10 mt-1'>
                        <span className='text-[#7749FF]'>04</span>
                        <h2 className='font-bold text-lg'>X CLONE</h2>

                        <p className='mt-2 text-base text-gray-100 '>A simple social media interface
                            inspired by X, featuring a clean
                            layout. Created to
                            experiment with responsive
                            layouts and modern UI.</p>
                        <span className='flex mt-5 text-gray-200 '> ● HTML ● Tailwind CSS </span>
                        <div className="flex  gap-6 mt-6">

                            <a
                                href="https://x-com-clone.pages.dev"
                                target="_blank"
                                className="px-3 py-3 bg-black border border-neutral-700 text-white text-xs font-bold
                                 uppercase tracking-wider rounded-sm hover:border-white transition-colors flex items-center
                                  gap-2"
                            >LIVE DEMO
                                <span>↗</span>
                            </a>

                            <a
                                href="https://github.com/siddharthgaikwad-git/X.com-clone.git"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-3 bg-black border border-neutral-700 text-white text-xs font-bold
                                 uppercase tracking-wider rounded-sm hover:border-white transition-colors flex items-center
                                  gap-2"
                            >
                                GITHUB
                                <span>↗</span>
                            </a>

                        </div>

                    </div>


                </div>
                <div className="border border-gray-600 rounded-md p-3">


                    <figure className='flex items-center justify-center'>
                        <Image
                            src="/spotifydemo.png"
                            alt="spotify clone"
                            width={450}
                            height={350}
                            className="object-cover border border-gray-500"
                            priority
                        />
                    </figure>
                    <div className='px-5 sm:px-10 mt-1'>
                        <span className='text-[#7749FF]'>05</span>
                        <h2 className='font-bold text-lg'>SPOTIFY CLONE</h2>

                        <p className='mt-2 text-base text-gray-100 '>A Spotify
                            interface with playlists, songs.
                            Built as a practice project
                            to recreate the visual experience
                            of a real-world platform.</p>
                        <span className='flex mt-5 text-gray-200 '> ● HTML ● CSS ● JavaScript  </span>
                        <div className="flex gap-6 mt-6">

                            <a
                                href="https://siddharthgaikwad-git.github.io/Spotify-clone/"
                                target="_blank"
                                className="px-3 py-3 bg-black border border-neutral-700 text-white text-xs
                                 font-bold uppercase tracking-wider rounded-sm hover:border-white transition-colors 
                                 flex items-center gap-2"
                            >LIVE DEMO
                                <span>↗</span>
                            </a>

                            <a
                                href="https://github.com/siddharthgaikwad-git/Spotify-clone.git"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-3 bg-black border border-neutral-700 text-white text-xs
                                 font-bold uppercase tracking-wider rounded-sm hover:border-white transition-colors
                                  flex items-center gap-2"
                            >
                                GITHUB
                                <span>↗</span>
                            </a>

                        </div>

                    </div>


                </div>

            </div>

            {/* Single Project */}

            <div className="mt-[15vh]">

                <h2 className="text-[#7749FF] text-2xl font-semibold">
                    MY FIRST UI CLONE PROJECT
                </h2>

                <div className="mt-5 grid grid-cols-1 lg:grid-cols-10 gap-6 bg-black text-white p-4 md:p-6 lg:p-8 border
                               border-gray-600 rounded-md">

                    {/* Right/Image Side - mobile वर first */}
                    <div className="order-1 lg:order-2 lg:col-span-7 flex items-center justify-center">
                        <Image
                            loading="eager"
                            src="/netflix.png"
                            alt="Netflix UI Clone"
                            width={700}
                            height={350}
                            className="w-full h-auto object-cover border border-gray-500"
                        />
                    </div>


                    {/* Left/Content Side - mobile वर second */}
                    <div className="order-2 lg:order-1 lg:col-span-3 flex flex-col gap-3">

                        <span className="text-[#7749FF] text-sm">
                            05
                        </span>

                        <h2 className="font-bold text-lg">
                            NETFLIX UI CLONE
                        </h2>

                        <p className="text-sm md:text-base text-gray-100 leading-relaxed">
                            Explore a Netflix-inspired streaming interface designed to
                            recreate the look and feel of a modern entertainment platform,
                            with a focus on clean layouts and visual presentation.
                        </p>

                        {/* Technologies */}
                        <span className="text-sm text-gray-300 mt-2">
                            • HTML • CSS
                        </span>

                        {/* Buttons */}
                        <div className="flex items-center gap-4 mt-4">

                            <a
                                href="https://siddharthgaikwad-git.github.io/Netflix-clone/"
                                target="_blank"
                                className="px-3 py-2.5 bg-black border border-neutral-700 text-white text-xs
                                 font-bold uppercase tracking-wider rounded-sm hover:border-white transition-colors
                                  flex items-center gap-2"
                            >
                                LIVE DEMO
                                <span>↗</span>
                            </a>

                            <a
                                href="https://github.com/siddharthgaikwad-git/Netflix-clone.git"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-2.5 bg-black border border-neutral-700 text-white text-xs
                                 font-bold uppercase tracking-wider rounded-sm hover:border-white transition-colors 
                                 flex items-center gap-2"
                            >
                                GITHUB
                                <span>↗</span>
                            </a>

                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Work
