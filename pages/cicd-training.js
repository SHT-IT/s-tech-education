import PageLayout from '../components/PageLayout'
import Link from 'next/link'
import {
  FaGitAlt,
  FaGithub,
  FaJenkins,
  FaCogs,
  FaRocket,
  FaProjectDiagram,
  FaTools,
} from 'react-icons/fa'

const MODULES = [
  {
    title: 'Version Control with Git',
    desc: 'Git basics, branching strategies, merging, rebasing and best practices.',
    icon: FaGitAlt,
    gradient: 'from-orange-500 to-red-600',
  },
  {
    title: 'GitHub & Code Collaboration',
    desc: 'Repositories, pull requests, code reviews and CI workflows.',
    icon: FaGithub,
    gradient: 'from-gray-700 to-gray-900',
  },
  {
    title: 'CI with Jenkins',
    desc: 'Jenkins installation, jobs, pipelines, agents and automation workflows.',
    icon: FaJenkins,
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    title: 'Pipeline as Code',
    desc: 'Declarative pipelines, Jenkinsfile, environment variables and secrets.',
    icon: FaProjectDiagram,
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    title: 'Automated Testing & Builds',
    desc: 'Build automation, testing stages, artifact management and notifications.',
    icon: FaCogs,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Continuous Deployment',
    desc: 'Automated deployments to servers, containers and Kubernetes clusters.',
    icon: FaRocket,
    gradient: 'from-rose-500 to-pink-600',
  },
]
const SYLLABUS = [
  {
    title: 'Module 1: Version Control with Git',
    points: [
      'Git installation & configuration',
      'Repositories, commits & branches',
      'Merging & rebasing',
      'Git best practices',
    ],
  },
  {
    title: 'Module 2: GitHub & Collaboration',
    points: [
      'GitHub repositories',
      'Pull requests & code reviews',
      'Branching strategies',
      'CI workflow basics',
    ],
  },
  {
    title: 'Module 3: Jenkins Fundamentals',
    points: [
      'Jenkins installation & setup',
      'Freestyle jobs & pipelines',
      'Agents & executors',
      'Jenkins security basics',
    ],
  },
  {
    title: 'Module 4: Pipeline as Code',
    points: [
      'Declarative vs scripted pipelines',
      'Jenkinsfile syntax',
      'Environment variables',
      'Credentials & secrets management',
    ],
  },
  {
    title: 'Module 5: Build, Test & Artifacts',
    points: [
      'Build automation',
      'Automated testing stages',
      'Artifact repositories',
      'Notifications & reporting',
    ],
  },
  {
    title: 'Module 6: Continuous Deployment',
    points: [
      'Deployment strategies',
      'Deployments to servers',
      'CI/CD with Docker',
      'CI/CD with Kubernetes',
    ],
  },
]


export default function CICDTraining() {
  return (
    <PageLayout
      title="CI/CD & DevOps Automation Training"
      subtitle="Build automated CI/CD pipelines using Git, Jenkins and modern DevOps practices."
    >
      {/* ===== INTRO ===== */}
      <div className="max-w-3xl mb-16">
        <p className="text-gray-700 leading-relaxed">
          CI/CD is a core DevOps skill that enables faster and reliable software
          delivery. At <strong>S Tech Education</strong>, our CI/CD training
          focuses on building real-world pipelines used in modern DevOps
          environments.
        </p>
      </div>

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

      {/* ===== CI/CD SYLLABUS ===== */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-gray-950 mb-10">
          CI/CD Course Syllabus
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

      {/* ===== WHY CI/CD ===== */}
      <div className="mt-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold text-gray-950 mb-4">
            Why Learn CI/CD?
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>✅ Essential skill for DevOps engineers</li>
            <li>✅ Faster software delivery & reduced errors</li>
            <li>✅ Widely used in modern IT companies</li>
            <li>✅ Strong demand in DevOps & Cloud roles</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow">
          <h3 className="text-xl font-semibold text-gray-950 mb-4">
            Training Highlights
          </h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>• Live instructor-led CI/CD training</li>
            <li>• Hands-on pipeline implementation</li>
            <li>• Real-world DevOps automation scenarios</li>
            <li>• Integration with Docker & Kubernetes</li>
            <li>• Job-oriented DevOps approach</li>
          </ul>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="mt-24 text-center">
        <div className="inline-flex items-center gap-3 mb-4 text-sm font-semibold text-gray-500">
          <FaTools className="text-indigo-600" />
          DevOps Automation Career Path
        </div>

        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-950">
          Automate Software Delivery with CI/CD
        </h3>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Learn to design and implement reliable CI/CD pipelines used in
          production DevOps environments with S Tech Education.
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
