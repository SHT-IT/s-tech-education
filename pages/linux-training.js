import PageLayout from '../components/PageLayout'
import Link from 'next/link'
import {
  FaLinux,
  FaTerminal,
  FaUserShield,
  FaNetworkWired,
  FaCogs,
  FaServer,
  FaTools,
} from 'react-icons/fa'

const MODULES = [
  {
    title: 'Linux Fundamentals',
    desc: 'Linux architecture, distributions, file system structure and basic commands.',
    icon: FaLinux,
    gradient: 'from-gray-700 to-gray-900',
  },
  {
    title: 'User & Permission Management',
    desc: 'Users, groups, file permissions, ACLs and security best practices.',
    icon: FaUserShield,
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    title: 'Shell Scripting',
    desc: 'Bash scripting, automation, cron jobs and real-time scripting use cases.',
    icon: FaTerminal,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Networking in Linux',
    desc: 'IP addressing, DNS, SSH, FTP, firewall and troubleshooting.',
    icon: FaNetworkWired,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'System Administration',
    desc: 'Process management, services, logs, boot process and system monitoring.',
    icon: FaCogs,
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    title: 'Servers & Troubleshooting',
    desc: 'Apache/Nginx basics, package management and real-time server issues.',
    icon: FaServer,
    gradient: 'from-rose-500 to-pink-600',
  },
]
const SYLLABUS = [
  {
    title: 'Module 1: Linux Basics',
    points: [
      'Linux OS overview & distributions',
      'Linux architecture',
      'File system hierarchy',
      'Basic commands & navigation',
    ],
  },
  {
    title: 'Module 2: User & Security Management',
    points: [
      'Users & groups',
      'File permissions & ownership',
      'ACL & sudo access',
      'Linux security best practices',
    ],
  },
  {
    title: 'Module 3: Shell Scripting',
    points: [
      'Bash scripting basics',
      'Conditional statements & loops',
      'Cron jobs & scheduling',
      'Automation use cases',
    ],
  },
  {
    title: 'Module 4: Networking & Services',
    points: [
      'IP addressing & DNS',
      'SSH, FTP & SCP',
      'Firewall & ports',
      'Network troubleshooting',
    ],
  },
  {
    title: 'Module 5: System Administration',
    points: [
      'Process & service management',
      'Logs & monitoring',
      'Boot process',
      'Performance tuning',
    ],
  },
  {
    title: 'Module 6: Servers & Real-Time Practice',
    points: [
      'Apache & Nginx basics',
      'Package management',
      'Server deployment',
      'Real-world troubleshooting',
    ],
  },
]

export default function LinuxTraining() {
  return (
    <PageLayout
      title="Linux Administration Training"
      subtitle="Master Linux system administration with hands-on labs and real-world server management."
    >
      {/* ===== INTRO ===== */}
      <div className="max-w-3xl mb-16">
        <p className="text-gray-700 leading-relaxed">
          Linux is the backbone of modern IT infrastructure, cloud platforms and
          DevOps environments. At <strong>S Tech Education</strong>, our Linux
          Administration Training prepares you to confidently manage Linux
          servers used in real production environments.
        </p>
      </div>

      {/* ===== MODULES ===== */}
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

              <h3 className="text-lg font-semibold text-gray-950 mb-2">
                {module.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {module.desc}
              </p>
            </div>
          )
        })}
      </div>

      {/* ===== SYLLABUS ===== */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-gray-950 mb-10">
          Linux Course Syllabus
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SYLLABUS.map((module) => (
            <div
              key={module.title}
              className="rounded-3xl bg-white p-7 shadow
        transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold text-gray-950 mb-4">
                {module.title}
              </h3>

              <ul className="space-y-2 text-sm text-gray-600">
                {module.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-emerald-500 font-bold">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ===== WHY LINUX ===== */}
      <div className="mt-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold text-gray-950 mb-4">
            Why Learn Linux?
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>✅ Core skill for DevOps & Cloud engineers</li>
            <li>✅ Powers servers, cloud, containers & Kubernetes</li>
            <li>✅ High demand across IT & enterprise roles</li>
            <li>✅ Strong foundation for AWS & DevOps training</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow">
          <h3 className="text-xl font-semibold text-gray-950 mb-4">
            Training Highlights
          </h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>• Live instructor-led sessions</li>
            <li>• Hands-on Linux server practice</li>
            <li>• Real-time troubleshooting scenarios</li>
            <li>• Shell scripting for automation</li>
            <li>• Job-oriented curriculum</li>
          </ul>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="mt-24 text-center">
        <div className="inline-flex items-center gap-3 mb-4 text-sm font-semibold text-gray-500">
          <FaTools className="text-gray-700" />
          Linux System Administration Path
        </div>

        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-950">
          Build a Strong Linux Foundation
        </h3>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Learn Linux administration with hands-on labs and real-world server
          scenarios guided by industry experts at S Tech Education.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            href="/devops-course"
            className="inline-flex items-center justify-center
            rounded-full bg-gray-950 px-8 py-3
            text-white font-medium shadow-lg
            hover:bg-gray-800 transition"
          >
            🚀 Enroll Now
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center
            rounded-full border border-gray-300
            px-8 py-3 font-medium text-gray-900
            hover:bg-gray-100 transition"
          >
            Talk to Advisor
          </Link>
        </div>
      </div>


      

    </PageLayout>
  )
}
