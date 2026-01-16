import PageLayout from '../components/PageLayout'
import Card from '../components/Card'
import {
  FaCloud,
  FaProjectDiagram,
  FaRocket,
  FaDatabase,
  FaShieldAlt,
  FaChartLine,
} from 'react-icons/fa'

export default function Projects() {
  return (
    <PageLayout
      title="Real-Time DevOps & Cloud Projects"
      subtitle="Work on industry-level projects that simulate real production environments."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <Card
          icon={FaCloud}
          title="AWS Cloud Deployment Project"
          gradient="from-orange-500 to-yellow-500"
        >
          Design and deploy highly available applications on AWS using
          EC2, VPC, Load Balancers, Auto Scaling and S3.
        </Card>

        <Card
          icon={FaProjectDiagram}
          title="CI/CD Pipeline Automation"
          gradient="from-indigo-500 to-purple-600"
        >
          Build end-to-end CI/CD pipelines using Git, GitHub, Jenkins
          with automated build, test and deployment stages.
        </Card>

        <Card
          icon={FaRocket}
          title="Docker & Kubernetes Project"
          gradient="from-sky-500 to-blue-600"
        >
          Containerize applications with Docker and deploy scalable
          microservices on Kubernetes clusters.
        </Card>

        <Card
          icon={FaDatabase}
          title="Monitoring & Logging Project"
          gradient="from-emerald-500 to-teal-600"
        >
          Implement monitoring and logging using Prometheus, Grafana
          and centralized log management tools.
        </Card>

        <Card
          icon={FaShieldAlt}
          title="Security & IAM Implementation"
          gradient="from-rose-500 to-pink-600"
        >
          Configure IAM roles, policies, security groups and apply
          DevOps security best practices.
        </Card>

        <Card
          icon={FaChartLine}
          title="Production Troubleshooting Project"
          gradient="from-fuchsia-500 to-purple-600"
        >
          Handle real-world production issues, debugging, scaling,
          rollbacks and performance optimization.
        </Card>

      </div>
    </PageLayout>
  )
}
