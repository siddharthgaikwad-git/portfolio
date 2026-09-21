import React from 'react'
import Image from 'next/image'

// ---- Data ---------------------------------------------------------------
// Everything about a project lives here. Add/remove/reorder projects by
// editing these arrays only — numbering, layout, and cards stay in sync.

const mainProjects = [
    {
        image: '/project/ShortyURL.webp',
        alt: 'ShortyURL',
        title: 'ShortyURL',
        description:
            'A simple and efficient URL shortening platform that converts long URLs into short, shareable links. Includes duplicate detection, quick copy options, and recent link history.',
        stack: ['Next.js', 'React', 'Tailwind', 'MongoDB'],
        demo: 'https://shorty-url-indol.vercel.app',
        github: 'https://github.com/siddharthgaikwad-git/ShortyURL.git',
    },
    {
        image: '/project/SocialTree.webp',
        alt: 'SocialTree',
        title: 'SocialTree',
        description:
            'A modern link-in-bio platform allowing users to build customized profiles and organize multiple destinations into a clean, responsive interface.',
        stack: ['Next.js', 'Tailwind', 'MongoDB'],
        demo: 'https://socialtree-psi.vercel.app',
        github: 'https://github.com/siddharthgaikwad-git/socialtree.git',
    },
    {
        image: '/project/get_a_me_chai.webp',
        alt: 'Get Me A Chai',
        title: 'Get Me A Chai',
        description:
            'Support your favorite creators through a simple, interactive platform where users can showcase profiles and receive funding from audiences seamlessly.',
        stack: ['Next.js', 'Tailwind', 'MongoDB'],
        demo: 'https://get-me-a-chai-sigma.vercel.app/',
        github: 'https://github.com/siddharthgaikwad-git/get-me-a-chai.git',
    },
    {
        image: '/project/password.webp',
        alt: 'Password Manager',
        title: 'Password Manager',
        description:
            'Organize, save, edit, delete, and secure your credentials through a clean, easy-to-use interface optimized for simple local credential control.',
        stack: ['Next.js', 'Tailwind', 'MongoDB'],
        demo: 'https://passop-password-manager.siddharthgaikwad.workers.dev',
        github: 'https://github.com/siddharthgaikwad-git/Password-Manager.git',
    },
]

const miniProjects = [
    {
        image: '/project/todo.jpeg',
        alt: 'Todo List',
        title: 'Todo List',
        description:
            'Stay organized with a task manager built to quickly add, manage, and remove daily priorities.',
        stack: ['React', 'Tailwind'],
        demo: 'https://todo.siddharthgaikwad.workers.dev',
        github: 'https://github.com/siddharthgaikwad-git/Todo.git',
    },
    {
        image: '/project/xclone.webp',
        alt: 'X Clone',
        title: 'X Clone',
        description:
            'A clean social media UI experiment inspired by X, built to test modern layout responsiveness.',
        stack: ['HTML', 'Tailwind'],
        demo: 'https://x-com-clone.pages.dev',
        github: 'https://github.com/siddharthgaikwad-git/X.com-clone.git',
    },
    {
        image: '/project/spotifydemo.webp',
        alt: 'Spotify Clone',
        title: 'Spotify Clone',
        description:
            'An interactive web player interface featuring playlists and track layouts replicating Spotify.',
        stack: ['HTML', 'CSS', 'JS'],
        demo: 'https://siddharthgaikwad-git.github.io/Spotify-clone/',
        github: 'https://github.com/siddharthgaikwad-git/Spotify-clone.git',
    },
]

const featured = {
    image: '/project/netflix.webp',
    alt: 'Netflix UI Clone',
    title: 'Netflix UI Clone',
    description:
        'Explore a Netflix-inspired streaming interface designed to recreate the look and feel of a modern entertainment platform, with a focus on clean layouts and visual presentation.',
    stack: ['HTML', 'CSS'],
    demo: 'https://siddharthgaikwad-git.github.io/Netflix-ui-clone/',
    github: 'https://github.com/siddharthgaikwad-git/Netflix-clone.git',
}

