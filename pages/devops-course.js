import PageLayout from '../components/PageLayout'
import Link from 'next/link'
import {
  FaLinux,
  FaAws,
  FaDocker,
  FaCogs,
  FaProjectDiagram,
  FaChartLine,
} from 'react-icons/fa'

const MODULES = [
  {
    title: 'Linux Fundamentals & Administration',
    desc: 'Linux commands, file systems, users, permissions, services, and shell scripting.',
    icon: FaLinux,
    gradient: 'from-gray-800 to-gray-600',
  },
  {
    title: 'AWS Cloud (EC2, S3, IAM, VPC)',
    desc: 'Hands-on AWS training covering core cloud services and architecture design.',
    icon: FaAws,
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'Docker & Kubernetes',
    desc: 'Containerization, Docker images, Kubernetes clusters, deployments, and services.',
    icon: FaDocker,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'CI/CD with Git & Jenkins',
    desc: 'Build automated pipelines using Git, GitHub, Jenkins, and CI/CD best practices.',
    icon: FaCogs,
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    title: 'Terraform & Infrastructure as Code',
    desc: 'Provision cloud infrastructure using Terraform and automation tools.',
    icon: FaProjectDiagram,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Monitoring & Real-Time Projects',
    desc: 'Monitoring, logging, alerts, and real-world DevOps project implementation.',
    icon: FaChartLine,
    gradient: 'from-fuchsia-500 to-pink-500',
  },
]
const SYLLABUS = [
  {
    title: 'Module 1: Linux Fundamentals',
    points: [
      'Linux architecture & distributions',
      'File system & permissions',
      'Users & groups',
      'Shell scripting basics',
    ],
  },
  {
    title: 'Module 2: AWS Cloud Essentials',
    points: [
      'Cloud computing concepts',
      'EC2, S3, IAM & VPC',
      'Load balancers & Auto Scaling',
      'AWS security best practices',
    ],
  },
  {
    title: 'Module 3: Docker & Containerization',
    points: [
      'Containers vs VMs',
      'Docker images & containers',
      'Volumes & networking',
      'Docker Compose',
    ],
  },
  {
    title: 'Module 4: Kubernetes Orchestration',
    points: [
      'Kubernetes architecture',
      'Pods, services & deployments',
      'ConfigMaps & secrets',
      'Scaling & rolling updates',
    ],
  },
  {
    title: 'Module 5: CI/CD Automation',
    points: [
      'Git & GitHub workflows',
      'Jenkins pipelines',
      'Pipeline as Code',
      'Automated testing & builds',
    ],
  },
  {
    title: 'Module 6: Infrastructure as Code',
    points: [
      'Terraform basics',
      'Provisioning AWS resources',
      'State management',
      'Infrastructure automation',
    ],
  },
  {
    title: 'Module 7: Monitoring & Logging',
    points: [
      'Application & server monitoring',
      'Logs & alerts',
      'CloudWatch basics',
      'Production troubleshooting',
    ],
  },
  {
    title: 'Module 8: Real-Time Projects',
    points: [
      'End-to-end DevOps project',
      'CI/CD with Docker & Kubernetes',
      'AWS deployment',
      'Industry-level use cases',
    ],
  },
]

export default function DevOpsCourse() {
  return (
    <PageLayout
      title="Complete DevOps Training Course"
      subtitle="Job-oriented DevOps training with hands-on labs, real-time projects, and industry best practices."
    >
      {/* ===== MODULES GRID ===== */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {MODULES.map((module) => {
          const Icon = module.icon

          return (
            <div
              key={module.title}
              className="group relative rounded-3xl bg-white p-7
              shadow transition-all duration-500
              hover:-translate-y-2 hover:shadow-xl"
            >
              {/* ICON */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${module.gradient}
                flex items-center justify-center text-white shadow-lg mb-6
                transition-transform duration-500 group-hover:scale-110`}
              >
                <Icon size={26} />
              </div>

              {/* TEXT */}
              <h3 className="text-lg font-semibold text-gray-950 mb-2">
                {module.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {module.desc}
              </p>

              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl
                bg-gradient-to-br from-transparent via-transparent to-black/5
                opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>
          )
        })}
      </div>

      {/* ===== DEVOPS SYLLABUS ===== */}
      <div className="mt-24">
        <h2 className="text-3xl font-semibold text-gray-950 mb-10">
          Complete DevOps Course Syllabus
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SYLLABUS.map((module) => (
            <div
              key={module.title}
              className="rounded-3xl bg-white p-7 shadow
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold text-gray-950 mb-4">
                {module.title}
              </h3>

              <ul className="space-y-2 text-sm text-gray-600">
                {module.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-indigo-600 font-bold">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>


      {/* ===== CTA ===== */}
      <div className="mt-16 text-center">
        <Link
          href="/devops-course"
          className="inline-flex items-center justify-center rounded-full
          bg-gradient-to-r from-gray-950 to-gray-800
          px-10 py-4 text-white text-lg font-medium
          shadow-lg hover:scale-[1.03] transition"
        >
          🚀 Enroll in DevOps Course
        </Link>

        <p className="mt-4 text-sm text-gray-600">
          Limited seats • Live batches • Job-oriented training
        </p>
      </div>
    </PageLayout>
  )
}
