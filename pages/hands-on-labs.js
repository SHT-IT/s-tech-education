import Card from '../components/Card'
import PageLayout from '../components/PageLayout'
import { FaLinux, FaAws, FaDocker, FaTools } from 'react-icons/fa'

export default function HandsOnLabs() {
  return (
    <PageLayout
      title="Hands-On Labs"
      subtitle="Practice on real servers, cloud platforms and DevOps tools."
    >
      <div className="grid md:grid-cols-2 gap-8">
        <Card icon={FaLinux} title="Linux Labs" gradient="from-gray-700 to-gray-900">
          Real Linux server access with admin-level practice.
        </Card>

        <Card icon={FaAws} title="AWS Cloud Labs" gradient="from-orange-400 to-yellow-500">
          Hands-on EC2, S3, IAM & VPC labs.
        </Card>

        <Card icon={FaDocker} title="Docker Practice" gradient="from-sky-500 to-blue-600">
          Build & run containerized applications.
        </Card>

        <Card icon={FaTools} title="DevOps Tooling" gradient="from-indigo-500 to-purple-600">
          CI/CD, monitoring & automation labs.
        </Card>
      </div>
    </PageLayout>
  )
}
