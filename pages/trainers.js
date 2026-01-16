import PageLayout from '../components/PageLayout'
import Card from '../components/Card'
import { FaUserGraduate } from 'react-icons/fa'

export default function Trainers() {
  return (
    <PageLayout
      title="Our Trainers"
      subtitle="Learn from experienced DevOps & Cloud professionals."
    >
      <div className="grid md:grid-cols-2 gap-8">
        <Card icon={FaUserGraduate} title="DevOps Expert" gradient="from-indigo-500 to-purple-600">
          8+ years of real-world DevOps experience.
        </Card>

        <Card icon={FaUserGraduate} title="AWS Architect" gradient="from-orange-500 to-yellow-500">
          Certified cloud professionals with industry exposure.
        </Card>
      </div>
    </PageLayout>
  )
}
