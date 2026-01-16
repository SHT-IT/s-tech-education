'use client'

import React from 'react'
import Image from 'next/image'
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaProjectDiagram,
  FaBriefcase,
} from 'react-icons/fa'

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f5f5f7]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f5f5f7] to-[#eef1f5]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-24">
          <h2 className="rs-shop-header text-3xl sm:text-4xl font-bold tracking-tight animate-fade-up">
            About S Tech Education
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-[#6e6e73] text-base sm:text-lg animate-ios-fade-up delay-150">
            We deliver <strong>job-oriented DevOps & Cloud training</strong> through
            live classes, hands-on labs, and real-world project experience.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* IMAGE */}
          <div className="relative animate-ios-fade-in">
            <div className="rounded-[28px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/about/hero-img-1-min.jpg"
                alt="DevOps & Cloud Training Classes"
                width={900}
                height={650}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="space-y-10 animate-ios-fade-up delay-200">

            <h3 className="text-2xl sm:text-3xl font-medium text-[#1d1d1f]">
              Learn DevOps & Cloud From Industry Experts
            </h3>

            <p className="text-[#6e6e73] leading-relaxed">
              At <strong>S Tech Education</strong>, our focus is on practical,
              industry-relevant skills. We train students and professionals
              to work confidently on real DevOps environments and crack
              technical interviews with ease.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">

              <Feature
                icon={<FaChalkboardTeacher />}
                title="Live Instructor-Led Classes"
              >
                Interactive live sessions with experienced DevOps & Cloud
                trainers and continuous doubt-clearing support.
              </Feature>

              <Feature
                icon={<FaProjectDiagram />}
                title="Real-Time Industry Projects"
              >
                Hands-on projects using AWS, Docker, Kubernetes,
                CI/CD pipelines and cloud infrastructure.
              </Feature>

              <Feature
                icon={<FaUserGraduate />}
                title="Beginner to Advanced Learning"
              >
                Structured courses suitable for freshers, working
                professionals and career switchers.
              </Feature>

              <Feature
                icon={<FaBriefcase />}
                title="Career & Placement Support"
              >
                Resume building, interview preparation and guidance
                for DevOps & Cloud job roles.
              </Feature>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

/* ================= FEATURE COMPONENT ================= */

function Feature({ icon, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="p-3 rounded-xl
        bg-gradient-to-br from-[#0071e3] to-[#4aa3ff]
        text-white shadow-md"
      >
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-[#1d1d1f]">
          {title}
        </h4>
        <p className="text-sm text-[#6e6e73] mt-1 leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  )
}
