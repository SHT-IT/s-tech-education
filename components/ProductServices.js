'use client'

import React from 'react'
import Link from 'next/link'
import {
  FaLinux,
  FaAws,
  FaDocker,
  FaCogs,
  FaProjectDiagram,
  FaCloud,
  FaUserGraduate,
  FaChalkboardTeacher,
} from 'react-icons/fa'

const SERVICES = [
  {
    title: 'Linux Administration',
    desc:
      'Linux fundamentals, server management, shell scripting & administration.',
    icon: FaLinux,
    gradient: 'from-orange-500 to-amber-500',
    link: '/linux-training',
  },
  {
    title: 'AWS Cloud Training',
    desc:
      'Hands-on AWS services, EC2, S3, IAM, VPC & real-time projects.',
    icon: FaAws,
    gradient: 'from-yellow-500 to-orange-500',
    link: '/aws-training',
  },
  {
    title: 'Docker & Kubernetes',
    desc:
      'Docker containers, Kubernetes clusters & deployments.',
    icon: FaDocker,
    gradient: 'from-cyan-500 to-blue-600',
    link: '/docker-kubernetes',
  },
  {
    title: 'DevOps CI/CD',
    desc:
      'CI/CD pipelines using Git, GitHub & Jenkins.',
    icon: FaCogs,
    gradient: 'from-indigo-500 to-purple-600',
    link: '/cicd-training',
  },
  {
    title: 'Infrastructure as Code',
    desc:
      'Terraform, automation & cloud infrastructure.',
    icon: FaCloud,
    gradient: 'from-emerald-500 to-teal-500',
    link: '/devops-course',
  },
  {
    title: 'Real-Time Projects',
    desc:
      'Industry-level DevOps projects & live servers.',
    icon: FaProjectDiagram,
    gradient: 'from-fuchsia-500 to-rose-500',
    link: '/projects',
  },
  {
    title: 'Job-Oriented Training',
    desc:
      'Interview prep, resume & job-focused learning.',
    icon: FaUserGraduate,
    gradient: 'from-blue-500 to-indigo-600',
    link: '/placement-support',
  },
  {
    title: 'Live Classes',
    desc:
      'Instructor-led live sessions & doubt solving.',
    icon: FaChalkboardTeacher,
    gradient: 'from-red-500 to-pink-500',
    link: '/live-classes',
  },
]

export default function ProductServices() {
  return (
    <section
      id="services"
      className="relative bg-[#fafffd] py-16 sm:py-24"
    >
      {/* ===== TITLE ===== */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16 sm:mb-20">
        <h2 className="rs-shop-header text-3xl sm:text-4xl font-bold tracking-tight">
          DevOps & Cloud Training Programs
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Industry-focused DevOps training with live classes,
          real-time projects, and job-oriented curriculum.
        </p>
      </div>

      {/* ===== GRID ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon

            return (
              <Link
                key={service.title}
                href={service.link}
                className="group"
              >
                <div
                  className="
                    h-full rounded-2xl bg-white
                    border border-gray-100
                    p-4 sm:p-6
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg
                  "
                >
                  {/* ICON */}
                  <div
                    className={`
                      mb-3 sm:mb-5
                      w-10 h-10 sm:w-14 sm:h-14
                      rounded-xl
                      bg-gradient-to-br ${service.gradient}
                      flex items-center justify-center
                      text-white
                      shadow-md
                    `}
                  >
                    <Icon className="text-lg sm:text-2xl" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600 leading-snug sm:leading-relaxed line-clamp-3">
                    {service.desc}
                  </p>

                  {/* CTA */}
                  <span
                    className="
                      mt-2 sm:mt-4 inline-block
                      text-xs sm:text-sm
                      font-medium text-indigo-600
                      group-hover:underline
                    "
                  >
                    View Details →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