// Continuous numbering across all sections (01 -> 08), computed once.
const totalNumbered = mainProjects.length + miniProjects.length + 1 // +1 for featured

// ---- Small shared pieces --------------------------------------------------

const ExternalLink = ({ href, children, size = 'base' }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`
            group/link relative overflow-hidden

            ${size === 'base'
                ? 'flex-1 py-2.5 text-xs tracking-wider'
                : 'flex-1 py-2 text-[11px]'
            }

            bg-neutral-950
            border border-neutral-800
            text-neutral-300

            font-mono
            font-bold
            uppercase
            rounded-lg

            flex items-center justify-center gap-2

            transition-all duration-500 ease-out

            hover:border-[#7749FF]/50
            hover:text-white
            hover:-translate-y-
            hover:shadow-[0_8px_30px_rgba(119,73,255,0.12)]
        `}
    >
        {/* Moving light */}
        <span
            className="
                absolute
                inset-0
                -translate-x-full
                skew-x-[-20deg]
                bg-linear-to-r
                from-transparent
                via-[#7749FF]/15
                to-transparent

                group-hover/link:translate-x-full

                transition-transform
                duration-700
                ease-out
            "
        />

        {/* Top highlight */}
        <span
            className="
                absolute
                top-0
                left-[15%]
                right-[15%]
                h-px
                bg-linear-to-r
                from-transparent
                via-[#7749FF]/60
                to-transparent

                opacity-0
                group-hover/link:opacity-100

                transition-opacity duration-500
            "
        />

        <span className="relative z-10">
            {children}
        </span>

        <span
            className="
                relative
                z-10
                transition-all
                duration-300

                group-hover/link:translate-x-1
                group-hover/link:-translate-y-1
            "
        >
            ↗
        </span>

    </a>
)

const TechBadge = ({ children, className = '' }) => (
    <span
        className={`text-[12px] font-mono px-2 py-0.5 bg-neutral-900 border border-neutral-600 rounded text-neutral-300 ${className}`}
    >
        {children}
    </span>
)

// ---- Card variants ---------------------------------------------------------

const MainProjectCard = ({ project, number, priority }) => (
    <article className=" group
        bg-neutral-950
        border border-neutral-800
        rounded-xl
        p-5
        flex flex-col justify-between

        transition-all duration-300 ease-out

        hover:border-[#7749FF]/40
        hover:shadow-[0_0_35px_6px_rgba(119,73,255,0.25)]">
        <div>
            <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 mb-6 ">
                <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-500"
                    priority={priority}
                />
            </div>
            <div className="flex items-baseline justify-between">
                <span className="text-[#8A63FF] font-mono text-base">{number}</span>
                <div className="flex flex-wrap gap-1.5 justify-end">
                    {project.stack.map((tech) => (
                        <TechBadge key={tech}>{tech}</TechBadge>
                    ))}
                </div>
            </div>
            <h3 className="font-bold text-xl mt-2 tracking-tight">{project.title.toUpperCase()}</h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{project.description}</p>
        </div>

        <div className="flex items-center gap-4 mt-8 pt-4  border-neutral-900">
            <ExternalLink href={project.demo}>LIVE DEMO</ExternalLink>
            <ExternalLink href={project.github}>GITHUB</ExternalLink>
        </div>
    </article>
)

const MiniProjectCard = ({ project, number, priority }) => (
    <article className=" group
        bg-neutral-950
        border border-neutral-800
        rounded-xl
        p-5
        flex flex-col justify-between

        transition-all duration-300 ease-out

        hover:border-[#7749FF]/40
        hover:shadow-[0_0_35px_6px_rgba(119,73,255,0.25)]">
        <div>
            <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 mb-4">
                <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-500"
                    priority={priority}
                />
            </div>
            <div className="flex items-baseline justify-between">
                <span className="text-[#8A63FF] font-mono text-base">{number}</span>
                <div className="flex flex-wrap gap-1.5 justify-end">
                    {project.stack.map((tech) => (
                        <TechBadge key={tech}>{tech}</TechBadge>
                    ))}
                </div>
            </div>
            <h3 className="font-bold text-lg mt-1 tracking-tight">{project.title.toUpperCase()}</h3>
            <p className="mt-2 text-xs text-neutral-400 leading-relaxed">{project.description}</p>
        </div>

        <div className="flex items-center gap-3 mt-6 pt-4  border-neutral-900">
            <ExternalLink href={project.demo} size="sm">LIVE DEMO</ExternalLink>
            <ExternalLink href={project.github} size="sm">Github</ExternalLink>
        </div>
    </article>
)

const SectionDivider = ({ label }) => (
    <div className="mt-24 mb-10">
        <div className="flex items-center gap-3 mb-2">
            <h2 className="text-[#8A63FF] text-xs font-mono tracking-widest uppercase">{label}</h2>
        </div>
    </div>
)

// ---- Section ---------------------------------------------------------------

const Work = () => {
    return (
        <section
            id="work"
            className="min-h-screen bg-black text-white px-6 md:px-16 pt-20 pb-28 flex flex-col selection:bg-[#7749FF] selection:text-white"
        >
            <div className='mx-auto w-full max-w-7xl'>


                {/* Section Header */}
                <div className="flex items-center gap-3 mb-5">
                    <h2 className="text-[#8A63FF] text-2xl font-semibold">SELECTED WORK</h2>
                </div>

                {/* Main Full-Stack Applications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {mainProjects.map((project, i) => (
                        <MainProjectCard
                            key={project.title}
                            project={project}
                            number={String(i + 1).padStart(2, '0')}
                            priority={i < 2}
                        />
                    ))}
                </div>

                {/* Mini Apps */}
                <SectionDivider label="MINI-PROJECT" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {miniProjects.map((project, i) => (
                        <MiniProjectCard
                            key={project.title}
                            project={project}
                            number={String(mainProjects.length + i + 1).padStart(2, '0')}
                            priority={false}
                        />
                    ))}
                </div>

                {/* Featured Milestone Project */}
                <SectionDivider label="MY FIRST PROJECT" />
                <article
                    className="
                    group
                    bg-neutral-950
                    border border-neutral-800
                    rounded-xl
                    p-6 md:p-8
                    transition-all duration-300 ease-out
                    grid grid-cols-1 lg:grid-cols-12
                    gap-8
                    items-center
                    hover:border-[#7749FF]/40
                    hover:shadow-[0_0_35px_6px_rgba(119,73,255,0.25)]
                     "
                >
                    <div className="lg:col-span-4 flex flex-col justify-between">
                        <div>

                            <div className="flex items-baseline justify-between">
                                <span className="text-[#8A63FF] font-mono text-base">
                                    {String(totalNumbered).padStart(2, '0')}
                                </span>

                                <div className="flex flex-wrap justify-end gap-1.5">
                                    {featured.stack.map((tech) => (
                                        <TechBadge key={tech}>
                                            {tech}
                                        </TechBadge>
                                    ))}
                                </div>
                            </div>

                            <h3 className="mt-1 text-2xl font-bold tracking-tight">
                                {featured.title.toUpperCase()}
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                                {featured.description}
                            </p>



                        </div>

                        <div className="mt-8 flex items-center gap-4 border-neutral-900 pt-4">
                            <ExternalLink href={featured.demo}>
                                LIVE DEMO
                            </ExternalLink>

                            <ExternalLink href={featured.github}>
                                GITHUB
                            </ExternalLink>
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
                            <Image
                                src={featured.image}
                                alt={featured.alt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 66vw"
                                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Work