'use client'

export default function PageLayout({ title, subtitle, children }) {
    return (
        <section className="relative overflow-hidden p-4 lg:p-4 sm:p-4 ">
            {/* OUTER GRADIENT FRAME */}
            <div
                className="absolute inset-0  p-5
        bg-[linear-gradient(115deg,#fff7d1_30%,#f5c1ea_65%,#caa9ff)]"
            />

            {/* INNER CONTAINER */}
            <div className="relative mx-auto  rounded-[2.5rem]
        bg-white/85 backdrop-blur
        ring-1 ring-black/5
        px-6 sm:px-10 lg:px-16
        py-20 sm:py-24"
            >
                {/* PAGE HEADER */}
                <div className="max-w-3xl">
                    <span className="inline-block mb-4 rounded-full
            bg-black/5 px-4 py-1
            text-xs font-semibold uppercase tracking-widest text-gray-600">
                        Program Details
                    </span>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl
            font-semibold tracking-tight text-gray-950 leading-tight">
                        {title}
                    </h1>

                    <p className="mt-4 text-base sm:text-lg text-gray-600">
                        {subtitle}
                    </p>
                </div>

                {/* PAGE CONTENT */}
                <div className="mt-16">
                    {children}
                </div>
            </div>
        </section>
    )
}
