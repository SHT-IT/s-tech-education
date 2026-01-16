'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden
      bg-[linear-gradient(115deg,#fff1be_28%,#ee87cb_70%,#b060ff)]
      p-2 "
    >
      {/* INNER CARD */}
      <div
        className="mx-auto rounded-[2.5rem]
        bg-white/80 backdrop-blur
        ring-1 ring-black/5"
      >
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">

            {/* ================= CTA ================= */}
            <div className="pt-20 pb-16 text-center sm:py-24">
              <h2 className="font-mono text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Get Started
              </h2>

              <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
                Ready to start your DevOps journey?
                <br />
                Join S Tech Education today.
              </p>

              <p className="mx-auto mt-6 max-w-md text-sm text-gray-600">
                Learn DevOps with live classes, hands-on labs, real-world projects
                and job-oriented training guided by industry experts.
              </p>

              <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <Link
                  href="/devops-course"
                  className="inline-flex items-center justify-center
                  rounded-full bg-gray-950 px-8 py-3
                  text-base font-medium text-white
                  shadow-md hover:bg-gray-800 transition"
                >
                  🚀 Enroll Now
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center
                  rounded-full bg-white/70 px-8 py-3
                  text-base font-medium text-gray-950
                  ring-1 ring-black/10 hover:bg-white transition"
                >
                  Talk to Advisor
                </Link>
              </div>
            </div>

            {/* ================= FOOTER LINKS ================= */}
            <div className="grid grid-cols-2 gap-y-12 pb-16
              sm:grid-cols-3 lg:grid-cols-6 lg:gap-8"
            >
              {/* BRAND */}
              <div className="col-span-2">
                <p className="text-lg font-semibold text-gray-950">
                  S Tech Education
                </p>
                <p className="mt-4 text-sm text-gray-600 max-w-xs">
                  Job-oriented DevOps & Cloud training institute offering
                  live classes, real-time projects and career support.
                </p>
              </div>

              {/* COURSES */}
              <div>
                <h3 className="text-sm font-medium text-gray-950/50 ml-8">
                  Courses
                </h3>
                <ul className="mt-6 space-y-4 text-sm ">
                  <li><Link href="/devops-course" className="font-medium  text-gray-950 hover:text-gray-700">DevOps Training</Link></li>
                  <li><Link href="/aws-training" className="font-medium  text-gray-950 hover:text-gray-700">AWS Cloud</Link></li>
                  <li><Link href="/linux-training" className="font-medium  text-gray-950 hover:text-gray-700">Linux Admin</Link></li>
                  <li><Link href="/docker-kubernetes" className="font-medium  text-gray-950 hover:text-gray-700">Docker & Kubernetes</Link></li>
                </ul>
              </div>

              {/* TRAINING */}
              <div>
                <h3 className="text-sm font-medium text-gray-950/50 ml-8">
                  Training
                </h3>
                <ul className="mt-6 space-y-4 text-sm">
                  <li><Link href="/live-classes" className="font-medium text-gray-950 hover:text-gray-700">Live Classes</Link></li>
                  <li><Link href="/hands-on-labs" className="font-medium text-gray-950 hover:text-gray-700">Hands-on Labs</Link></li>
                  <li><Link href="/projects" className="font-medium text-gray-950 hover:text-gray-700">Real-Time Projects</Link></li>
                  <li><Link href="/placement-support" className="font-medium text-gray-950 hover:text-gray-700">Placement Support</Link></li>
                </ul>
              </div>

              {/* COMPANY */}
              <div>
                <h3 className="text-sm font-medium text-gray-950/50 ml-8">
                  Company
                </h3>
                <ul className="mt-6 space-y-4 text-sm">
                  <li><Link href="/about-us" className="font-medium text-gray-950 hover:text-gray-700">About Us</Link></li>
                  <li><Link href="/why-choose-us" className="font-medium text-gray-950 hover:text-gray-700">Why Choose Us</Link></li>
                  <li><Link href="/trainers" className="font-medium text-gray-950 hover:text-gray-700">Our Trainers</Link></li>
                  <li><Link href="/contact" className="font-medium text-gray-950 hover:text-gray-700">Contact</Link></li>
                </ul>
              </div>

              {/* RESOURCES */}
              <div>
                <h3 className="text-sm font-medium text-gray-950/50 ml-8">
                  Resources
                </h3>
                <ul className="mt-6 space-y-4 text-sm items-start">
                  <li><Link href="/blog" className="font-medium text-gray-950 hover:text-gray-700">Blog</Link></li>
                  <li><Link href="/faqs" className="font-medium text-gray-950 hover:text-gray-700">FAQs</Link></li>
                  <li><Link href="/success-stories" className="font-medium text-gray-950 hover:text-gray-700">Success Stories</Link></li>
                </ul>
              </div>
            </div>

            {/* ================= BOTTOM BAR ================= */}
            <div
              className="flex flex-col items-center justify-between
  gap-4 border-t border-black/5 py-6 sm:flex-row"
            >
              <p className="text-sm text-gray-600 text-center sm:text-left">
                © {new Date().getFullYear()} S Tech Education. All rights reserved.
                <span className="mx-2 text-gray-400">|</span>
                Design by{" "}
                <a
                  href="https://kirant.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-gray-800 hover:text-indigo-600 transition"
                >
                  Kiran Tirmale
                </a>
              </p>

              <div className="flex gap-6 text-sm">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </footer>
  )
}
