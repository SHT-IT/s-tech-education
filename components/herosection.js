'use client'

import {
  FaLinux,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaJenkins,
} from 'react-icons/fa'
import { SiKubernetes } from 'react-icons/si'

export default function HeroSection() {
  return (
    <section className="relative bg-slate-100 overflow-hidden border-b">
      <div className="min-h-[90vh] flex items-center">
        <div
          className="
            max-w-7xl mx-auto px-6
            flex flex-col-reverse
            lg:grid lg:grid-cols-2
            gap-14 items-center
          "
        >

          {/* ================= TEXT ================= */}
          <div className="text-start lg:text-left">
            <h1
              className="
                text-[30px]
                sm:text-[40px]
                md:text-[50px]
                lg:text-[60px]
                font-medium leading-tight
                text-gray-900
              "
            >
              Job-Oriented <br />
              <span
                className="
                  font-normal
                  bg-gradient-to-r from-indigo-600 to-purple-600
                  bg-clip-text text-transparent
                "
              >
                DevOps & Cloud Training
              </span>
            </h1>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-gray-600 text-sm sm:text-base">
              Learn <strong>Linux, AWS, Docker, Kubernetes & CI/CD</strong>
              with hands-on labs and real-time projects.
            </p>

            <div className="mt-8 flex gap-4 justify-start lg:justify-start flex-wrap">
              <a
                href="/course-register"
                className="
                  rounded-full bg-gray-950 px-7 py-3
                  text-white font-medium shadow-lg
                  hover:bg-gray-800 transition
                "
              >
                🚀 Register Now
              </a>

           
            </div>
          </div>

          {/* ================= ORBIT ================= */}
          <div className="flex justify-center lg:justify-end">
            <OrbitSystem />
          </div>

        </div>
      </div>
    </section>
  )
}

/* ================= ORBIT SYSTEM ================= */
function OrbitSystem() {
  return (
    <div
      className="
        relative
        w-[220px] h-[220px]
        sm:w-[260px] sm:h-[260px]
        md:w-[300px] md:h-[300px]
        m-auto
      "
    >
      {/* CENTER */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div
          className="
            h-14 w-14 sm:h-16 sm:w-16
            rounded-full
            bg-gradient-to-br from-indigo-600 to-purple-600
            text-white text-xs font-semibold
            flex items-center justify-center
            shadow-xl
          "
        >
          DevOps
        </div>
      </div>

      {/* ORBIT 1 */}
      <Orbit size="70%" duration="18s" color="border-orange-300/40">
        <Planet icon={FaLinux} color="text-orange-500" />
      </Orbit>

      {/* ORBIT 2 */}
      <Orbit size="85%" duration="26s" color="border-amber-300/40">
        <Planet icon={FaAws} color="text-amber-500" />
        <Planet icon={FaDocker} color="text-sky-500" offset />
      </Orbit>

      {/* ORBIT 3 */}
      <Orbit size="100%" duration="34s" color="border-indigo-300/40">
        <Planet icon={SiKubernetes} color="text-blue-600" />
        <Planet icon={FaGitAlt} color="text-orange-600" offset />
        <Planet icon={FaJenkins} color="text-red-500" offsetMore />
      </Orbit>
    </div>
  )
}

/* ================= ORBIT ================= */
function Orbit({ size, duration, color, children }) {
  return (
    <div
      style={{ width: size, height: size, animationDuration: duration }}
      className={`
        absolute inset-0 m-auto rounded-full
        border-2  ${color}
        animate-orbit
      `}
    >
      {children}
    </div>
  )
}

/* ================= PLANET ================= */
function Planet({ icon: Icon, color, offset, offsetMore }) {
  let pos = 'top-[-14px] left-1/2 -translate-x-1/2'
  if (offset) pos = 'right-[-14px] top-1/2 -translate-y-1/2'
  if (offsetMore) pos = 'bottom-[-14px] left-1/2 -translate-x-1/2'

  return (
    <div
      className={`
        absolute ${pos}
        h-8 w-8 sm:h-9 sm:w-9
        rounded-full bg-white
        flex items-center justify-center
        shadow-md ring-1 ring-black/10
      `}
    >
      <Icon className={`text-[29px] sm:text-[29px] ${color}`} />
    </div>
  )
}
