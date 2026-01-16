'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiChevronDown, HiMenu, HiX } from 'react-icons/hi'

/* ================= MENU DATA ================= */
const MENU = {
  courses: {
    label: 'Courses',
    tabs: [
      {
        title: 'DevOps Full Course',
        heading: 'Complete DevOps Training',
        desc:
          'Master Linux, AWS, Docker, Kubernetes, CI/CD, Terraform with real-time projects and hands-on labs.',
        link: '/devops-course',
      },
      {
        title: 'AWS Cloud',
        heading: 'AWS Cloud Training',
        desc:
          'Hands-on AWS training covering EC2, S3, IAM, VPC, Load Balancers and cloud architecture.',
        link: '/aws-training',
      },
      {
        title: 'Linux Administration',
        heading: 'Linux Administration Course',
        desc:
          'Learn Linux fundamentals, server management, shell scripting and system administration.',
        link: '/linux-training',
      },
      {
        title: 'Docker & Kubernetes',
        heading: 'Container & Kubernetes Training',
        desc:
          'Build, deploy and manage containerized applications using Docker & Kubernetes.',
        link: '/docker-kubernetes',
      },
      {
        title: 'CI/CD & Automation',
        heading: 'CI/CD & DevOps Automation',
        desc:
          'Git, GitHub, Jenkins pipelines, automation scripts and deployment strategies.',
        link: '/cicd-training',
      },
    ],
  },

  training: {
    label: 'Training',
    tabs: [
      {
        title: 'Live Classes',
        heading: 'Live Instructor-Led Training',
        desc:
          'Interactive live classes with real-time doubt clearing and mentor support.',
        link: '/live-classes',
      },
      {
        title: 'Real-Time Projects',
        heading: 'Industry Projects',
        desc:
          'Work on real-world DevOps projects used in actual production environments.',
        link: '/projects',
      },
      {
        title: 'Job Assistance',
        heading: 'Placement & Career Support',
        desc:
          'Resume preparation, interview guidance and job-oriented DevOps training.',
        link: '/placement-support',
      },
    ],
  },

  resources: {
    label: 'Resources',
    tabs: [
      {
        title: 'Blog',
        heading: 'DevOps Blog',
        desc:
          'DevOps tutorials, cloud tips, interview questions and best practices.',
        link: '/blog',
      },
      {
        title: 'FAQs',
        heading: 'Frequently Asked Questions',
        desc:
          'Common questions about DevOps training, batches and placements.',
        link: '/faqs',
      },
      {
        title: 'Success Stories',
        heading: 'Student Success Stories',
        desc:
          'Stories of students who built DevOps careers with us.',
        link: '/success-stories',
      },
    ],
  },

  about: {
    label: 'About',
    tabs: [
      {
        title: 'About Us',
        heading: 'About S Tech Education',
        desc:
          'We are a DevOps & Cloud training institute focused on practical, job-oriented learning.',
        link: '/about-us',
      },
      {
        title: 'Why Choose Us',
        heading: 'Why S Tech Education',
        desc:
          'Experienced trainers, live projects, and industry-focused curriculum.',
        link: '/why-choose-us',
      },
      {
        title: 'Our Trainers',
        heading: 'Meet Our Trainers',
        desc:
          'Learn from industry experts with real-world DevOps experience.',
        link: '/trainers',
      },
      {
        title: 'Contact Us',
        heading: 'Get In Touch',
        desc:
          'Talk to our team for course details, batch timings and enrollment.',
        link: '/contact',
      },
    ],
  },
}

/* ================= HEADER ================= */
export default function Header() {
  const [openMenu, setOpenMenu] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-2">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/images/logo/logoo.png"
            alt="S Tech Education"
            width={180}
            height={60}
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10" ref={menuRef}>
          {Object.entries(MENU).map(([key, item]) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => {
                setOpenMenu(key)
                setActiveIndex(0)
              }}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center gap-1 font-medium">
                {item.label}
                <HiChevronDown
                  className={`transition ${
                    openMenu === key ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openMenu === key && (
                <div className="absolute left-1/2 top-full mt-4 -translate-x-1/2 w-[90vw] max-w-4xl rounded-2xl bg-white shadow-2xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3">

                    {/* LEFT TABS */}
                    <div className="bg-gray-50 p-6 space-y-2">
                      {item.tabs.map((tab, idx) => (
                        <button
                          key={tab.title}
                          onMouseEnter={() => setActiveIndex(idx)}
                          className={`w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                            activeIndex === idx
                              ? 'bg-white text-blue-700 shadow'
                              : 'text-gray-700 hover:bg-white'
                          }`}
                        >
                          {tab.title}
                        </button>
                      ))}
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="lg:col-span-2 p-6 lg:p-10">
                      <h2 className="text-xl lg:text-2xl font-semibold mb-4">
                        {item.tabs[activeIndex].heading}
                      </h2>
                      <p className="text-gray-600 max-w-2xl">
                        {item.tabs[activeIndex].desc}
                      </p>
                      <Link
                        href={item.tabs[activeIndex].link}
                        className="inline-block mt-6 font-semibold text-blue-700"
                      >
                        Know More →
                      </Link>
                    </div>

                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden lg:block rounded-full border px-6 py-2  transition text-black font-bold"
        >
          Contact Us
        </Link>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden text-3xl"
        >
          <HiMenu />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="absolute left-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto">

            <div className="flex justify-between items-center mb-6">
              <Image src="/images/logo/logoo.png" alt="Logo" width={120} height={40} />
              <button onClick={() => setMobileOpen(false)} className="text-2xl">
                <HiX />
              </button>
            </div>

            {Object.entries(MENU).map(([key, item]) => (
              <div key={key} className="border-b py-3">
                <button
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === key ? null : key)
                  }
                  className="w-full flex justify-between items-center font-semibold"
                >
                  {item.label}
                  <HiChevronDown
                    className={`transition ${
                      mobileDropdown === key ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {mobileDropdown === key && (
                  <ul className="mt-3 pl-6 space-y-2 list-disc">
                    {item.tabs.map((tab) => (
                      <li key={tab.link}>
                        <Link
                          href={tab.link}
                          onClick={() => setMobileOpen(false)}
                          className="font-medium hover:text-blue-700"
                        >
                          {tab.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
