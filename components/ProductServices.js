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
    title: 'Linux Administration Classes',
    desc:
      'Learn Linux fundamentals, server management, shell scripting, and real-world system administration.',
    icon: FaLinux,
    gradient: 'from-orange-500 to-amber-500',
    link: '/linux-training',
  },
  {
    title: 'AWS Cloud Training',
    desc:
      'Hands-on AWS training covering EC2, S3, IAM, VPC, Load Balancers, and real-time cloud projects.',
    icon: FaAws,
    gradient: 'from-yellow-500 to-orange-500',
    link: '/aws-training',
  },
  {
    title: 'Docker & Kubernetes',
    desc:
      'Containerization, Docker images, Kubernetes clusters, deployments, services, and production use-cases.',
    icon: FaDocker,
    gradient: 'from-cyan-500 to-blue-600',
    link: '/docker-kubernetes',
  },
  {
    title: 'DevOps CI/CD Training',
    desc:
      'CI/CD pipelines using Git, GitHub, Jenkins, Maven, and automated deployments.',
    icon: FaCogs,
    gradient: 'from-indigo-500 to-purple-600',
    link: '/cicd-training',
  },
  {
    title: 'Infrastructure as Code',
    desc:
      'Terraform, configuration management, automation, and cloud infrastructure provisioning.',
    icon: FaCloud,
    gradient: 'from-emerald-500 to-teal-500',
    link: '/devops-course',
  },
  {
    title: 'Real-Time Projects',
    desc:
      'Industry-level DevOps projects, live servers, and deployment scenarios.',
    icon: FaProjectDiagram,
    gradient: 'from-fuchsia-500 to-rose-500',
    link: '/projects',
  },
  {
    title: 'Job-Oriented Training',
    desc:
      'Practical training focused on interviews, resume preparation, and DevOps job roles.',
    icon: FaUserGraduate,
    gradient: 'from-blue-500 to-indigo-600',
    link: '/placement-support',
  },
  {
    title: 'Live Instructor-Led Classes',
    desc:
      'Live interactive sessions with experienced trainers and doubt-clearing support.',
    icon: FaChalkboardTeacher,
    gradient: 'from-red-500 to-pink-500',
    link: '/live-classes',
  },
]

export default function ProductServices() {
  return (
    <section
      id="services"
      className="relative bg-[#fafffd] py-20 sm:py-24 overflow-hidden"
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
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service, index) => {
            const Icon = service.icon

            return (
              <Link
                key={service.title}
                href={service.link}
                className="block focus:outline-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="
                    group relative rounded-3xl bg-white p-8
                    cursor-pointer border border-transparent
                    shadow transition-all duration-500 ease-out
                    hover:border-black hover:-translate-y-2 hover:shadow-xl
                    active:scale-[0.98]
                    focus-visible:ring-2 focus-visible:ring-indigo-500
                    focus-visible:ring-offset-4
                  "
                >
                  {/* ICON */}
                  <div
                    className={`
                      w-14 h-14 rounded-2xl
                      bg-gradient-to-br ${service.gradient}
                      flex items-center justify-center
                      text-white shadow-lg mb-6
                      transition-transform duration-500
                      group-hover:scale-110
                    `}
                  >
                    <Icon size={24} />
                  </div>

                  {/* TEXT */}
                  <h3 className="text-xl font-semibold text-gray-950 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* CTA */}
                  <span
                    className="
                      mt-4 inline-flex items-center gap-1
                      text-sm font-medium text-indigo-600
                      transition-all duration-300
                      group-hover:gap-2 group-hover:underline
                    "
                  >
                    View Syllabus →
                  </span>

                  {/* SOFT GLOW */}
                  <div
                    className="
                      pointer-events-none absolute inset-0 rounded-3xl
                      bg-gradient-to-br from-transparent via-transparent to-black/5
                      opacity-0 group-hover:opacity-100
                      transition duration-500
                    "
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
