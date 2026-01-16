import PageLayout from '../components/PageLayout'
import Link from 'next/link'
import {
  FaAws,
  FaCloud,
  FaNetworkWired,
  FaLock,
  FaServer,
  FaDatabase,
  FaChartLine,
} from 'react-icons/fa'

const MODULES = [
  {
    title: 'AWS Fundamentals',
    desc: 'Cloud concepts, global infrastructure, regions, availability zones and pricing.',
    icon: FaCloud,
    gradient: 'from-orange-400 to-yellow-500',
  },
  {
    title: 'Compute (EC2 & Auto Scaling)',
    desc: 'Launch EC2 instances, AMIs, load balancers and auto scaling groups.',
    icon: FaServer,
    gradient: 'from-indigo-500 to-blue-600',
  },
  {
    title: 'Networking (VPC)',
    desc: 'VPC, subnets, route tables, internet gateways and NAT gateways.',
    icon: FaNetworkWired,
    gradient: 'from-cyan-500 to-sky-600',
  },
  {
    title: 'Storage (S3, EBS, EFS)',
    desc: 'Object, block and file storage with backup and lifecycle policies.',
    icon: FaDatabase,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Security & IAM',
    desc: 'IAM users, roles, policies, security groups and best practices.',
    icon: FaLock,
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    title: 'Monitoring & Cost Control',
    desc: 'CloudWatch, alarms, logs, billing dashboards and cost optimization.',
    icon: FaChartLine,
    gradient: 'from-purple-500 to-fuchsia-600',
  },
]
const SYLLABUS = [
  {
    title: 'Module 1: AWS Cloud Basics',
    points: [
      'Cloud computing concepts',
      'AWS global infrastructure',
      'Regions & Availability Zones',
      'AWS pricing & billing basics',
    ],
  },
  {
    title: 'Module 2: Compute Services',
    points: [
      'EC2 instance types & AMIs',
      'Elastic Load Balancer (ELB)',
      'Auto Scaling Groups',
      'EC2 security best practices',
    ],
  },
  {
    title: 'Module 3: Networking (VPC)',
    points: [
      'VPC architecture',
      'Public & private subnets',
      'Route tables & gateways',
      'NAT & VPC peering',
    ],
  },
  {
    title: 'Module 4: Storage Services',
    points: [
      'Amazon S3',
      'EBS & EFS',
      'Backup & lifecycle policies',
      'Data security & encryption',
    ],
  },
  {
    title: 'Module 5: Security & IAM',
    points: [
      'IAM users, roles & policies',
      'Security groups & NACLs',
      'AWS shared responsibility model',
      'Best security practices',
    ],
  },
  {
    title: 'Module 6: Monitoring & Cost Optimization',
    points: [
      'CloudWatch metrics & alarms',
      'Logs & monitoring',
      'Billing dashboards',
      'Cost optimization strategies',
    ],
  },
]

export default function AWSTraining() {
  return (
    <PageLayout
      title="AWS Cloud Training"
      subtitle="Learn Amazon Web Services with hands-on labs, real-time projects and job-oriented cloud training."
    >
      {/* ===== INTRO ===== */}
      <div className="max-w-3xl mb-16">
        <p className="text-gray-700 leading-relaxed">
          At <strong>S Tech Education</strong>, our AWS Cloud Training program is
          designed to help students and professionals master cloud computing
          concepts with real-world implementation. You will work on live AWS
          environments and industry use cases.
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
      {/* ===== AWS SYLLABUS ===== */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-gray-950 mb-10">
          AWS Course Syllabus
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
                    <span className="text-orange-500 font-bold">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ===== WHY AWS ===== */}
      <div className="mt-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold text-gray-950 mb-4">
            Why Learn AWS?
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>✅ Most widely used cloud platform globally</li>
            <li>✅ High demand for AWS professionals</li>
            <li>✅ Used by startups & enterprises</li>
            <li>✅ Strong foundation for DevOps & Cloud roles</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow">
          <h3 className="text-xl font-semibold text-gray-950 mb-4">
            Training Highlights
          </h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>• Live instructor-led classes</li>
            <li>• Real-time cloud projects</li>
            <li>• Interview & certification guidance</li>
            <li>• Job-oriented training approach</li>
          </ul>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="mt-24 text-center">
        <div className="inline-flex items-center gap-3 mb-4 text-sm font-semibold text-gray-500">
          <FaAws className="text-orange-500" />
          AWS Cloud Career Path
        </div>

        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-950">
          Start Your AWS Cloud Journey Today
        </h3>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Learn AWS from industry experts with practical labs and real-world
          implementation at S Tech Education.
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
