import PageLayout from '../components/PageLayout'
import Link from 'next/link'
import {
  FaDocker,
  FaCubes,
  FaLayerGroup,
  FaNetworkWired,
  FaProjectDiagram,
  FaServer,
  FaTools,
} from 'react-icons/fa'

const MODULES = [
  {
    title: 'Docker Fundamentals',
    desc: 'Containers vs VMs, Docker architecture, images, containers and registries.',
    icon: FaDocker,
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    title: 'Docker Images & Volumes',
    desc: 'Dockerfile, image optimization, volumes, bind mounts and persistence.',
    icon: FaLayerGroup,
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    title: 'Docker Networking',
    desc: 'Bridge, host, overlay networks and container communication.',
    icon: FaNetworkWired,
    gradient: 'from-cyan-500 to-teal-600',
  },
  {
    title: 'Kubernetes Core Concepts',
    desc: 'Pods, nodes, clusters, namespaces and Kubernetes architecture.',
    icon: FaCubes,
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'K8s Deployments & Services',
    desc: 'Deployments, ReplicaSets, Services, Ingress and scaling applications.',
    icon: FaProjectDiagram,
    gradient: 'from-emerald-500 to-green-600',
  },
  {
    title: 'Monitoring & Troubleshooting',
    desc: 'Logs, health checks, debugging pods and real-world Kubernetes issues.',
    icon: FaServer,
    gradient: 'from-rose-500 to-pink-600',
  },
]

const SYLLABUS = [
  {
    title: 'Module 1: Docker Basics',
    points: [
      'Containers vs Virtual Machines',
      'Docker architecture',
      'Docker installation & setup',
      'Docker CLI commands',
    ],
  },
  {
    title: 'Module 2: Docker Images & Containers',
    points: [
      'Dockerfile & image creation',
      'Image optimization best practices',
      'Container lifecycle',
      'Volumes & persistent storage',
    ],
  },
  {
    title: 'Module 3: Docker Networking',
    points: [
      'Bridge, host & overlay networks',
      'Container-to-container communication',
      'Port mapping',
      'Docker Compose basics',
    ],
  },
  {
    title: 'Module 4: Kubernetes Fundamentals',
    points: [
      'Kubernetes architecture',
      'Pods, nodes & clusters',
      'Namespaces & labels',
      'kubectl basics',
    ],
  },
  {
    title: 'Module 5: Deployments & Services',
    points: [
      'Deployments & ReplicaSets',
      'Services & Ingress',
      'ConfigMaps & Secrets',
      'Scaling applications',
    ],
  },
  {
    title: 'Module 6: Monitoring & Troubleshooting',
    points: [
      'Logs & events',
      'Health checks',
      'Debugging pods',
      'Real-world production issues',
    ],
  },
]


export default function DockerKubernetes() {
  return (
    <PageLayout
      title="Docker & Kubernetes Training"
      subtitle="Learn containerization and orchestration with hands-on labs and real-world Kubernetes projects."
    >
      {/* ===== INTRO ===== */}
      <div className="max-w-3xl mb-16">
        <p className="text-gray-700 leading-relaxed">
          Containers are the backbone of modern DevOps and cloud-native
          applications. At <strong>S Tech Education</strong>, our Docker &
          Kubernetes training helps you build, deploy and manage scalable
          applications using industry-standard tools.
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

      {/* ===== DOCKER & K8s SYLLABUS ===== */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-gray-950 mb-10">
          Docker & Kubernetes Course Syllabus
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
                    <span className="text-blue-600 font-bold">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>


      {/* ===== WHY DOCKER & K8s ===== */}
      <div className="mt-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold text-gray-950 mb-4">
            Why Learn Docker & Kubernetes?
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>✅ Core skill for DevOps & Cloud Engineers</li>
            <li>✅ Used by startups & large enterprises</li>
            <li>✅ Essential for microservices architecture</li>
            <li>✅ High demand in modern IT jobs</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow">
          <h3 className="text-xl font-semibold text-gray-950 mb-4">
            Training Highlights
          </h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>• Live instructor-led training</li>
            <li>• Real-time containerized projects</li>
            <li>• Production-like Kubernetes clusters</li>
            <li>• Job-oriented DevOps approach</li>
          </ul>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="mt-24 text-center">
        <div className="inline-flex items-center gap-3 mb-4 text-sm font-semibold text-gray-500">
          <FaTools className="text-blue-600" />
          Container & Kubernetes Career Path
        </div>

        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-950">
          Master Containerization & Orchestration
        </h3>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Build production-ready containerized applications with Docker and
          Kubernetes under expert guidance at S Tech Education.
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
