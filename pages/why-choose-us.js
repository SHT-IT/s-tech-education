import PageLayout from '../components/PageLayout'
import Card from '../components/Card'
import { FaChalkboardTeacher, FaProjectDiagram, FaHandsHelping, FaStar } from 'react-icons/fa'

export default function WhyChooseUs() {
  return (
    <PageLayout
      title="Why Choose S Tech Education?"
      subtitle="Trusted DevOps & Cloud training institute."
    >
      <div className="grid md:grid-cols-2 gap-8">
        <Card icon={FaChalkboardTeacher} title="Expert Trainers" gradient="from-indigo-500 to-purple-600">
          Learn from industry professionals with real experience.
        </Card>

        <Card icon={FaProjectDiagram} title="Real-Time Projects" gradient="from-emerald-500 to-teal-600">
          Hands-on industry-level project experience.
        </Card>

        <Card icon={FaHandsHelping} title="Placement Support" gradient="from-amber-500 to-orange-600">
          Job assistance till placement.
        </Card>

        <Card icon={FaStar} title="Proven Results" gradient="from-rose-500 to-pink-600">
          Hundreds of successful DevOps careers.
        </Card>
      </div>
    </PageLayout>
  )
}
